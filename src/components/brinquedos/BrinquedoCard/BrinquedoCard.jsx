import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import './BrinquedoCard.css'

function BrinquedoCard({ brinquedo, index, onClick }) {
  return (
    <motion.button
      type="button"
      className="brinquedo-card"
      onClick={() => onClick(brinquedo)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className="brinquedo-card__image">
        <img src={brinquedo.imagem} alt={brinquedo.nome} loading="lazy" />
        <span className="brinquedo-card__category">{brinquedo.categoria}</span>
      </div>

      <div className="brinquedo-card__footer">
        <div>
          <h3>{brinquedo.nome}</h3>
          <p>{brinquedo.descricaoCurta}</p>
        </div>

        <span className="brinquedo-card__icon">
          <Plus size={18} />
        </span>
      </div>
    </motion.button>
  )

}

export default BrinquedoCard