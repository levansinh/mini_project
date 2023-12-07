import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'

export default function App() {
  return (
    <Suspense fallback={<p>loadding</p>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}
