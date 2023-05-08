import { render } from '@testing-library/react'
import { CvDownload } from './CvDownload'
import { CvDownloadPropsType } from './CvDownload.types'

describe('CvDownload component', () => {
  const prop: CvDownloadPropsType = {
    linkUrl: 'test',
    color: '#fff',
    buttonHover: 'red',
    labelColor: 'green',
  }
  const renderComponent = () => render(<CvDownload {...prop} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
