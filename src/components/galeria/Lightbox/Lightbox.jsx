import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

function Lightbox({ fotos, indiceAtual, onClose, onNavegar }) {
  const foto = indiceAtual !== null ? fotos[indiceAtual] : null

  const irPara = useCallback(
    (novoIndice) => {
      const total = fotos.length
      onNavegar(((novoIndice % total) + total) % total)
    },
    [fotos.length, onNavegar]
  )

  useEffect(() => {
    if (indiceAtual === null) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') irPara(indiceAtual + 1)
      if (e.key === 'ArrowLeft') irPara(indiceAtual - 1)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }

  }, [indiceAtual, irPara, onClose])

  return (
    <AnimatePresence>
      {foto && (
        <motion.div
          className="lightbox__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              irPara(indiceAtual - 1)
            }}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={24} />

          </button>

          <motion.div
            key={foto.id}
            className="lightbox__content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={foto.src} alt={foto.alt} />
          </motion.div>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              irPara(indiceAtual + 1)
            }}
            aria-label="Próxima foto"
          >
            <ChevronRight size={24} />
          </button>

          <div className="lightbox__counter">
            {indiceAtual + 1} / {fotos.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>

  )
}

export default Lightbox