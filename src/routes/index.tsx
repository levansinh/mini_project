import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import { PATH_PUBLIC } from './path'

const routers: RouteObject[] = [
  {
    path: PATH_PUBLIC.home,
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import('../pages/HomePage')
      },
      {
        path: PATH_PUBLIC.cart,
        lazy: () => import('../pages/CartPage')
      },
      {
        path: PATH_PUBLIC.orders,
        lazy: () => import('../pages/OrderPage')
      }
    ]
  }
]

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routers)
