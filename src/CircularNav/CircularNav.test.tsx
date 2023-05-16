import { render } from '@testing-library/react'
import { CircularNav } from './CircularNav'
import { menuItemsArray } from '../utils/MenuProps'

describe('CircularNav component', () => {
  const props = {
    menuItemsArray: menuItemsArray,
  }
  const renderComponent = () => render(<CircularNav {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
