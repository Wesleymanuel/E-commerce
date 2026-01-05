import "./Home.css"
import { Button } from "@mantine/core"
import Box from "../componentes/Box"
import CardsTypes from "../componentes/CardsTypes"
import { useFatchApi } from "../custom-hooks/useFatchApi"
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaPercentSolid } from "react-icons/lia";
import { GoStar } from "react-icons/go";


const Home = () => {

  const { productFilterEletronick } = useFatchApi()
  const { productFilterWomans } = useFatchApi()
  const { productFilterWomansCloates } = useFatchApi()
  const { productFilter } = useFatchApi()

  return (
    <main className="main-home">
      <div className="home-page">
        <div>
          <div>
            <h1>promocoes imperdiveis</h1>
            <h1>somente aqui!!!</h1>
          </div>
            <p>aqui voce encontra de tudo, deis de movies para a mobilha da sua casa dos sonhos,</p>
            <p>ate  novidades mega tecnologicas, nao acrdita? confirra já. Acesse nossa promocoes</p>
            <p>ou categorias.</p>
          <Button className="button-home">
            novidades
          </Button>
        </div>
      </div>
      <div className="box-content">
        <Box icons={LiaShippingFastSolid} text={'entrega hoje'}/>
        <Box icons={LiaPercentSolid} text={'melhores ofertas'}/>
        <Box icons={GoStar} text={'melhores avalidos'}/>
      </div>
      <div className="cards-content">

          <h1>eletronycs</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterEletronick}/>
            <CardsTypes typeCard={productFilterEletronick}/>
          </div>

          <h1>womans</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterWomans}/>
            <CardsTypes typeCard={productFilterWomans}/>
          </div>

          <h1>womans cloates</h1>
          <div className="products">
            <CardsTypes typeCard={productFilterWomansCloates}/>
            <CardsTypes typeCard={productFilterWomansCloates}/>
          </div>

          <h1>eletronycs</h1>
          <div className="products">
            <CardsTypes typeCard={productFilter}/>
            <CardsTypes typeCard={productFilter}/>
          </div>
          
      </div>
    </main>
  )
}

export default Home