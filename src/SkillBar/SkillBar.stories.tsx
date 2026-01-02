import { SkillBar } from './SkillBar'
import { Meta, StoryFn } from '@storybook/react'
import { skillBarPropsTypes } from './SkillBar.types'

export default {
  title: 'Components/SkillBar',
  component: SkillBar,
  argTypes: {
    level: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    label: { control: 'text' },
  },
} as Meta

const Template: StoryFn<skillBarPropsTypes> = (args) => (
  <div style={{ maxWidth: '400px', width: '100%' }}>
    <SkillBar {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  level: 80,
  label: 'CSS',
}


export const MultipleSkills: StoryFn<skillBarPropsTypes> = () => (
  <div style={{ maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <SkillBar level={90} label="CSS" barColor="#3498db" indicatorBackground="#2980b9" indicatorColor="#fff" />
    <SkillBar level={85} label="JavaScript" barColor="#f1c40f" indicatorBackground="#f39c12" indicatorColor="#222" />
    <SkillBar level={80} label="React" barColor="#61dafb" indicatorBackground="#21a1c4" indicatorColor="#fff" />
    <SkillBar level={70} label="TypeScript" barColor="#3178c6" indicatorBackground="#235a97" indicatorColor="#fff" />
  </div>
)