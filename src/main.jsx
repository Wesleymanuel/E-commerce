import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from '../src/pages/Home.jsx'
import Register from '../src/pages/Register.jsx'
import Product from '../src/pages/Product.jsx'
import Login from '../src/pages/Login.jsx';
import BuyForm from '../src/componentes/buyForm.jsx';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store.js';
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


const client = new QueryClient()

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      { path : '/', element : <Home/>},
      { path : '/product/:id', element : <Product/> },
    ]
   },
   {
    path : '/register',
    element : <Register/>
   },
   {
    path: '/login',
    element : <Login/>
   },
   {
    path: '/buy',
    element : <BuyForm/>
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <MantineProvider>
          <RouterProvider router={router}/>
        </MantineProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
