import { render } from '@testing-library/react'
import { ChevronCard } from './ChevronCard'
import shoe from '../media/shoe.png'
import { ChevronCardPropsType } from './ChevronCard.types'

describe('ChevronCard component', () => {
  const props:ChevronCardPropsType = {
    color: 'blue',
    direction: '45deg',
    label: 'label',
    labelColor: 'red',
    buttonLabel: 'Buy Now',
    imgUrl: shoe,
    linkUrl: 'string',
    buttonColor: 'white',
    buttonHover: 'yellow',
  }

  const renderComponent = () => render(<ChevronCard {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
