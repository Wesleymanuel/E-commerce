import SideBar from './Sidebar'
import './Header.css'
import { Link } from 'react-router-dom';
import { Button, TextInput } from '@mantine/core'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import ButtonOptions from './buttonOptions';
import { TbShoppingBagHeart } from "react-icons/tb";


const Header = () => {

  const [modal , setModal] = useState(false)

  return (
    <>
      <SideBar open={modal} onClose={() => setModal(false)} />

      <header className="header-container">
        <nav className='nav-container'>
          <div style={{width: "25%", display: 'flex', justifyContent: "flex-start"}}>
            <TbShoppingBagHeart style={{fontSize: '40px'}}/>
          </div>
          <div style={{width: "41.7%", justifyContent: "space-around", marginRight: '20px'}}>
            <ButtonOptions style={{backgroundColor: "rgb(50, 103, 138)"}}>
              categorys
            </ButtonOptions>
            <Button style={{backgroundColor: "rgb(50, 103, 138)"}}>
              about we
            </Button>
            <Button style={{backgroundColor: "rgb(50, 103, 138)"}} onClick={() => setModal(prev => !prev)} >
              <TiShoppingCart/>
              cart
            </Button>
          </div>
          <div style={{width: "33.3%"}}>
            <div style={{position: "relative"}}>
              <div style={{backgroundColor: 'white' ,display: "flex", justifyContent: "center", alignItems: "center", position: "absolute",
                left:"80%", zIndex: "3", height: "100%",width: '40px' ,borderEndEndRadius: "90px", borderTopRightRadius: "90px"}}>
                <FaSearch/>
              </div>
              <TextInput style={{width: "250px"}} radius={"xl"}/>
            </div>
            <Link to={'/login'}> 
              <Button>
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
