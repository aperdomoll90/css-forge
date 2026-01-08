import { Meta, StoryFn } from '@storybook/react'
import { WordScrambler } from './WordScrambler'
import { WordScramblerProps } from './WordScrambler.types'

export default {
  title: 'Text/WordScrambler',
  component: WordScrambler,
  argTypes: {
    speed: { control: 'number' },
    textColor: { control: 'color' },
    fontSize: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1c1d20' },
      ],
    },
  },
} as Meta

const Template: StoryFn<WordScramblerProps> = (args) => <WordScrambler {...args} />

export const Default = Template.bind({})
Default.args = {
  words: ['CODEPEN', 'REACT', 'JAVASCRIPT'],
    textColor: "#fff",
}