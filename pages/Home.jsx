import "./Home.css"
import Box from "../componentes/Box"


const Home = () => {
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
    </main>
  )
}

export default Home