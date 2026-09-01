import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Badge from '../ui/Badge/Badge'
import Button from '../ui/Button/Button'
import { getWhatsappLink } from '../../utils/whatsapp'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

function Hero() {
  const linkDisponibilidade = getWhatsappLink(
    'Olá! Gostaria de consultar a disponibilidade do Espaço LK.'
  )

  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
        >

          <Badge variant="pill" pulse>
            Reservas abertas
          </Badge>
        </motion.div>

        <motion.h1
          className="hero__title"
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
        >
          Seu momento especial
          <br />
          começa aqui.
        </motion.h1>

        <motion.p
          className="hero__description"
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
        >
          Um espaço completo para celebrar, brincar e criar memórias
          inesquecíveis.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial="hidden"
          animate="show"

          custom={0.3}
          variants={fadeUp}
        >
          <Button
            href={linkDisponibilidade}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            Consulte disponibilidade
          </Button>

          <Button href="#experiencia" variant="outline" size="lg">
            Conheça o espaço
          </Button>
        </motion.div>
      </div>

      <div className="hero__scroll">
        <span>Role para conhecer</span>
        <ArrowDown size={16} className="hero__scroll-arrow" />
      </div>
    </section>
  )
}

export default Hero