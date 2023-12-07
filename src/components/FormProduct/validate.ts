import { object, string, number } from 'yup'
export const productValidateSchema = object().shape({
  title: string().required(),
  thumbnail: string().required(),
  price: number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .typeError("That doesn't look like a number")
    .positive("Price number can't start with a minus")
    .required('Price is required'),
  discountPercentage: number()
    .typeError("That doesn't look like a number")
    .positive("Discount number can't start with a minus"),
  rating: number().typeError("That doesn't look like a number").positive("Rating number can't start with a minus"),
  stock: number().typeError("That doesn't look like a number"),
  category: string().required(),
  brand: string().required(),
  description: string().required()
})
