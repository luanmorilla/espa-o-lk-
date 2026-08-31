import Header from './components/layout/Header/Header'
import Hero from './components/hero/Hero'
import Experiencia from './components/sections/Experiencia/Experiencia'
import Piscina from './components/piscina/Piscina'
import BrinquedosGrid from './components/brinquedos/BrinquedosGrid/BrinquedosGrid'
import Comodidades from './components/estrutura/Comodidades/Comodidades'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experiencia />
      <Piscina />
      <BrinquedosGrid />
      <Comodidades />
    </>
  )
}

export default App