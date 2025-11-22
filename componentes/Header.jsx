import { Link } from "react-router-dom"
import './Header.css'
import { Button,TextInput } from '@mantine/core'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header-conteiner">
        <nav className="nav-header">
            <div style={{ width: '25%'}}>logo</div>
            <div style={{ width : '50%', position: 'relative', display: 'flex'}}>
                <TextInput
                    placeholder="Input placeholder"
                    style={{width: '90%'}}
                />
                <div className="button-cont">
                    <FaSearch style={{ }}/>
                </div>
            </div>
            <div style={{ width: '25%'}}>
                <ul>
                    <li>
                        <Button
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        style={{ width: '100px', marginLeft: '25px' }}
                        >
                            cart
                        </Button>
                    </li>
                    <li>    
                        <Button
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        style={{ width: '100px',marginRight: '25px' }}
                        >
                            cont
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header