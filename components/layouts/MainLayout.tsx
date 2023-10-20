"use client";

import { makeServer } from "@/mock/server";
import '@/styles/global.scss';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";


makeServer({ environment: "dev" });

const queryClient = new QueryClient();

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}