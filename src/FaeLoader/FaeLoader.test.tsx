import { render } from '@testing-library/react'
import { FaeLoader } from './FaeLoader'
import { FaeLoaderPropsType } from './FaeLoader.types'

describe('FaeLoader component', () => {
  let props: FaeLoaderPropsType = {
    size: 10,
  }
  const renderComponent = () => render(<FaeLoader {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
