import { Modal, ModalBody, ModalContent, ModalHeader, type ModalProps } from '@nextui-org/react';

import FormProduct from '../FormProduct';

interface IModalFormProductProps extends Omit<ModalProps, 'children'> {
  idProduct: number;
  setIdProduct: React.Dispatch<React.SetStateAction<number>>;
}

export default function ModalFormProduct({ idProduct, setIdProduct, ...passProps }: IModalFormProductProps) {
  const handleClose = () => {
    setIdProduct(0);
    passProps.onClose?.();
  };
  return (
    <Modal scrollBehavior='inside' {...passProps} onClose={handleClose} placement='top-center'>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='flex flex-col gap-1'>{idProduct ? 'Edit Product' : ' Create Product'}</ModalHeader>
            <ModalBody>
              <FormProduct idProduct={idProduct} onClose={handleClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
