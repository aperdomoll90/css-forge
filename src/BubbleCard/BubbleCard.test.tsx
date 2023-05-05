import { render } from '@testing-library/react'
import { BubbleCard } from './BubbleCard'
import shoe from './media/shoe.png'
import { BubbleCardPropsType } from './BubbleCard.types'

describe('BubbleCard component', () => {
  // const { axe, toHaveNoViolations } = require('jest-axe')
  // expect.extend(toHaveNoViolations)
  const props: BubbleCardPropsType = {
    label: 'label',
    imgUrl: shoe,
    content: 'This card follows the pointer',
    demoUrl: 'https://ingots.web.app/fishing',
    codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
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
