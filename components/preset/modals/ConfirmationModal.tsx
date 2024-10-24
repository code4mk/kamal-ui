import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ModalProps {
  modalStatus: boolean
  data?: any
  modalOnClose: () => void
  modalOnEmit: (data: any) => Promise<void>
}

const ConfirmationModal = ({ modalStatus, data, modalOnClose, modalOnEmit }: ModalProps) => {
  
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      // Simulate deletion process with 10s delay
      await new Promise(resolve => setTimeout(resolve, 10000))
      modalOnEmit('delete product')
      modalOnClose()
    } finally {
      setIsDeleting(false)
    }
  }


  return (
    <Dialog 
    open={modalStatus ?? false}  
      onClose={() => {}}
      as="div" 
      className="relative z-50"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
        <div className="flex min-h-full items-start justify-center pt-48  p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500" />
              <div className="flex-1">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  Are you absolutely sure?
                </DialogTitle>
                <p className="mt-2 text-sm text-gray-500">
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </p>

                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    onClick={modalOnClose}
                    disabled={isDeleting}
                    className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none disabled:opacity-50 data-[hover]:bg-gray-50 data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus:outline-none disabled:opacity-50 data-[hover]:bg-red-500 data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-red-500 flex items-center gap-2"
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      'Delete account'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ConfirmationModal