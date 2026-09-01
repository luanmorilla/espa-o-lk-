import { MessageCircle } from 'lucide-react'
import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import ComodidadesGrid from '../ComodidadesGrid/ComodidadesGrid'
import { getWhatsappLink } from '../../../utils/whatsapp'
import './Comodidades.css'

function Comodidades() {
  const linkWhatsapp = getWhatsappLink('Olá! Gostaria de saber mais sobre a estrutura do Espaço LK.')

  return (
    <section id="estrutura" className="comodidades">
      <div className="comodidades__blob comodidades__blob--1"></div>
      <div className="comodidades__blob comodidades__blob--2"></div>

      <Container>
        <SectionTitle
          align="center"
          eyebrow="Estrutura completa"
          title="Tudo o que você precisa,"
          highlight="em um só lugar."
          description="Espaço com dois andares e toda a infraestrutura pensada para o conforto de quem vem celebrar."
        />

        <ComodidadesGrid />

        <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="comodidades__whatsapp">
          <MessageCircle size={18} />
          Tirar dúvidas sobre a estrutura
        </a>
      </Container>
    </section>

  )
}

export default Comodidades