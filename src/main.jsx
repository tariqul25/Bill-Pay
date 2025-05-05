import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/routes.jsx'
import { RouterProvider } from 'react-router'
import PayProvider from './Provider/PayProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayProvider>
    <RouterProvider router={router}></RouterProvider>
    </PayProvider>
  </StrictMode>,
)
