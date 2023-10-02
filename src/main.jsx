import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const linkedinRouter = createBrowserRouter([
  {
    path: '/',
    element: <h1 className='text-7xl text-center'>LinkedIn</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={linkedinRouter}></RouterProvider>
  </React.StrictMode>,
)
