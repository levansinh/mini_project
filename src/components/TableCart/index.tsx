import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Product } from 'src/common';
import { PATH_PUBLIC } from 'src/routes/path';
import Quantity from '../Quantity';
import { useCartList, useTotalOrder } from 'src/store/useCartStore';
import ActionOrder from '../ActionOrder';

export default function TableCart() {
  const cart = useCartList();
  const totalPrice = useTotalOrder();

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl text-primary'>List cart</h1>
        <div className='flex  items-center gap-x-4 '>
          <div className='flex items-center gap-x-3 border rounded-sm p-3'>
            <span>Total cart</span>
            <span>${totalPrice}</span>
          </div>
          <Button color='success' className='text-white hover:bg-green-800 cursor-pointer'>
            <Link to={PATH_PUBLIC.home}>Buy continue</Link>
          </Button>
        </div>
      </div>

      <div className='my-5'>
        <Table removeWrapper aria-label='Example static collection table'>
          <TableHeader className='bg-primary text-white'>
            <TableColumn>Title</TableColumn>
            <TableColumn>Image</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Quantity</TableColumn>
            <TableColumn>Total price</TableColumn>
            <TableColumn>Delete</TableColumn>
          </TableHeader>
          <TableBody>
            {cart.map((item: Product) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  <Image src={item.thumbnail} width={150} className='h-[100px]' />
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Quantity product={item} quantity={item.quantity} />
                </TableCell>
                <TableCell>{item.quantity * item.price}</TableCell>
                <TableCell>
                  <ActionOrder product={item} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
