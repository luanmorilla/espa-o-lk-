import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../../ui/Button/Button'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-main">ESPAÇO</span>
          <span className="header__logo-name">LK</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a href="#piscina" onClick={closeMenu}>Piscina</a>
          <a href="#brinquedos" onClick={closeMenu}>Brinquedos</a>
          <a href="#estrutura" onClick={closeMenu}>Estrutura</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>

          <Button
            href="#contato"
            variant="primary"
            size="sm"
            className="header__nav-button"
            onClick={closeMenu}
          >
            Reserve agora
          </Button>
        </nav>

        <Button
          href="#contato"
          variant="primary"
          size="sm"
          className="header__button"
        >
          Reserve agora
        </Button>

        <button
          type="button"
          className="header__menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Header