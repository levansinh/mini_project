import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='mx-[80px] py-5'>
        <Outlet />
      </div>
    </div>
  );
}
