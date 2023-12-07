import React from 'react'
import { PATH_PUBLIC } from '../../routes/path'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaShoppingBag } from 'react-icons/fa'

const listNav = [
  { label: 'Home', path: PATH_PUBLIC.home, icon: <FaHome /> },
  { label: 'Cart', path: PATH_PUBLIC.cart, icon: <FaShoppingBag /> }
]

export default function Header() {
  const { pathname } = useLocation()
  const active = listNav.findIndex((item) => item.path === pathname)
  return (
    <div className='w-full sticky top-0 bg-[#333] h-[54px] flex items-center justify-end gap-x-2 px-5'>
      {listNav.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`text-white font-[500] flex items-center gap-x-2 ${
            index === active && 'text-[#98dee0] font-bold'
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  )
}
