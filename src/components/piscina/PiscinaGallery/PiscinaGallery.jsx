import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './PiscinaGallery.css'

const fotos = [
  { src: '/src/assets/images/piscina/piscina-1.jpg', alt: 'Piscina do Espaço LK' },
  { src: '/src/assets/images/piscina/piscina-2.jpg', alt: 'Área da piscina do Espaço LK' },
  { src: '/src/assets/images/piscina/piscina-3.jpg', alt: 'Piscina e área de lazer do Espaço LK' },
  { src: '/src/assets/images/piscina/piscina-4.jpg', alt: 'Detalhes da piscina do Espaço LK' },
]

function PiscinaGallery() {
  const [fotoAtual, setFotoAtual] = useState(0)

  const irPara = (index) => {
    const total = fotos.length
    setFotoAtual(((index % total) + total) % total)
  }

  return (
    <div className="piscina-gallery">
      <div className="piscina-gallery__main">
        <AnimatePresence mode="wait">
          <motion.img
            key={fotos[fotoAtual].src}
            src={fotos[fotoAtual].src}
            alt={fotos[fotoAtual].alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}

          />
        </AnimatePresence>

        <button
          type="button"
          className="piscina-gallery__arrow piscina-gallery__arrow--prev"
          onClick={() => irPara(fotoAtual - 1)}
          aria-label="Foto anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          className="piscina-gallery__arrow piscina-gallery__arrow--next"
          onClick={() => irPara(fotoAtual + 1)}
          aria-label="Próxima foto"
        >
          <ChevronRight size={20} />
        </button>

        <div className="piscina-gallery__counter">
          {String(fotoAtual + 1).padStart(2, '0')} / {String(fotos.length).padStart(2, '0')}
        </div>
      </div>

      <div className="piscina-gallery__thumbs">
        {fotos.map((foto, index) => (
          <button
            key={foto.src}
            type="button"
            className={`piscina-gallery__thumb ${

              fotoAtual === index ? 'piscina-gallery__thumb--active' : ''
            }`}
            onClick={() => irPara(index)}
            aria-label={`Ver foto ${index + 1}`}
          >
            <img src={foto.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default PiscinaGallery