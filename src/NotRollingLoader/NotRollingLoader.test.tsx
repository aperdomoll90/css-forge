import { render } from '@testing-library/react'
import { NotRollingLoader } from './NotRollingLoader'
import { NotRollingLoaderPropsType } from './NotRollingLoader.types'

describe('NotRollingLoader component', () => {
  let props: NotRollingLoaderPropsType = {
    tracks: 8,
  }
  const renderComponent = () => render(<NotRollingLoader {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
