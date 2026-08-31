import Container from '../ui/Container/Container'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import PiscinaGallery from './PiscinaGallery/PiscinaGallery'
import PiscinaVideo from './PiscinaVideo/PiscinaVideo'
import './Piscina.css'

function Piscina() {
  return (
    <section id="piscina" className="piscina">
      <Container>
        <SectionTitle
          align="split"
          eyebrow="Área de lazer"
          title="Piscina para"
          highlight="aproveitar cada momento."
          description="Um dos espaços mais especiais do Espaço LK, pensado para deixar a celebração ainda mais divertida."
        />

        <PiscinaGallery />
        <PiscinaVideo />
      </Container>
    </section>
  )
}

export default Piscina