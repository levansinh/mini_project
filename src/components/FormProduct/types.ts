import { UseMutationResult } from '@tanstack/react-query'
import { Product } from '../../common'

export interface Props {
  formData: Omit<Product, 'images'>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCreate: () => UseMutationResult<any, Error, object, unknown>
  isOpen: boolean
  onOpenChange: () => void
}

export interface SubmitForm {
  title: string
  thumbnail: string
  price: number
  discountPercentage?: number
  rating?: number
  stock?: number
  category: string
  brand: string
  description: string
}
