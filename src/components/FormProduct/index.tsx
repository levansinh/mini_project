import { Button } from '@nextui-org/react';
import { FormProvider } from 'react-hook-form';

import TextInput from '../TextInput';
import { useCreateProduct, useGetProduct, useUpdateProduct } from 'src/queries/products';
import useFormControllers from './validate';
import { IProps, ISubmitForm } from './types';
import Textareas from '../Textarea';

export default function FormProduct({ idProduct, onClose }: IProps) {
  const createProduct = useCreateProduct();
  const updateProduct = useUpdateProduct(idProduct);
  const { product } = useGetProduct(idProduct);
  const methods = useFormControllers(product);
  const {
    handleSubmit,
    formState: { isDirty }
  } = methods;
  const onSubmit = (dataSubmit: ISubmitForm) => {
    if (idProduct !== 0) {
      updateProduct.mutate(dataSubmit);
    } else {
      createProduct.mutate(dataSubmit);
    }
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-3 '>
          <TextInput size='sm' label='Title' name='title' />
          <TextInput size='sm' label='Price' name='price' />
          <TextInput size='sm' label='Thumbnail' name='thumbnail' />
          <TextInput size='sm' label='Rating' name='rating' />
          <TextInput label='discountPercentage' name='discountPercentage' size='sm' />
          <TextInput size='sm' label='Stock' name='stock' />
          <TextInput size='sm' label='Category' name='category' />
          <TextInput size='sm' label='Brand' name='brand' />
          <Textareas size='sm' label='Description' name='description' />
        </div>
        <div className='my-3 flex items-center justify-end'>
          <Button color='danger' variant='light' onPress={onClose}>
            Close
          </Button>
          <Button color='primary' disabled={!isDirty} type='submit'>
            {idProduct ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
