import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import BuyForm from './componentes/buyForm.jsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { HashRouter, Routes, Route } from 'react-router-dom'

const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <MantineProvider>
          <HashRouter>
            <Routes>

              {/* Layout principal */}
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="product/:id" element={<Product />} />
              </Route>

              {/* Rotas independentes */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/buy" element={<BuyForm />} />

            </Routes>
          </HashRouter>
        </MantineProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
