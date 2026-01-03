import { IoPersonCircleSharp } from "react-icons/io5";
import ButtonOptions from './buttonOptions';
import { Button } from "@mantine/core";
import './MobileFooter.css'
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <footer className="mobile-header">
        <nav className="footer-nav">
            <div>
                <ButtonOptions style={{backgroundColor: "rgb(50, 103, 138)"}}>
                    categorys
                </ButtonOptions>
            </div>
            <Link to={'/login'} >
                <div style={{textDecoration: 'none'}}>
                    <IoPersonCircleSharp size={"30px"} />
                </div>
            </Link>
            <div>
                <Button style={{backgroundColor: "rgb(50, 103, 138)"}}>
                    about we
                </Button>
            </div>
        </nav>
    </footer>
  )
}

export default MobileFooter