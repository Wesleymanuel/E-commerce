import './Cards.css'
import { useFatchApi } from '../custom-hooks/useFatchApi'
import CardsTypes from './CardsTypes';
import UseRedirectProduct from '../custom-hooks/useRedirectProduct';

const Cards = () => {
  const { productFilter,productFilterEletronick,productFilterWomans,productFilterWomansCloates } = useFatchApi();

  return (
    <div className='cards-conteiner'>
      {productFilter.map((prod) => (
        <div className='products-conteiner' key={prod.id}>
            <div>
                <img src={prod.image} alt={prod.title} style={{height: '100px' , width : '100px', borderStyle: "double" }}/>
            </div>
            {prod.title < 10 ? (<p>{prod.title}</p>) : (<p style={{fontSize: '10px' }}>{prod.title}</p>)}
            <p>{prod.price} R$</p>
                <div style={{ width: "100%" , display: 'flex', justifyContent: 'center'}}>
                  <UseRedirectProduct id={prod.id}/>
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
