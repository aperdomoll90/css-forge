import { skillBarPropsTypes } from './SkillBar.types'
import styles from './SkillBar.module.scss'

export const SkillBar: React.FC<skillBarPropsTypes> = ({ level, label }: skillBarPropsTypes) => (
  <div className={styles['c-skill-bar']} data-label={label}>
    <div className={styles['c-skill-bar__track']}>
      <div className={styles['c-skill-bar__fill']} data-level={level} style={{ maxWidth: `${level}%` }} />
    </div>
  </div>
)
