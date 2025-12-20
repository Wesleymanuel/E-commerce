import { useFatchIndividualProduct } from "../custom-hooks/useFatchIndividualProduct.js"
import { SlArrowDown } from "react-icons/sl";
import { TiStarOutline } from "react-icons/ti";
import { LuNotebookPen } from "react-icons/lu";
import { useState } from "react";
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
          <div>
            <h2>{individualProduct?.title}</h2>
          </div>
          <div style={{height : '40%', display: 'flex', alignItems: 'center', overflowX: 'hidden'}}>
            <p>{individualProduct?.description}</p>
          </div>
          <div style={{height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <Button>comprar</Button>
            <Button style={{marginLeft: '20px'}}>adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product