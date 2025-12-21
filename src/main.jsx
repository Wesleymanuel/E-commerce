import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from '../pages/Home.jsx'
import Register from '../pages/Register.jsx'
import Product from '../pages/Product.jsx'
import Login from '../pages/Login.jsx';
import { Provider } from 'react-redux';
import { store } from '../redux/store.js';
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
