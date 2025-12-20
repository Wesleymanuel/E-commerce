import UseRedirectProduct from "../custom-hooks/useRedirectProduct.jsx"
import './Cards.css'

const CardsTypes = ({typeCard}) => {

  return (
    <>
      {typeCard.map((prod) => (
        <div className="cards-container" key={prod.id}>
            <div className="cards" >
              <div className="image-container">
                <img src={prod.image} alt={prod.title} className="image-cards" />
              </div>
              <div>
                <div className="product-name">
                  <p onClick={() => console.log(prod)}>{prod.title}</p>
                </div>
              </div>
                <div>
                  <p>Price: {prod.price} USD</p>
                </div>
                <UseRedirectProduct id={prod.id} className="button"/>
            </div>
        </div>
      ))}  
  </>
  )
}

export default CardsTypes