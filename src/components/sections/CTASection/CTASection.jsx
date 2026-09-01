import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Container from '../../ui/Container/Container'
import Badge from '../../ui/Badge/Badge'
import { getWhatsappLink } from '../../../utils/whatsapp'
import './CTASection.css'

function CTASection() {
  const linkWhatsapp = getWhatsappLink('Olá! Gostaria de reservar uma data no Espaço LK.')

  return (
    <section className="cta">
      <div className="cta__blob cta__blob--1"></div>
      <div className="cta__blob cta__blob--2"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Badge variant="pill" pulse className="cta__badge">
            Reservas abertas
          </Badge>
        </motion.div>

        <motion.h2
          className="cta__nome"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          ESPAÇO <span>LK</span>
        </motion.h2>

        <motion.p
          className="cta__descricao"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          Seu momento especial merece o espaço perfeito. Fale agora e garanta sua data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
        >
          <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="cta__botao">
            <MessageCircle size={20} />
            Consulte disponibilidade
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection