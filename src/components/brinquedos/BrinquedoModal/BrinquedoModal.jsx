import { AnimatePresence, motion } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import { getWhatsappLink } from '../../../utils/whatsapp'
import './BrinquedoModal.css'

function BrinquedoModal({ brinquedo, onClose }) {
  const linkWhatsapp = brinquedo
    ? getWhatsappLink('Olá! Tenho interesse em alugar: ' + brinquedo.nome + '. Poderia me passar mais informações?')
    : '#'

  return (
    <AnimatePresence>
      {brinquedo && (
        <motion.div
          className="brinquedo-modal__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="brinquedo-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="brinquedo-modal__close" onClick={onClose} aria-label="Fechar">
              <X size={20} />
            </button>

            <div className="brinquedo-modal__image">
              <img src={brinquedo.imagem} alt={brinquedo.nome} />
            </div>

            <div className="brinquedo-modal__content">
              <span className="brinquedo-modal__category">{brinquedo.categoria}</span>

              <h3>{brinquedo.nome}</h3>

              <p>{brinquedo.descricaoCompleta}</p>

              <div className="brinquedo-modal__meta">
                <span>Idade recomendada</span>
                <strong>{brinquedo.idadeRecomendada}</strong>
              </div>

              <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="brinquedo-modal__whatsapp">
                <MessageCircle size={18} />
                Consultar disponibilidade
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BrinquedoModal