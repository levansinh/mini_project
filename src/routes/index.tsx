import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import('../pages/HomePage')
      }
    ]
  }
]

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routers)
