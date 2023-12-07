import { Outlet } from 'react-router-dom'
import Header from '../Header'

export default function Layout() {
  return (
    <div className=''>
      <div className=''>
        <Header />
      </div>
      <div className='mx-[80px] py-5'>
        <Outlet />
      </div>
    </div>
  )
}
