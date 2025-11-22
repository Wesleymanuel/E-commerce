

const CardsTypes = ({typeCard}) => {
  return (
    <div style={{ width: '100%', display: 'flex', gap: '10px', flexFlow: 'wrap', paddingTop: '20px'}}>
        {typeCard.map((prod) => (
          <div className='products-conteiner' key={prod.id} style={{ width: '200px' }}>
              <div>
                  <img src={prod.image} alt={prod.title} style={{height: '100px' , width : '120px', borderStyle: "double", padding: '6px' }}/>
              </div>
              <p>{prod.title}</p>
              <p>{prod.price} R$</p>
                <div style={{ width: "100%", display: 'flex', justifyContent: 'center'}}>
                    <button style={{width: '50%', height: "25px"}}>viwe</button>
                </div>
          </div>
      ))}
      </div>
  )
}

export default CardsTypes