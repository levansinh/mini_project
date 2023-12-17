import { Pagination, PaginationProps } from '@nextui-org/react'
import { SetURLSearchParams } from 'react-router-dom'
interface IPaginationProps extends PaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>
  setSearchParams: SetURLSearchParams
}

export default function Panigation({ setPage, setSearchParams, ...passProps }: IPaginationProps) {
  const handleOnchange = (page: number) => {
    setSearchParams({ page: String(page) })
    setPage(page)
  }
  return (
    <Pagination
      loop
      showControls
      initialPage={1}
      onChange={handleOnchange}
      {...passProps}
      className='flex items-center justify-center'
    />
  )
}
