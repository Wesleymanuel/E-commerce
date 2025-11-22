import './Cards.css'
import { useFatchApi } from '../custom-hooks/useFatchApi'
import CardsTypes from './CardsTypes';

const Cards = () => {
  const { productFilter,productFilterEletronick,productFilterWomans,productFilterWomansCloates } = useFatchApi();

  return (
    <div className='cards-conteiner'>
      {productFilter.map((prod) => (
        <div className='products-conteiner' key={prod.id}>
            <div>
                <img src={prod.image} alt={prod.title} style={{height: '100px' , width : '100px', borderStyle: "double" }}/>
            </div>
            <p>{prod.title}</p>
            <p>{prod.price} R$</p>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center'}}>
                <button style={{width: '50%', height: "25px"}}>viwe</button>
            </div>
        </div>
      ))}
      <div className='cards-types'>
        <CardsTypes typeCard={productFilterEletronick}/>
        <CardsTypes typeCard={productFilterWomans}/>
        <CardsTypes typeCard={productFilterWomansCloates}/>
      </div>
    </div>
  )
}

export default Cards;
