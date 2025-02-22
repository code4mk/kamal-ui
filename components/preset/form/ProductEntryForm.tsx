// ProductEntryForm.tsx
import productEntrySchema from '@/utils/yup/ProductEntrySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

interface ProductFormData {
  name: string;
  sku: string;
  price: number;
  category: string;
  description: string;
  stockQuantity: number;
  brand: string;
  status: string;
}


const statusOptions = [
  { value: '', label: 'select option' },
  { value: 'active', label: 'Active' },
  { value: 'draft', label: 'Draft' },
  { value: 'archived', label: 'Archived' }
];

const ProductEntryForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<ProductFormData>({
    mode: 'onChange',
    // @ts-ignore
    resolver: yupResolver(productEntrySchema),
    defaultValues: {
      name: '',
      sku: '',
      price: 0,
      category: '',
      description: '',
      stockQuantity: 0,
      brand: '',
      status: ''
    }
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      // Here you would typically make an API call
      console.log('Form data:', data);
      
      // Reset form after successful submission
      reset();
      
      // Show success message (you might want to handle this with a toast notification)
      alert('Product successfully added!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  // Watch status field for react-select
  const currentStatus = watch('status');

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name *
            </label>
            <input
              {...register('name')}
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter product name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors?.name.message}</p>
            )}
          </div>

          {/* SKU */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SKU *
            </label>
            <input
              {...register('sku')}
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
                errors.sku ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter SKU"
            />
            {errors.sku && (
              <p className="mt-1 text-sm text-red-500">{errors.sku.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price *
            </label>
            <input
              {...register('price')}
              type="number"
              step="0.01"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
                errors.price ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="0.00"
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>

          {/* Stock Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Quantity *
            </label>
            <input
              {...register('stockQuantity')}
              type="number"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
                errors.stockQuantity ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="0"
            />
            {errors.stockQuantity && (
              <p className="mt-1 text-sm text-red-500">{errors.stockQuantity.message}</p>
            )}
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand *
            </label>
            <input
              {...register('brand')}
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
                errors.brand ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter brand name"
            />
            {errors.brand && (
              <p className="mt-1 text-sm text-red-500">{errors.brand.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <Select
              options={statusOptions}
              value={statusOptions.find(option => option.value === currentStatus)}
              onChange={(option) => {
                setValue('status', option?.value || '');
                trigger('status');
              }}
              className={`${errors.status ? 'border-red-500' : ''}`}
              classNamePrefix="react-select"
            />
            {errors.status && (
              <p className="mt-1 text-sm text-red-500">{errors.status.message}</p>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category *
          </label>
          <input
            {...register('category')}
            type="text"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
              errors.category ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter category"
          />
          {errors.category && (
            <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register('description')}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter product description"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none  ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductEntryForm;