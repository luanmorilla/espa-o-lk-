import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Badge from '../../ui/Badge/Badge'
import './PiscinaVideo.css'

function PiscinaVideo() {
  const videoRef = useRef(null)
  const [tocando, setTocando] = useState(false)

  const iniciarVideo = () => {
    videoRef.current?.play()
    setTocando(true)
  }

  return (
    <motion.div
      className="piscina-video"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="piscina-video__content">
        <Badge variant="eyebrow">Veja o espaço</Badge>

        <h3 className="piscina-video__title">
          Um lugar para
          <br />
          aproveitar de verdade.
        </h3>


        <p className="piscina-video__description">
          Conheça um pouco mais da área da piscina e de toda a
          experiência que o Espaço LK oferece.
        </p>
      </div>

      <div className="piscina-video__player">
        <video
          ref={videoRef}
          controls={tocando}
          playsInline
          preload="metadata"
          poster="/images/piscina/piscina-video-capa.jpg"
          onPause={() => setTocando(false)}
          onEnded={() => setTocando(false)}
        >
          <source src="/videos/piscina.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {!tocando && (
          <button
            type="button"
            className="piscina-video__play"
            onClick={iniciarVideo}
            aria-label="Assistir vídeo"
          >
            <Play size={26} fill="currentColor" />
          </button>
        )}
      </div>
    </motion.div>

  )
}

export default PiscinaVideo