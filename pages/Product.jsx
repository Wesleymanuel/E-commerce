import { useFatchIndividualProduct } from "../custom-hooks/useFatchIndividualProduct.js"
import CartCont from "../componentes/CartCont.jsx";
import { Button } from '@mantine/core'
import CardsTypes from "../componentes/CardsTypes.jsx";
import { useState } from "react";
import './Product.css'
import { useDispatch } from "react-redux";
import { addItenOnCart } from "../redux/features/cartItensSlice.js";

const Product = () => {

  const dispatch = useDispatch()
  const { individualProduct } = useFatchIndividualProduct()
  const [cont, setCont] = useState(1)

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
            <div style={{display : 'flex', justifyContent: 'space-evenly', gap: '30px'}} >
              <p>Price: {individualProduct?.price} USD</p>
              <CartCont cont={cont} setCont={setCont}/>
            </div>
            <div style={{marginTop: '20px'}}>
              <Button>comprar</Button>
              <Button onClick={() => dispatch(addItenOnCart(individualProduct))} style={{marginLeft: '20px'}}>adicionar ao carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product