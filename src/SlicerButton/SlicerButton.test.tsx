import { render } from '@testing-library/react'
import { SlicerButton } from './SlicerButton'
import { SlicerButtonPropsTypes } from './SlicerButton.types'

describe('SlicerButton component', () => {
  const props: SlicerButtonPropsTypes = {
    label: 'Button',
    linkUrl: '#testAddress',
    color: 'red',
    fontSize: '2rem',
    colorHover: 'yellow',
  }

  const renderComponent = () => render(<SlicerButton {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
