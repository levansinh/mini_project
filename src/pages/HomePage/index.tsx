import { useState } from 'react'
import { FaCartPlus, FaEdit, FaTrash } from 'react-icons/fa'
import ModalFromProduct from 'src/components/FormProduct'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Button,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure
} from '@nextui-org/react'

import { createProducts, getProducts } from '../../apis/product.api'
import { Product } from '../../common'
import Panigation from 'src/components/Pagination'

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

function HomePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [formData, setFormData] = useState(initialState)
  const [page, setPage] = useState(1)
  const { data } = useQuery({
    queryKey: ['getProducts', page],
    queryFn: () => getProducts(),
    select: (data) => data
  })
  console.log(data)
  const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: (newProd: object) => createProducts(newProd),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getProducts']
        })
      }
    })
  }
  return (
    <div>
      <div className='flex items-center justify-between '>
        <h1 className='text-3xl text-primary'>Product</h1>
        <Button radius='md' color='success' className='text-white font-[500]' onPress={onOpen}>
          Create
        </Button>
      </div>

      <div className='my-5'>
        <Table removeWrapper aria-label='Example static collection table'>
          <TableHeader className='bg-primary text-white'>
            <TableColumn>Title</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Brand</TableColumn>
            <TableColumn>Image</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Rating</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.products.map((product: Product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>
                  <Image src={product.thumbnail} width={150} className='h-[100px]' />
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>
                  <div className='relative flex items-center gap-2'>
                    <Tooltip color='danger' content='Delete product'>
                      <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                        <FaTrash />
                      </span>
                    </Tooltip>
                    <Tooltip content='Edit product'>
                      <span
                        className='text-lg text-default-400 cursor-pointer active:opacity-50'
                        onClick={() => {
                          onOpen()
                          setFormData(product)
                        }}
                      >
                        <FaEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color='danger' content='Add to cart'>
                      <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                        <FaCartPlus />
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-center'>
        <Panigation page={page} setPage={setPage} total={2} />
      </div>
      <ModalFromProduct isOpen={isOpen} onCreate={useCreateProduct} formData={formData} onOpenChange={onOpenChange} />
    </div>
  )
}
export const Component = HomePage
