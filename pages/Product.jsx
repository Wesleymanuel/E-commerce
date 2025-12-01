import { useFatchIndividualProduct } from "../custom-hooks/useFatchIndividualProduct.js"
import { SlArrowDown } from "react-icons/sl";
import { TiStarOutline } from "react-icons/ti";
import { LuNotebookPen } from "react-icons/lu";
import { useState } from "react";
import CardsTypes from "../componentes/CardsTypes.jsx";
import { useFatchApi } from "../custom-hooks/useFatchApi.js";
import './Product.css'

const Product = () => {

  const { product } = useFatchApi()

  const [descriptionProd , setDescriptionProd] = useState(false)
  const { individualProduct } = useFatchIndividualProduct()

  return (
    <div className="indivual-product" >
      <div className="individual-product-card">

        <div style={{ width : '300px', display: 'flex', justifyContent: 'center', borderStyle: 'double'}} >
          <img className="individual-image" src={individualProduct?.image} alt={individualProduct?.title} />
        </div>

        <div>
          <p style={{ fontSize: '14px' }}>{individualProduct?.title}</p>
        </div>

        <div style={{width: '100%', display: 'flex' , justifyContent: "flex-start", flexDirection: 'column'}}>
          <p style={{display: 'flex', alignItems: 'center'}}>Rating : {individualProduct?.rating.rate} <LuNotebookPen/></p>
          <p style={{display: 'flex', alignItems: 'center'}}>Count: {individualProduct?.rating.count} <TiStarOutline/></p>
        </div>

        <div style={{width: '100%', display: 'flex' , justifyContent: "flex-start", flexDirection: 'column'}}>
          <button onClick={() => setDescriptionProd(prev => !prev)} style={{ display: "flex", alignItems: "center" }}>
            <SlArrowDown className={`arrow-icon ${descriptionProd ? "rotate" : ""}`} />
            <p style={{ marginLeft: "6px" }}>description:</p>
          </button>

          <div className={`description-wrapper ${descriptionProd ? "open" : ""}`}>
            <p>{individualProduct?.description}</p>
          </div>

        </div>

        <div>
          <p>Price: {individualProduct?.price} USD</p>
        </div>
        <div>
          <button onClick={() => console.log(individualProduct)}>bora ver</button>
        </div>
      </div>
    <CardsTypes typeCard={product}/>
    </div>
  )
}

export default Product