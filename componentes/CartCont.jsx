import { useState } from 'react'
import './CardCont.css'
import { GoPlus } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";

const CartCont = ({cont,setCont}) => {

    const addProductOnCart = () => {
        setCont(prev => prev + 1)
    }

    const retireProductOnCart = () => {
        if(cont < 0){
            setCont(0)
        }else{
            setCont(prev => prev - 1)
        }
    }

  return (
    <>
        <main className='card-modification'>
            <div>
                <GoPlus onClick={addProductOnCart} className='controls'/>
            </div>
            <div>
                {cont}
            </div>
            <div>
                <CgMathMinus onClick={retireProductOnCart} className='controls'/>
            </div>
        </main>
    </>
  )
}

export default CartCont