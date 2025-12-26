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

export const JavaScript = Template.bind({})
JavaScript.args = {
  level: 90,
  label: 'JavaScript',
}

export const React = Template.bind({})
React.args = {
  level: 85,
  label: 'React',
}

export const MultipleSkills: StoryFn<skillBarPropsTypes> = () => (
  <div style={{ maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <SkillBar level={90} label="CSS" />
    <SkillBar level={85} label="JavaScript" />
    <SkillBar level={80} label="React" />
    <SkillBar level={70} label="TypeScript" />
  </div>
)