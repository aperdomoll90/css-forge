import { SkillBar } from './SkillBar'
import { Meta, StoryFn } from '@storybook/react'
import { skillBarPropsTypes } from './SkillBar.types'

export default {
  title: 'Skill Bars',
  component: SkillBar,
  parameters: {
    jest: ['SkillBar.test.tsx'],
  },
  argTypes: {
    level: { options: [90, 80, 50], control: { type: 'radio' } },
    label: { options: ['Css', 'javaScrip', 'Jest'], control: { type: 'radio' } },
  },
} as Meta

const SkillBarTemplate: StoryFn<skillBarPropsTypes> = (args) => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <SkillBar {...args} />
  </div>
)

export const SkillBarComponent = SkillBarTemplate.bind({})
SkillBarComponent.args = {
  level: 80,
  label: 'Css'
}
