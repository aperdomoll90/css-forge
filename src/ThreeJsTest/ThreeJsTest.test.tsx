import { render } from '@testing-library/react'
import { ThreeJsTest } from './ThreeJsTest'
import { ThreeJsTestPropsType } from './ThreeJsTest.types'

describe('ThreeJsTest component', () => {
  let props: ThreeJsTestPropsType = {
    size: 10,
  }
  const renderComponent = () => render(<ThreeJsTest {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
