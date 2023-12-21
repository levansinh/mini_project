import { Tooltip, useDisclosure } from '@nextui-org/react';
import { FaTrash } from 'react-icons/fa';
import ModalDelete from '../ModalDelete';
import { useActions } from 'src/store/useCartStore';
import { Product } from 'src/common';

interface IProps {
  product: Product;
}

export default function ActionOrder({ product }: IProps) {
  const { deleteItem } = useActions();
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <div>
      <Tooltip color='danger' content='Delete product'>
        <span className='text-lg text-danger cursor-pointer active:opacity-50'>
          <FaTrash onClick={onOpen} />
          <ModalDelete onDelete={() => deleteItem(product)} isOpen={isOpen} onOpenChange={onOpenChange} />
        </span>
      </Tooltip>
    </div>
  );
}
