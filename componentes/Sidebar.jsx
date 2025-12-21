import './Sidebar.css'
import { useSelector} from 'react-redux';
import CartCont from './CartCont';
import { RiDeleteBin5Line } from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { removeItenOnCart } from '../redux/features/cartItensSlice';

const SideBar = ({ open, onClose }) => {

  const dispacth = useDispatch()
  const selector = useSelector(state => state.cartIntens?.initialValue ?? [])

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
                <div style={{ height: '100%',overflowX: 'hidden'}}>
                  <p>{item.title}</p>
                </div>
              </div>
              <div style={{alignSelf: 'flex-end',width: '50%', height: '100%', flexDirection: 'column', display:'flex',justifyContent:'flex-end',padding:'10px', gap: '10px'}}>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    Price: {item.price} USD
                   </div>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'flex-end'}}>
                  <div  onClick={() => dispacth(removeItenOnCart(item.id))} style={{display: 'flex',justifyContent: 'center', alignItems: 'center',marginRight: '20px',borderRight: '3px solid rgb(223, 230, 236)', cursor: 'pointer'}}>
                    <RiDeleteBin5Line/>
                    <p style={{marginRight: '15px'}}>remover</p>
                  </div>
                  <CartCont cont={selector.cont} setCont={selector.cont}/>
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
