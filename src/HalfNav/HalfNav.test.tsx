import { render } from '@testing-library/react'
import {HalfNav} from './HalfNav'
import { menuItemsArray } from '../utils/MenuProps'

describe('HalfNav component', () => {
const props = {
  menuItemsArray: menuItemsArray,
}
  const renderComponent = () => render(<HalfNav {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
