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
    <SkillBar level={90} label="CSS" barColor="var(--blue-700)" indicatorBackground="var(--blue-600)" indicatorColor="var(--white-100)" />
    <SkillBar level={85} label="JavaScript" barColor="var(--yellow-400)" indicatorBackground="var(--orange-400)" indicatorColor="var(--charcoal-200)" />
    <SkillBar level={80} label="React" barColor="var(--blue-100)" indicatorBackground="var(--blue-600)" indicatorColor="var(--white-100)" />
    <SkillBar level={70} label="TypeScript" barColor="var(--blue-800)" indicatorBackground="var(--blue-600)" indicatorColor="var(--white-100)" />
  </div>
)