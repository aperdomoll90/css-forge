import { render } from '@testing-library/react'
import { RollingBallNav } from './RollingBallNav'
import { menuItemsArray } from '../utils/MenuProps'

describe('RollingBallNav component', () => {
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
  const renderComponent = () => render(<RollingBallNav {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
