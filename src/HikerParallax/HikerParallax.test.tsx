import { render } from '@testing-library/react'
import { HikerParallax } from './HikerParallax'

describe('HikerParallax component', () => {
  const renderComponent = () => render(<HikerParallax />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
