import { render } from '@testing-library/react'
import { ToggleButton } from './ToggleButton'
import { ToggleButtonPropsType } from './ToggleButton.types'

describe('ToggleButton component', () => {
  const props: ToggleButtonPropsType = {
    color: '#fff',
    buttonHover: 'red',
    active: true,
    buttonBackgroundColor: 'black',
    setActive: () => {
      alert('Button clicked')
    },
  }

  const renderComponent = () => render(<ToggleButton {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
