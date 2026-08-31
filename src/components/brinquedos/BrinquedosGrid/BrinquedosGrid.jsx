import { useState } from 'react'
import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import BrinquedoCard from '../BrinquedoCard/BrinquedoCard'
import BrinquedoModal from '../BrinquedoModal/BrinquedoModal'
import { brinquedos } from '../../../data/brinquedos'
import './BrinquedosGrid.css'

function BrinquedosGrid() {
  const [selecionado, setSelecionado] = useState(null)

  return (
    <section id="brinquedos" className="brinquedos">
      <Container>
        <SectionTitle
          eyebrow="Diversão para a criançada"
          title="Brinquedos para"
          highlight="tornar a festa inesquecível."
          description="Infláveis, piscina de bolinhas, tobogã e toda a estrutura para a criançada se divertir do início ao fim."
        />

        <div className="brinquedos__grid">
          {brinquedos.map((brinquedo, index) => (
            <BrinquedoCard
              key={brinquedo.id}
              brinquedo={brinquedo}
              index={index}
              onClick={setSelecionado}
            />
          ))}
        </div>
      </Container>


      <BrinquedoModal
        brinquedo={selecionado}
        onClose={() => setSelecionado(null)}
      />
    </section>
  )
}

export default BrinquedosGrid