import './styles.css'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    per?: string
  }
}

export interface skillBarPropsTypes {
  level: number
  label: string
}
function SkillBar({ level, label }: skillBarPropsTypes) {
  const skillWidth = {
    maxWidth: `${level}%`,
  }

  return (
    <div className='skill'>
      <div className='skill-name'>{label}</div>
      <div className='skill-bar'>
        <div className='skill-per' per={`${level}%`} style={skillWidth}></div>
      </div>
    </div>
  )
}

export default SkillBar
