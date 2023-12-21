import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PATH_PUBLIC } from 'src/routes/path';
import { useGetProducts } from 'src/queries/products';
import { Product } from 'src/common';
import CheckBoxItem from '../CheckboxItem';
interface CustomizedState {
  listId: number[];
}

export default function TableOrder() {
  const { products } = useGetProducts();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { listId } = state;
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [listIds, setListId] = useState<number[]>(listId);
  const handleOnCheck = (product: Product) => {
    const exitProd = listId.find((item) => item === product.id);
    if (!exitProd) {
      listId.push(product.id);
    } else {
      const exitsId = listId.findIndex((item) => item === product.id);
      listId.splice(exitsId, 1);
    }
    setListId([...listId]);
  };
  useEffect(() => {
    const updatedSelectedProducts = listIds.flatMap((selectedId: number) =>
      products.filter((product: Product) => product.id === selectedId)
    );
    setSelectedProducts(updatedSelectedProducts);
  }, [listIds, products]);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl text-primary'>List order</h1>
        <Button color='success' className='text-white hover:bg-green-800 cursor-pointer'>
          <Link to={PATH_PUBLIC.home}>Buy continue</Link>
        </Button>
      </div>

      <div className='my-5'>
        <Table removeWrapper aria-label='Example static collection table'>
          <TableHeader className='bg-primary text-white'>
            <TableColumn children={undefined}></TableColumn>
            <TableColumn>Title</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Brand</TableColumn>
            <TableColumn>Image</TableColumn>
            <TableColumn>Price</TableColumn>
          </TableHeader>
          <TableBody>
            {selectedProducts.map((item: Product) => (
              <TableRow key={item.id}>
                <TableCell>
                  <CheckBoxItem defaultSelected={listId.includes(item.id)} onCheck={() => handleOnCheck(item)} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>
                  <Image src={item.thumbnail} width={150} className='h-[100px]' />
                </TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
