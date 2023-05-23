import { Meta, StoryFn } from '@storybook/react'
import { CvDownload } from './CvDownload'
import StorybookContainer from '../StorybookContainer'
import { CvDownloadPropsType } from './CvDownload.types'
import { dozen } from '../utils/StoryProps'

export default {
  title: 'Buttons',
  component: CvDownload,
  parameters: {
    jest: ['CvDownload.test.tsx'],
  },
  argTypes: {
    size: { options: dozen, control: { type: 'select' } },
    color: { options: ['', '#ff0000', 'rgb(0, 0, 255)', '#1c2942'], control: { type: 'radio' } },
    buttonHover: { options: ['', '#ff0000', 'rgb(0, 0, 255)', '#1c2942'], control: { type: 'radio' } },
    labelColor: { options: ['#fff', '#418440', '#1c2942'], control: { type: 'radio' } },
  },
} as Meta

const CvDownloadTemplate: StoryFn<CvDownloadPropsType> = args => (
  <StorybookContainer>
    <CvDownload {...args} />
  </StorybookContainer>
)

export const CvDownloadComponent = CvDownloadTemplate.bind({})
CvDownloadComponent.args = {
  linkUrl: 'test',
  color: '',
  buttonHover: '',
  labelColor: '',
}
