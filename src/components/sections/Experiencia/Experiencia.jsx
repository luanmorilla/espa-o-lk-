import { motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import './Experiencia.css'

const cards = [
  {
    number: '01',
    title: 'Diversão para todos',
    text: 'Estrutura preparada para criar experiências divertidas para crianças, famílias e convidados.',
    variant: 'large',
  },
  {
    number: '02',
    title: 'Conforto',
    text: 'Um ambiente agradável para aproveitar a celebração do começo ao fim.',
  },
  {
    number: '03',
    title: 'Momentos especiais',
    text: 'O cenário ideal para aniversários, encontros e comemorações memoráveis.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
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
          {cards.map((card, i) => (
            <motion.article
              key={card.number}
              className={`experiencia__card ${
                card.variant === 'large' ? 'experiencia__card--large' : ''
              }`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={reveal}
            >
              <div className="experiencia__card-content">
                <span className="experiencia__number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Experiencia