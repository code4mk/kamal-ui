import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X, ImagePlus, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const productEntrySchema = yup.object().shape({
  name: yup.string().required('Product name is required'),
  price: yup.number().required('Price is required').min(0, 'Price must be greater than 0'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  stock: yup.number().required('Stock quantity is required').min(0, 'Stock must be at least 0'),
})

interface ProductFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: ProductFormData) => void
}

interface ProductFormData {
  name: string
  price: number
  category: string
  description: string
  stock: number
  image?: File
}

const ProductFormModal = ({ isOpen, onClose, onSubmit }: ProductFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProductFormData>({
    mode: 'onChange',
    // @ts-ignore
    resolver: yupResolver(productEntrySchema),
    defaultValues: {
      name: '',
      price: 0,
      category: '',
      description: '',
      stock: 0
    }
  })

  useEffect(() => {
    reset()
  }, [isOpen])

  const handleFormSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate 10s loading time
      await new Promise(resolve => setTimeout(resolve, 10000))
      await onSubmit(data)
      reset()
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog 
      open={isOpen} 
      onClose={() => ''}
      as="div" 
      className="relative z-50"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            className="relative w-full max-w-xl rounded-xl bg-white shadow-xl"
          >
            {/* Loading Overlay */}
            {isSubmitting && (
              <div className="absolute inset-0 z-50 flex items-center justify-center rounded-xl bg-white/50">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                  <p className="text-sm text-gray-600">Saving product...</p>
                </div>
              </div>
            )}
            
            {/* Header */}
            <div className="flex items-center justify-between shadow-sm  px-6 py-4">
              <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                Add New Product
              </DialogTitle>
              <Button
                onClick={onClose}
                disabled={isSubmitting}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="max-h-[calc(100vh-16rem)] overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {/* Image Upload */}
                  <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <ImagePlus className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 disabled:opacity-50"
                        >
                          <span>Upload a file</span>
                          <input 
                            id="image" 
                            type="file" 
                            disabled={isSubmitting}
                            {...register('image')}
                            className="sr-only" 
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>

                  {/* Product Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      {...register('name')}
                      className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none  ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-gray-500'
                      } disabled:bg-gray-50 disabled:opacity-50`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Price and Stock */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          disabled={isSubmitting}
                          {...register('price')}
                          className={`block w-full rounded-md border pl-7 pr-3 py-2 text-sm focus:outline-none ${
                            errors.price 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-gray-300 focus:border-gray-500'
                          } disabled:bg-gray-50 disabled:opacity-50`}
                        />
                        {errors.price && (
                          <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                        Stock
                      </label>
                      <input
                        type="number"
                        disabled={isSubmitting}
                        {...register('stock')}
                        className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${
                          errors.stock 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-gray-500'
                        } disabled:bg-gray-50 disabled:opacity-50`}
                      />
                      {errors.stock && (
                        <p className="mt-1 text-sm text-red-500">{errors.stock.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      disabled={isSubmitting}
                      {...register('category')}
                      className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${
                        errors.category 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-gray-500'
                      } disabled:bg-gray-50 disabled:opacity-50`}
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                      <option value="home">Home & Garden</option>
                      <option value="toys">Toys & Games</option>
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      disabled={isSubmitting}
                      {...register('description')}
                      rows={3}
                      className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${
                        errors.description 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-gray-500'
                      } disabled:bg-gray-50 disabled:opacity-50`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 shadow px-6 py-4">
                <Button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none disabled:opacity-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default function ProductManager() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (data: ProductFormData) => {
    console.log('Product data:', data)
    // Handle form submission
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none hover:bg-blue-500"
      >
        Add Product
      </Button>

      <ProductFormModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}