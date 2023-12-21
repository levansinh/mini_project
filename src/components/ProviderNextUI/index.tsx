import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function ProviderNextUI({ children }: IProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
