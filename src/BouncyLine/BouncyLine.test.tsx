import { render } from '@testing-library/react'
import { BouncyLine } from './BouncyLine'

describe('BouncyLine component', () => {
  const renderComponent = () => render(<BouncyLine />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
