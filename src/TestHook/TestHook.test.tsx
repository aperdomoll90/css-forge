import { render } from '@testing-library/react'
import { TestHook } from './TestHook'
import { TestHookPropsType } from './TestHook.types'

describe('TestHook component', () => {
  const props: TestHookPropsType = {
    color: '#fff',
    buttonHover: 'red',
    buttonBackgroundColor: 'black',
  }

  const renderComponent = () => render(<TestHook {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
