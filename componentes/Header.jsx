import SideBar from './Sidebar'
import './Header.css'
import { Button, TextInput } from '@mantine/core'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import ButtonOptions from './buttonOptions';

const Header = () => {

  const [modal , setModal] = useState(false)

  return (
    <>
      <SideBar open={modal} onClose={() => setModal(false)} />

      <header className="header-container">
        <nav className='nav-container'>
          <div style={{width: "33.3%"}}>
            logo
          </div>
          <div style={{width: "33.3%", justifyContent: "space-around"}}>
            <ButtonOptions style={{backgroundColor: "rgb(50, 103, 138)"}}>
              categorys
            </ButtonOptions>
            <Button style={{backgroundColor: "rgb(50, 103, 138)"}}>
              about we
            </Button>
            <Button style={{backgroundColor: "rgb(50, 103, 138)"}}>
              teste sla
            </Button>
          </div>
          <div style={{width: "33.3%"}}>
            <div style={{position: "relative"}}>
              <div style={{backgroundColor: "brown",
                display: "flex", justifyContent: "center", alignItems: "center", position: "absolute",
                left:"95%", zIndex: "3", height: "100%",width: '40px' ,borderEndEndRadius: "90px", borderTopRightRadius: "90px"}}>
                <FaSearch/>
              </div>
              <TextInput style={{width: "250px"}} radius={"xl"}/>
            </div>
            <Button>
              Login
            </Button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
