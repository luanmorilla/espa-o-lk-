import Badge from '../Badge/Badge'
import './SectionTitle.css'

function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}) {
  const isSplit = align === 'split'

  return (
    <div className={`section-title section-title--${align}`}>
      <div className="section-title__main">
        {eyebrow && <Badge variant="eyebrow">{eyebrow}</Badge>}

        <h2 className="section-title__title">
          {title}
          {highlight && <span> {highlight}</span>}
        </h2>
      </div>

      {description && (
        <p
          className={
            isSplit
              ? 'section-title__description section-title__description--side'
              : 'section-title__description'
          }
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle