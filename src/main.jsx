import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Category from './components/Category.jsx'
import Product from './components/Product.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Favorite from './components/Favorite.jsx'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home/>,},
      {path: "/clothing/:filter?", element: <Category name="clothing"/>,},
      {path: "/furniture/:filter?", element: <Category name="furniture"/>,},
      {path: "/shoes/:filter?", element: <Category name="shoes"/>,},
      {path: "/skincare/:filter?", element: <Category name="skincare"/>,},
      {path: "/product/:id", element: <Product />,},
      {path: "/favorites", element: <Favorite />,},
      {path: "cart", element: <Cart status="open" />,},
      {path: "*", element: <ErrorBoundary />,},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
