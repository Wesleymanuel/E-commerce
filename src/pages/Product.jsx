import { useFatchIndividualProduct } from "../custom-hooks/useFatchIndividualProduct.js"
import CartCont from "../componentes/CartCont.jsx";
import { Button } from '@mantine/core'
import { useState } from "react";
import UseRedirectBuyForm from "../custom-hooks/useRedirectBuyForm.jsx";
import './Product.css'
import { useDispatch } from "react-redux";
import { addItenOnCart } from "../redux/features/cartItensSlice.js";

const Product = () => {

  const dispatch = useDispatch()
  const { individualProduct } = useFatchIndividualProduct()

  return (
    <main className="product-page">
      <div className="sla">
        <div className="image-conteiner-individual">
          <img src={individualProduct?.image} alt={individualProduct?.title} />
        </div>
      </div>
      <div className="sla2">
        <div className="product-stats">
          <div className="title">
            <h2>{individualProduct?.title}</h2>
          </div>
          <div className="oi" style={{ display: 'flex', alignItems: 'flex-start', overflowX: 'hidden'}}>
            <p>{individualProduct?.description}</p>
          </div>
          <div className="stats">
            <p>Price: {individualProduct?.price} USD</p>
            <div style={{marginTop: '20px'}}>
              <UseRedirectBuyForm title={individualProduct?.title} price={individualProduct?.price}/>
              <Button onClick={() => dispatch(addItenOnCart(individualProduct))} style={{marginLeft: '20px'}}>adicionar ao carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product