import { Meta, StoryFn } from '@storybook/react'
import {CvDownload} from './CvDownload'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Buttons',
  component: CvDownload,
  parameters: {
    jest: ['CvDownload.test.tsx'],
  },
} as Meta

const CvDownloadTemplate: StoryFn = args => (
  <StorybookContainer>
    <CvDownload {...args} />
  </StorybookContainer>
)

export const CvDownloadComponent = CvDownloadTemplate.bind({})
CvDownloadComponent.args = {}
