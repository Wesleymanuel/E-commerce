import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../src/componentes/Header'
import { useMediaQuery } from '@mantine/hooks'
import MobileFooter from './componentes/MobileFooter'

function App() {

  const mobile = useMediaQuery('(width : 430px)')

  return (
    <>
    {mobile ? 
    (
    <>
      <Header/>
      <Outlet/>
      <MobileFooter/>
    </>
    ) 
    : 
    (
    <>
    <Header/>
    <Outlet/>
    </>
    )}
    </>
  )
}

export default App
