import * as yup from 'yup';


const productEntrySchema = yup.object().shape({
  name: yup
    .string()
    .required('Product name is required')
    .min(3, 'Name must be at least 3 characters'),
  sku: yup
    .string()
    .required('SKU is required')
    .matches(/^[A-Za-z0-9-]+$/, 'SKU must contain only letters, numbers, and hyphens'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be positive')
    .typeError('Price must be a number'),
  stockQuantity: yup
    .number()
    .required('Stock quantity is required')
    .integer('Stock quantity must be an integer')
    .min(0, 'Stock quantity cannot be negative')
    .typeError('Stock quantity must be a number'),
  category: yup
    .string()
    .required('Category is required'),
  description: yup
    .string()
    .max(500, 'Description must not exceed 500 characters'),
  brand: yup
    .string()
    .required('Brand is required'),
  status: yup
    .string()
    .required('Status is required')
    .oneOf(['active', 'draft', 'archived'], 'Invalid status')
});

export default productEntrySchema