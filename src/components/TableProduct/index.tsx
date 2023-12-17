import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Product } from 'src/common'
import ActionProduct from '../ActionProduct'
import { useGetProductsByPage } from 'src/queries/products'
import { PATH_PUBLIC } from 'src/routes/path'
import CheckBoxItem from '../CheckboxItem'
import RatingStar from '../Rating'

interface IProps {
  page: number
  onOpen: () => void
  setIdProduct: React.Dispatch<React.SetStateAction<number>>
}
export default function TableProduct({ page, onOpen, setIdProduct }: IProps) {
  const { products } = useGetProductsByPage(page)
  const [listId, setListId] = useState<number[]>([])
  const handleOnCheck = (product: Product) => {
    const exitProd = listId.find((item) => item === product.id)
    if (!exitProd) {
      listId.push(product.id)
    } else {
      const exitsId = listId.findIndex((item) => item === product.id)
      listId.splice(exitsId, 1)
    }
    setListId([...listId])
  }
  return (
    <div>
      <div className='flex items-center justify-between '>
        <h1 className='text-3xl text-primary'>Prosduct</h1>
        <div className='flex gap-x-4'>
          <Button radius='md' color='success' className='text-white hover:bg-green-800 cursor-pointer'>
            <Link state={{ listId }} to={PATH_PUBLIC.orders}>
              Add orders
            </Link>
          </Button>
          <Button radius='md' color='success' className='text-white hover:bg-green-800 cursor-pointer' onPress={onOpen}>
            Create
          </Button>
        </div>
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
            <TableColumn>Rating</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {products.map((product: Product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <CheckBoxItem defaultSelected={listId.includes(product.id)} onCheck={() => handleOnCheck(product)} />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>
                  <Image src={product.thumbnail} width={150} className='h-[100px]' />
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <RatingStar percentage={product.rating} />
                </TableCell>
                <TableCell>
                  <ActionProduct product={product} onOpen={onOpen} setIdProduct={setIdProduct} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
