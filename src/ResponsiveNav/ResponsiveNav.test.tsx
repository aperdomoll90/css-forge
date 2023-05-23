import { render } from '@testing-library/react'
import { ResponsiveNav } from './ResponsiveNav'
import { menuItemsArray } from '../utils/MenuProps'

describe('ResponsiveNav component', () => {
  const props = {
    menuItemsArray: menuItemsArray,
    height: 3,
    width: 5,
    primaryColor: 'rgb(0, 0, 0)',
    secondaryColor: 'rgb(0, 0, 0)',
    hoverColor: 'rgb(0, 0, 0)',
    pressColor: 'rgb(0, 0, 0)',
    labelColor: 'rgb(0, 0, 0)',
  }

  const renderComponent = () => render(<ResponsiveNav {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
