import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

interface Props {
  children: React.ReactNode
}

export default function ProviderNextUI({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>
}
