import { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Lightbox from '../Lightbox/Lightbox'
import { galeria } from '../../../data/galeria'
import './GaleriaGrid.css'

function GaleriaGrid() {
  const [indiceAtual, setIndiceAtual] = useState(null)

  return (
    <section id="galeria" className="galeria">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Galeria"
          title="Conheça cada"
          highlight="detalhe do espaço."
          description="Fotos reais do Espaço LK — da estrutura completa aos momentos vividos por quem já celebrou aqui."
        />

        <div className="galeria__grid">
          {galeria.map((foto, index) => (
            <motion.button
              key={foto.id}
              type="button"
              className={`galeria__item galeria__item--${foto.tamanho}`}
              onClick={() => setIndiceAtual(index)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
            >
              <img src={foto.src} alt={foto.alt} loading="lazy" />

              <span className="galeria__overlay">
                <Expand size={20} />
              </span>
            </motion.button>
          ))}
        </div>
      </Container>

      <Lightbox
        fotos={galeria}
        indiceAtual={indiceAtual}
        onClose={() => setIndiceAtual(null)}
        onNavegar={setIndiceAtual}
      />
    </section>
  )
}

export default GaleriaGrid