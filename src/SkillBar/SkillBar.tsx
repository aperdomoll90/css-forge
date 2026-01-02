import { skillBarPropsTypes } from './SkillBar.types'
import styles from './SkillBar.module.scss'

export const SkillBar: React.FC<skillBarPropsTypes> = ({
  level,
  label,
  barColor,
  labelColor,
  indicatorColor,
  indicatorBackground,
}: skillBarPropsTypes) => {
  const styleVars = {
    '--bar-color': barColor,
    '--label-color': labelColor,
    '--indicator-color': indicatorColor,
    '--indicator-background': indicatorBackground,
  } as React.CSSProperties

  return (
    <div className={styles['c-skill-bar']} data-label={label} style={styleVars}>
      <div className={styles['c-skill-bar__track']}>
        <div className={styles['c-skill-bar__fill']} data-level={level} style={{ maxWidth: `${level}%` }} />
      </div>
    </div>
  )
}
