import { useFatchIndividualProduct } from "../custom-hooks/useFatchIndividualProduct.js"
import { SlArrowDown } from "react-icons/sl";
import { TiStarOutline } from "react-icons/ti";
import { LuNotebookPen } from "react-icons/lu";
import { useState } from "react";
import CartCont from "../componentes/CartCont.jsx";
import { Button } from '@mantine/core'
import CardsTypes from "../componentes/CardsTypes.jsx";
import { useFatchApi } from "../custom-hooks/useFatchApi.js";
import './Product.css'

const Product = () => {

  const { product } = useFatchApi()

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
          <div className="oi">
            <h2>{individualProduct?.title}</h2>
          </div>
          <div className="oi" style={{height : '40%', display: 'flex', alignItems: 'flex-end', overflowX: 'hidden'}}>
            <p>{individualProduct?.description}</p>
          </div>
          <div style={{height: '40%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'}}>
            <CartCont/>
            <div style={{marginTop: '20px'}}>
              <Button>comprar</Button>
              <Button style={{marginLeft: '20px'}}>adicionar ao carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product