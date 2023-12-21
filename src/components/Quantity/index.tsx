import { Button, useDisclosure } from '@nextui-org/react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Product } from 'src/common';
import { useActions } from 'src/store/useCartStore';
import ModalDelete from '../ModalDelete';

interface IProps {
  quantity: number;
  product: Product;
}

export default function Quantity({ quantity, product }: IProps) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const { updateQuantity } = useActions();
  const handleDic = () => {
    if (quantity - 1 === 0) {
      onOpen();
    } else {
      updateQuantity(product, 'dec');
    }
  };

  return (
    <div className='flex gap-4 items-center'>
      <Button isIconOnly color='danger' onClick={handleDic}>
        <FaMinus />
      </Button>
      {quantity}
      <Button isIconOnly color='success' variant='faded' onClick={() => updateQuantity(product, 'inc')}>
        <FaPlus />
      </Button>
      <ModalDelete onDelete={() => updateQuantity(product, 'dec')} isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
