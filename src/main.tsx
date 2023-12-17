import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-toastify/dist/ReactToastify.css'

import App from './App.tsx'
import ProviderNextUI from './components/ProviderNextUI'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'all',
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProviderNextUI>
        <App />
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </ProviderNextUI>
    </QueryClientProvider>
  </React.StrictMode>
)
