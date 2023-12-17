import { useDisclosure } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import ModalFromProduct from 'src/components/ModalFormProduct'
import Panigation from 'src/components/Pagination'
import TableProduct from 'src/components/TableProduct'

function HomePage() {
  const [idProduct, setIdProduct] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams({})
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1)
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const totalPage = 9

  useEffect(() => {
    const pageParam = Number(searchParams.get('page')) || 1
    setPage(pageParam)
  }, [searchParams])
  return (
    <div>
      <TableProduct page={page} onOpen={onOpen} setIdProduct={setIdProduct} />
      <Panigation
        setPage={setPage}
        initialPage={page}
        total={totalPage}
        setSearchParams={setSearchParams}
        color='success'
      />
      <ModalFromProduct
        isOpen={isOpen}
        setIdProduct={setIdProduct}
        idProduct={idProduct}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  )
}
export const Component = HomePage
