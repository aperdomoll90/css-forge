import { skillBarPropsTypes } from './SkillBar.types'
import './styles.css'
import '../utils/GlobalStyles.css'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    per?: string
  }
}
export const SkillBar: React.FC<skillBarPropsTypes> = ({ level, label }: skillBarPropsTypes) => {
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
