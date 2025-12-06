import './Sidebar.css'
import { Link } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsPersonVcardFill } from "react-icons/bs";
import { MdOutlineQuestionMark } from "react-icons/md";


const SideBar = ({ open, onClose }) => {
  return (
    <>
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />
      <div className={`sidebar-container ${open ? "show" : ""}`}>
        <div className='person icons'>
          <IoPersonCircleOutline style={{fontSize : '60px'}}/>
        </div>
        <div className='option-continer'>
            <p>minha conta</p>
            <div>
              <FaMoneyCheckDollar style={{fontSize : "20px", marginRight: '6px', marginTop: '4px'}}/>
              <p>compras</p>
            </div>
            <div>
              <FaCartPlus style={{fontSize : "20px", marginRight: '6px', marginTop: '4px'}}/>
              <p>carrinho</p>
            </div>
            <div>
              <MdOutlinePersonAddAlt style={{fontSize : "20px", marginRight: '6px', marginTop: '4px'}}/>
              <p>conta</p>
            </div>
            <div>
              <BsPersonVcardFill style={{fontSize : "20px", marginRight: '6px', marginTop: '4px'}}/>
              <p>informacoes</p>
            </div>
            <div>
              <MdOutlineQuestionMark style={{fontSize : "20px", marginRight: '6px', marginTop: '4px'}}/>
              <p>duvidas</p>
            </div>
        </div>
            <div className='logout'>
              <TbLogout/>
              <p>logout</p>
          </div>
      </div>
    </>
  );
};

export default SideBar;
