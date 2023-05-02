import { render } from '@testing-library/react'
import BubbleCard from './BubbleCard'
import shoe from './media/shoe.png'

describe('BubbleCard component', () => {
    // const { axe, toHaveNoViolations } = require('jest-axe')
    // expect.extend(toHaveNoViolations)
    const props = {
      label: 'label',
      imgUrl: shoe,
      content:'This card follows the pointer',
    }

  const renderComponent = () => render(<BubbleCard {...props} />)
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
//   it('should demonstrate ADA compliance on this component', async () => {
//     const { container } = renderComponent()
//     const results = await axe(container)
//     expect(container).toHaveNoViolations()
//   })
})
