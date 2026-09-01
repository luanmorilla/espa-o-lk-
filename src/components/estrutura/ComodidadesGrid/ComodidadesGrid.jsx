import { motion } from 'framer-motion'
import { Flame, Gamepad2, Tv, Refrigerator, CookingPot, Armchair, Bath, Building2 } from 'lucide-react'
import { comodidades } from '../../../data/comodidades'
import './ComodidadesGrid.css'

const icones = { Flame, Gamepad2, Tv, Refrigerator, CookingPot, Armchair, Bath }

function ComodidadesGrid() {
  return (
    <div className="comodidades-grid">
      <motion.div
        className="comodidade-destaque"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.span
          className="comodidade-destaque__icon"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Building2 size={30} />
        </motion.span>

        <div>
          <strong>Espaço com dois andares</strong>
          <span>Estrutura ampla pensada para todos os momentos da festa</span>
        </div>
      </motion.div>

      {comodidades.map((item, index) => {

        const Icone = icones[item.icone]

        return (
          <motion.div
            key={item.id}
            className={'comodidade-item comodidade-item--' + item.cor}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="comodidade-item__icon"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
              whileHover={{ rotate: 14, scale: 1.12 }}
            >
              <Icone size={21} />
            </motion.span>

            <span className="comodidade-item__label">{item.nome}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

export default ComodidadesGrid