import { object, string, number } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { initialState } from 'src/constants'
import { Product } from 'src/common'
import { ISubmitForm } from './types'

export const productValidateSchema = object().shape({
  title: string().required('Title is required'),
  thumbnail: string().required('Thumbnail is required'),
  price: number()
    .min(0, 'Please dont have more than')
    .required('Price is required')
    .typeError("That doesn't look like a number")
    .positive("Price number can't start with a minus"),
  discountPercentage: number()
    .positive("Discount number can't start with a minus")
    .typeError("That doesn't look like a number"),
  rating: number().typeError("That doesn't look like a number").positive("Rating number can't start with a minus"),
  stock: number().required('Stock is required').typeError("That doesn't look like a number"),
  category: string(),
  brand: string(),
  description: string().required('Description is required')
})

const useFormControllers = (data: Product) => {
  return useForm<ISubmitForm>({
    mode: 'onBlur',
    defaultValues: initialState,
    values: data,
    resolver: yupResolver(productValidateSchema)
  })
}
export default useFormControllers
