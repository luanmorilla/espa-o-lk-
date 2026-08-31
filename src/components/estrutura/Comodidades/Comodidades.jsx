import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import ComodidadesGrid from '../ComodidadesGrid/ComodidadesGrid'
import './Comodidades.css'

function Comodidades() {
  return (
    <section id="estrutura" className="comodidades">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Estrutura completa"
          title="Tudo o que você precisa,"
          highlight="em um só lugar."
          description="Espaço com dois andares e toda a infraestrutura pensada para o conforto de quem vem celebrar."
        />

        <ComodidadesGrid />
      </Container>
    </section>
  )
}

export default Comodidades