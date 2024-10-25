import ConfirmationModal from "@/components/preset/modals/ConfirmationModal";
import ProductEntryModal from "@/components/preset/modals/ProductEntryModal";
import { MODAL_NAMES } from "@/constants/modal";
import { useModalManager } from "@/utils/useModalManager";

export default function ProductManager() {
  const { modals, openModal, closeModal } = useModalManager(Object.values(MODAL_NAMES));

  const handleProductSubmit = async (data: any) => {
    try {
      console.log(data)
      closeModal(MODAL_NAMES.PRODUCT_ENTRY);
    } catch (error) {
      console.error('Error saving product:', error);
      // Handle error (show toast notification, etc.)
    }
  };

  return (
    <div className="m-4">
      <div className="flex gap-3">
        <button
          onClick={() => openModal(MODAL_NAMES.PRODUCT_ENTRY)}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none hover:bg-blue-500"
        >
          Add Product
        </button>

        <button
          onClick={() => openModal(MODAL_NAMES.PRODUCT_DELETE)}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none hover:bg-blue-500"
        >
          Delete Product
        </button>

      </div>

      <ProductEntryModal 
        modalStatus={modals[MODAL_NAMES.PRODUCT_ENTRY].isOpen}
        data={modals[MODAL_NAMES.PRODUCT_ENTRY].data}
        modalOnClose={() => closeModal(MODAL_NAMES.PRODUCT_ENTRY)}
        modalOnEmit={handleProductSubmit}
      />

      <ConfirmationModal
        modalStatus={modals[MODAL_NAMES.PRODUCT_DELETE].isOpen}
        data={modals[MODAL_NAMES.PRODUCT_DELETE].data}
        modalOnClose={() => closeModal(MODAL_NAMES.PRODUCT_DELETE)}
        modalOnEmit={handleProductSubmit}
      />
    </div>
  );
}