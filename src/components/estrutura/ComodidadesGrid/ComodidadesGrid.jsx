import { motion } from 'framer-motion'
import {
  Flame,
  Gamepad2,
  Tv,
  Refrigerator,
  CookingPot,
  Armchair,
  Bath,
  Building2,
} from 'lucide-react'
import { comodidades } from '../../../data/comodidades'
import './ComodidadesGrid.css'

const icones = {
  Flame,
  Gamepad2,
  Tv,
  Refrigerator,
  CookingPot,
  Armchair,
  Bath,
  Building2,
}

function ComodidadesGrid() {
  return (
    <div className="comodidades-grid">
      {comodidades.map((item, index) => {
        const Icone = icones[item.icone]

        return (

          <motion.div
            key={item.id}
            className={`comodidade-item ${
              item.destaque ? 'comodidade-item--destaque' : ''
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="comodidade-item__icon"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.15,
              }}
              whileHover={{ rotate: 12, scale: 1.1 }}
            >
              <Icone size={item.destaque ? 28 : 22} />
            </motion.span>

            <span className="comodidade-item__label">{item.nome}</span>
          </motion.div>
        )
      })}
    </div>
  )
}


export default ComodidadesGrid