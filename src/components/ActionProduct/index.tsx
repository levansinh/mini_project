import { Tooltip, useDisclosure } from '@nextui-org/react';
import { toast } from 'react-toastify';
import { FaTrash, FaEdit, FaCartPlus } from 'react-icons/fa';
import { Product } from 'src/common';
import { useActions } from 'src/store/useCartStore';
import ModalDelete from '../ModalDelete';
import { useDeleteProduct } from 'src/queries/products';

interface IProps {
  product: Product;
  onOpen: () => void;
  setIdProduct: React.Dispatch<React.SetStateAction<number>>;
}

export default function ActionProduct({ product, onOpen, setIdProduct }: IProps) {
  const {
    isOpen: isOpenModalDelete,
    onOpenChange: onOpenChangeModalDelte,
    onOpen: onOpenModalDelete
  } = useDisclosure();
  const { addToCart } = useActions();
  const deleteProduct = useDeleteProduct();
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('Add product successfully!');
  };
  const handleOpenFormEdit = () => {
    onOpen();
    setIdProduct(product.id);
  };
  const handleDelete = () => {
    deleteProduct.mutate(product.id, {
      onSuccess: () => {
        toast.success('Delete product successfully!');
      }
    });
  };
  return (
    <>
      <div className='relative flex items-center gap-2'>
        <Tooltip color='danger' content='Delete product'>
          <span className='text-lg text-danger cursor-pointer active:opacity-50'>
            <FaTrash onClick={onOpenModalDelete} />
            <ModalDelete onDelete={handleDelete} isOpen={isOpenModalDelete} onOpenChange={onOpenChangeModalDelte} />
          </span>
        </Tooltip>
        <Tooltip color='success' content='Edit product'>
          <span className='text-lg text-default-400 cursor-pointer active:opacity-50' onClick={handleOpenFormEdit}>
            <FaEdit className='text-success-400' />
          </span>
        </Tooltip>
        <Tooltip color='danger' content='Add to cart'>
          <span
            className='text-lg text-danger cursor-pointer active:opacity-50'
            onClick={() => handleAddToCart(product)}
          >
            <FaCartPlus />
          </span>
        </Tooltip>
      </div>
    </>
  );
}
