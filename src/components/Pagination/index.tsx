import { Pagination } from '@nextui-org/react'

interface Props {
  total: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Panigation({ total, page, setPage }: Props) {
  const change = (page: number) => {
    console.log(page)
    setPage(page)
  }
  return <Pagination total={total} initialPage={page} page={page} onChange={change} />
}
