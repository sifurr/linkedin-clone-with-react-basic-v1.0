import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import linkedinRouter from './route/linkedinCloneRouter'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={linkedinRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
