import './PageSection.css'

function PageSection({ children, className, bgColor, padding }) {
  const baseClasses = 'page-section'
  const combinedClasses = `${baseClasses} ${className || ''}`

  const sectionStyle = {
    padding: padding || '60px 20px',
    ...(bgColor && { background: bgColor })
  }

  return (
    <section className={combinedClasses} style={sectionStyle}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default PageSection
