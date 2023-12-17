import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import routes from './routes'
import Spinner from './components/Spinner'

export default function App() {
  const isMutating = useIsMutating()
  const isFetching = useIsFetching()
  return (
    <Suspense fallback={<Spinner />}>
      {isFetching + isMutating !== 0 && <Spinner />}
      <RouterProvider router={routes} />
    </Suspense>
  )
}
