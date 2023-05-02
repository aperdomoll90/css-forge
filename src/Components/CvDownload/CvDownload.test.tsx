import { render } from '@testing-library/react'
import CvDownload from './CvDownload'

describe('CvDownload component', () => {
 
  const renderComponent = () =>
    render(
      <CvDownload />
    )
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
  //   it('should demonstrate ADA compliance on this component', async () => {
  //     const { container } = renderComponent()
  //     const results = await axe(container)
  //     expect(container).toHaveNoViolations()
  //   })
})
