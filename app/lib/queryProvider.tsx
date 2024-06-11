"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
