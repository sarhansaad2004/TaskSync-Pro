import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import routers from './routes/Routers';
import AuthProvider from './firebase/AuthProvider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers}/>
      </QueryClientProvider>
    </AuthProvider>,
)
