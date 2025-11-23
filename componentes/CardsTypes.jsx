import UseRedirectProduct from "../custom-hooks/useRedirectProduct.jsx"


const CardsTypes = ({typeCard}) => {

  const category = typeCard[0]?.category

  return (
    <div className={`cards-wrapper ${category === "jewelery" ? "jewelery-section" : ""}`} style={{ width: '100%', display: 'flex', gap: '10px', flexFlow: 'wrap', paddingTop: '20px'}}>
        {typeCard.map((prod) => (
          <div className='products-conteiner' key={prod.id} style={{ width: '200px' }}>
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
      </div>
  )
}

export default CardsTypes