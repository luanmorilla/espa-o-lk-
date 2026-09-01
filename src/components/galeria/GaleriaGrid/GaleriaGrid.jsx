import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Expand } from 'lucide-react'
import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Lightbox from '../Lightbox/Lightbox'
import { galeria, categoriasGaleria } from '../../../data/galeria'
import './GaleriaGrid.css'

function GaleriaGrid() {
  const [filtro, setFiltro] = useState('todos')
  const [indiceAtual, setIndiceAtual] = useState(null)

  const fotosFiltradas = useMemo(() => {
    if (filtro === 'todos') return galeria
    return galeria.filter((foto) => foto.categoria === filtro)
  }, [filtro])

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

        <div className="galeria__filtros">
          {categoriasGaleria.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={'galeria__filtro' + (filtro === cat.id ? ' galeria__filtro--ativo' : '')}
              onClick={() => setFiltro(cat.id)}
            >
              {cat.nome}
            </button>
          ))}
        </div>

        <motion.div layout className="galeria__grid">
          <AnimatePresence mode="popLayout">
            {fotosFiltradas.map((foto, index) => (
              <motion.button
                key={foto.id}
                layout
                type="button"
                className={'galeria__item galeria__item--' + foto.tamanho}
                onClick={() => setIndiceAtual(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <img src={foto.src} alt={foto.alt} loading="lazy" />

                <span className="galeria__overlay">
                  <span className={'galeria__tag galeria__tag--' + foto.categoria}>
                    {categoriasGaleria.find((c) => c.id === foto.categoria)?.nome}
                  </span>
                  <Expand size={20} />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <Lightbox
        fotos={fotosFiltradas}
        indiceAtual={indiceAtual}
        onClose={() => setIndiceAtual(null)}
        onNavegar={setIndiceAtual}
      />
    </section>
  )
}

export default GaleriaGrid