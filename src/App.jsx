import Header from './components/layout/Header/Header'
import Hero from './components/hero/Hero'
import Experiencia from './components/sections/Experiencia/Experiencia'
import Piscina from './components/piscina/Piscina'
import BrinquedosGrid from './components/brinquedos/BrinquedosGrid/BrinquedosGrid'
import Comodidades from './components/estrutura/Comodidades/Comodidades'
import GaleriaGrid from './components/galeria/GaleriaGrid/GaleriaGrid'
import CTASection from './components/sections/CTASection/CTASection'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experiencia />
      <Piscina />
      <BrinquedosGrid />
      <Comodidades />
      <GaleriaGrid />
      <CTASection />
      <Footer />
    </>
  )
}

export default App