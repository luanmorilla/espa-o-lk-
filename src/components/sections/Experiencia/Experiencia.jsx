import { motion } from 'framer-motion'
import { PartyPopper, Sofa, Heart } from 'lucide-react'
import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import './Experiencia.css'

const cards = [
  {
    numero: '01',
    icone: PartyPopper,
    titulo: 'Diversão para todos',
    texto: 'Estrutura preparada para criar experiências divertidas para crianças, famílias e convidados.',
    variante: 'destaque',
  },
  {
    numero: '02',
    icone: Sofa,
    titulo: 'Conforto',
    texto: 'Um ambiente agradável para aproveitar a celebração do começo ao fim.',
  },
  {
    numero: '03',
    icone: Heart,
    titulo: 'Momentos especiais',
    texto: 'O cenário ideal para aniversários, encontros e comemorações memoráveis.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

function Experiencia() {
  return (
    <section id="experiencia" className="experiencia">
      <Container>
        <SectionTitle
          eyebrow="Uma experiência completa"
          title="Um espaço pensado para"
          highlight="momentos inesquecíveis."
        />

        <div className="experiencia__grid">
          {cards.map((card, i) => {
            const Icone = card.icone

            return (
              <motion.article
                key={card.numero}
                className={
                  'experiencia__card' +
                  (card.variante === 'destaque' ? ' experiencia__card--destaque' : '')
                }
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={reveal}
              >
                <div className="experiencia__card-content">
                  <div className="experiencia__topo">
                    <span className="experiencia__number">{card.numero}</span>

                    <motion.span
                      className="experiencia__icon"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                    >
                      <Icone size={card.variante === 'destaque' ? 26 : 22} />
                    </motion.span>
                  </div>

                  <h3>{card.titulo}</h3>
                  <p>{card.texto}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Experiencia