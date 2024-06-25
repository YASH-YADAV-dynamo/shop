import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productID",
    element: <ProductDetails />
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
)