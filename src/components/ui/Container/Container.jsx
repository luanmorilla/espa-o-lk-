import './Container.css'

function Container({ children, size = 'default', className = '' }) {
  return (
    <div className={`container container--${size} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Container