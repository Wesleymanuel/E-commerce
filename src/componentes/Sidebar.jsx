import './Sidebar.css'
import { useState } from 'react';
import { useSelector} from 'react-redux';
import CartCont from './CartCont';
import { RiDeleteBin5Line } from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { removeItenOnCart } from '../redux/features/cartItensSlice'
import UseRedirectBuyForm from '../custom-hooks/useRedirectBuyForm';

const SideBar = ({ open, onClose }) => {

  const dispacth = useDispatch()
  const selector = useSelector(state => state.cartIntens?.initialValue ?? [])
  const [prices, setPrices] = useState({});

  function handlePriceChange(id, value) {
    setPrices(prev => ({
      ...prev,
      [id]: value
    }));
  }

  return (
    <>
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />
      <div className={`sidebar-container ${open ? "show" : ""}`}>
        <div>
        {selector.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          selector.map((item) => (
            <div key={item.id} className='cart-itens'>
              <div className='container'>
                <div style={{backgroundColor: "aliceblue", padding: '10px', marginLeft: '5px', marginRight: '9px', borderRadius: '10px'}}>
                  <img src={item.image} alt={item.title} height='70px'/>
                </div>
              </div>
              <div style={{alignSelf: 'flex-end',width: '50%', height: '100%', flexDirection: 'column', display:'flex',justifyContent:'flex-end',padding:'10px', gap: '10px'}}>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                     Price: {prices[item.id] ?? item.price} USD
                   </div>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'flex-end'}}>
                  <div  onClick={() => dispacth(removeItenOnCart(item.id))} style={{display: 'flex',justifyContent: 'center', alignItems: 'center',marginRight: '20px',borderRight: '3px solid rgb(223, 230, 236)', cursor: 'pointer'}}>
                    <RiDeleteBin5Line/>
                    <p style={{marginRight: '15px'}}>remover</p>
                  </div>
                  <CartCont price={item.price} onChange={(value) => handlePriceChange(item.id, value)}/>
                  <div style={{marginLeft : '15px'}}>
                    <UseRedirectBuyForm/> 
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
