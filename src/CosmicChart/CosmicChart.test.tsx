import { render } from '@testing-library/react'
import { CosmicChart } from './CosmicChart'

describe('CosmicChart component', () => {
  const renderComponent = () => render(<CosmicChart />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
