import UseRedirectProduct from "../custom-hooks/useRedirectProduct.jsx"
import './Cards.css'

const CardsTypes = ({typeCard}) => {

  return (
    <>
      {typeCard.map((prod) => (
          <div className='products-conteiner' key={prod.id}>
              <div>
                  <img src={prod.image} alt={prod.title} style={{height: '100px' , width : '120px', borderStyle: "double", padding: '6px' }}/>
              </div>
              <div style={{textAlign: 'center'}}>
                {prod.title < 10 ? (<p>{prod.title}</p>) : (<p style={{fontSize: '10px' }}>{prod.title}</p>)}
                <p style={{marginTop: '3px'}}>price: {prod.price} USD</p>
              </div>
                <div style={{ width: "100%" , display: 'flex', justifyContent: 'center'}}>
                  <UseRedirectProduct id={prod.id}/>
                </div>
          </div>
      ))}  
  </>
  )
}

export default CardsTypes