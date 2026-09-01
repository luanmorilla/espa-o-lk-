import { AtSign, MessageCircle, MapPin, ArrowUp } from 'lucide-react'
import { getWhatsappLink } from '../../../utils/whatsapp'
import './Footer.css'

function Footer() {
  const anoAtual = new Date().getFullYear()
  const linkWhatsapp = getWhatsappLink('Olá! Gostaria de saber mais sobre o Espaço LK.')

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__topo">
          <div className="footer__marca">
            <a href="#" className="footer__logo">
              <span className="footer__logo-main">ESPAÇO</span>
              <span className="footer__logo-name">LK</span>
            </a>
            <p className="footer__descricao">Um espaço completo para celebrar, brincar e criar memórias inesquecíveis.</p>
          </div>

          <div className="footer__coluna">
            <h4>Navegação</h4>
            <a href="#experiencia">Experiência</a>
            <a href="#piscina">Piscina</a>
            <a href="#brinquedos">Brinquedos</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#galeria">Galeria</a>
          </div>

          <div className="footer__coluna">
            <h4>Contato</h4>
            <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="footer__contato-item"><MessageCircle size={17} />Falar no WhatsApp</a>
            <a href="https://instagram.com/espaco_lk26" target="_blank" rel="noopener noreferrer" className="footer__contato-item"><AtSign size={17} />@espaco_lk26</a>
            <span className="footer__contato-item"><MapPin size={17} />Itaquaquecetuba e região do Alto Tietê</span>
          </div>
        </div>

        <div className="footer__linha"></div>

        <div className="footer__base">
          <span>© {anoAtual} Espaço LK. Todos os direitos reservados.</span>
          <button type="button" className="footer__topo-botao" onClick={voltarAoTopo} aria-label="Voltar ao topo"><ArrowUp size={18} /></button>
        </div>
      </div>
    </footer>
  )
}

export default Footer