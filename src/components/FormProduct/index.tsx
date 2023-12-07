import { useForm } from 'react-hook-form'
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { yupResolver } from '@hookform/resolvers/yup'

import { productValidateSchema } from './validate'
import { SubmitForm, Props } from './types'
import TextInput from '../TextInput'
import { useEffect, useState } from 'react'

const initialState = {
  title: '',
  thumbnail: '',
  discountPercentage: 0,
  price: 0,
  category: '',
  brand: '',
  description: '',
  stock: 0,
  rating: 0,
  id: ''
}

export default function ModalFormProduct({ onCreate, formData, isOpen, onOpenChange }: Props) {
  const [variable, setVariable] = useState(false)
  const create = onCreate()
  console.log(formData)

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm<SubmitForm>({
    defaultValues: formData,
    values: formData,
    resolver: yupResolver(productValidateSchema)
  })

  const { brand, title, thumbnail, price, rating, stock, category, description } = errors

  const onSubmit = (data: SubmitForm) => {
    console.log(data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        formData !== initialState && reset()
      }}
      onOpenChange={onOpenChange}
      scrollBehavior='inside'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
            <ModalBody>
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-3 '>
                  <TextInput control={control} label='Title' name='title' message={title?.message} />
                  {/* <TextInput control={control} label='Price' name='price' message={price?.message} />
                  <TextInput control={control} label='Thumbnail' name='thumbnail' message={thumbnail?.message} />
                  <TextInput control={control} label='Rating' name='rating' message={rating?.message} />
                  <TextInput
                    control={control}
                    label='discountPercentage'
                    name='discountPercentage'
                    message={title?.message}
                  />
                  <TextInput control={control} label='Stock' name='stock' message={stock?.message} /> */}
                  <TextInput control={control} label='Category' name='category' message={category?.message} />
                  <TextInput control={control} label='Brand' name='brand' message={brand?.message} />
                  <TextInput control={control} label='Description' name='description' message={description?.message} />
                </div>
                <div className='my-3 flex items-center justify-end'>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Close
                  </Button>
                  <Button color='primary' type='submit'>
                    Action
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
