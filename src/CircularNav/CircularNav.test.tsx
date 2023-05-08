import { render } from '@testing-library/react'
import { CircularNav } from './CircularNav'

describe('CircularNav component', () => {
  const renderComponent = () => render(<CircularNav />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
