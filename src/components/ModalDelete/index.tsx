import { Modal, ModalContent, ModalHeader, ModalFooter, Button, type ModalProps } from '@nextui-org/react';

interface IModalDeleteProps extends Omit<ModalProps, 'children'> {
  onDelete: () => void;
}

export default function ModalDelete({ onDelete, ...passProps }: IModalDeleteProps) {
  return (
    <Modal isOpen={passProps.isOpen} placement='top' onOpenChange={passProps.onOpenChange} backdrop='opaque'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Do you want to delete this product?</ModalHeader>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                No
              </Button>
              <Button color='primary' onClick={onDelete} onPress={onClose}>
                Yes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
