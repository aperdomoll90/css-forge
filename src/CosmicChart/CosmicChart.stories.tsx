import { Meta, StoryFn } from '@storybook/react'
import { CosmicChart } from './CosmicChart'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Cosmic Chart',
  component: CosmicChart,
  parameters: {
    jest: ['CosmicChart.test.tsx'],
  },
} as Meta

const CosmicChartTemplate: StoryFn = () => (
  <StorybookContainer>
    <CosmicChart />
  </StorybookContainer>
)

export const CosmicChartComponent = CosmicChartTemplate.bind({})
