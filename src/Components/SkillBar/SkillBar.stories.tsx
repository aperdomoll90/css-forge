import SkillBar, { skillBarPropsTypes } from './SkillBar'
import { Meta, StoryFn } from '@storybook/react'
import StorybookContainer from '../StorybookContainer'

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

 const SkillBarTemplate:StoryFn<skillBarPropsTypes> = (args) =>(
  <StorybookContainer>
    <SkillBar {...args} />
  </StorybookContainer>
 )

export const SkillBarComponent = SkillBarTemplate.bind({})
SkillBarComponent.args = {
  level: 80,
  label: 'Css'
}