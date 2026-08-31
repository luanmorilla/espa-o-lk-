import './Badge.css'

function Badge({ children, variant = 'pill', pulse = false, className = '' }) {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()}>
      {pulse && (
        <span className="badge__pulse">
          <span className="badge__pulse-dot" />
          <span className="badge__pulse-ring" />
        </span>
      )}
      {children}
    </span>
  )
}

export default Badge