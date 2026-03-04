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
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-300)' },
      ],
    },
  },
} as Meta

const Template: StoryFn<WordScramblerProps> = (args) => <WordScrambler {...args} />

export const Default = Template.bind({})
Default.args = {
  words: ['CODEPEN', 'REACT', 'JAVASCRIPT'],
    textColor: "var(--white-100)",
}