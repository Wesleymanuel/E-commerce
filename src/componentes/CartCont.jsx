import { useState } from 'react'
import './CardCont.css'
import { GoPlus } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";

const CartCont = ({price, onChange }) => {

  const [cont, setCont] = useState(1);

  const addProduct = () => {
    const newCont = cont + 1;
    setCont(newCont);
    onChange(newCont * price);
  };

  const removeProduct = () => {
    if (cont <= 1) return;

    const newCont = cont - 1;
    setCont(newCont);
    onChange(newCont * price);
  };

  return (
    <>
        <main className='card-modification'>
            <div style={{borderRight: '2px solid rgb(223, 230, 236)'}}>
                <GoPlus onClick={addProduct} className='controls'/>
            </div>
            <div>
                {cont}
            </div>
            <div style={{borderLeft: '2px solid rgb(223, 230, 236)'}}>
                <CgMathMinus onClick={removeProduct} className='controls'/>
            </div>
        </main>
    </>
  )
}

export default CartCont