import { skillBarPropsTypes } from './SkillBar.types'
import './styles.css'

export const SkillBar: React.FC<skillBarPropsTypes> = ({ level, label }: skillBarPropsTypes) => {
  const skillWidth = {
    maxWidth: `${level}%`,
  }

  return (
    <div className='skill'>
      <div className='skill-name'>{label}</div>
      <div className='skill-bar'>
        <div className='skill-per' data-per={`${level}%`} style={skillWidth}></div>
      </div>
    </div>
  )
}
