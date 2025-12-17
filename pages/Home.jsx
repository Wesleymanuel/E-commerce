import "./Home.css"
import Box from "../componentes/Box"
import CardsTypes from "../componentes/CardsTypes"
import { useFatchApi } from "../custom-hooks/useFatchApi"


const Home = () => {

  const { productFilterEletronick } = useFatchApi()
  const { productFilterWomans } = useFatchApi()
  const { productFilterWomansCloates } = useFatchApi()

  return (
    <main className="main-home">
      <div className="home-page">
        <div style={{marginLeft: "10%"}}>
          <div>
            <h1>promocoes imperdiveis</h1>
            <h1>somente aqui!!!</h1>
          </div>
          <div>
            <p>aqui voce encontra de tudo, deis de movies para a mobilha da sua casa dos sonhos,</p>
            <p>ate  novidades mega tecnologicas, nao acrdita? confirra já. Acesse nossa promocoes</p>
            <p>ou categorias.</p>
          </div>
        </div>
      </div>
      <div className="box-content">
        <Box/>
        <Box/>
        <Box/>
      </div>
      <div className="cards-content">
        <div>
          <h1 style={{marginLeft: "135px"}}>eletronycs</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterEletronick}/>
            <CardsTypes typeCard={productFilterEletronick}/>
          </div>
        </div>
        <div>
          <h1 style={{marginLeft: "135px"}}>eletronycs</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterWomans}/>
            <CardsTypes typeCard={productFilterWomans}/>
          </div>
        </div>
        <div>
          <h1 style={{marginLeft: "135px"}}>eletronycs</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterWomansCloates}/>
            <CardsTypes typeCard={productFilterWomansCloates}/>
          </div>
        </div>
        <div>
          <h1 style={{marginLeft: "135px"}}>eletronycs</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterWomansCloates}/>
            <CardsTypes typeCard={productFilterWomansCloates}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home