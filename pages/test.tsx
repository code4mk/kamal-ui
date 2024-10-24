// import ResponsiveLayout from "@/mdx-components/ResponsiveLayout"
// import CardsMultiRawMultiple from "@/components/preset/CardsMultiRawMultiple"
// function abc() {
//   return (
//     <ResponsiveLayout>
//       <CardsMultiRawMultiple/>
//     </ResponsiveLayout>
//   )
// }

// export default abc

import React from "react";
import ConfirmationModal from "@/components/preset/modals/ConfirmationModal";

const Example = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = () => {
    console.log('Deleting account...');
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 px-4 py-2"
      >
        Delete Account
      </button>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onEmit={handleDelete}
      />
    </div>
  );
};

export default Example;