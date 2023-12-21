import { Badge } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingBag } from 'react-icons/fa';
import { PATH_PUBLIC } from '../../routes/path';
import { useCartItem } from 'src/store/useCartStore';

interface IListNav {
  label: string;
  path: string;
  icon?: JSX.Element;
  badges?: boolean;
}

const listNav: IListNav[] = [
  { label: 'Home', path: PATH_PUBLIC.home, icon: <FaHome /> },
  {
    label: 'Cart',
    path: PATH_PUBLIC.cart,
    icon: <FaShoppingBag />,
    badges: true
  }
];

export default function Header() {
  const totalItems = useCartItem();
  const { pathname } = useLocation();
  const active = listNav.findIndex((item) => item.path === pathname);
  return (
    <div className='w-full sticky top-0 bg-[#333] h-[54px] flex items-center justify-end gap-x-2 px-5'>
      {listNav.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`text-white font-[500] flex items-center gap-x-2 ${
            index === active ? 'text-success-500 font-bold' : ''
          }`}
        >
          {item.badges ? <Badge content={totalItems}>{item.icon}</Badge> : item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
