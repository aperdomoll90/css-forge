import { render } from '@testing-library/react'
import {ChevronCard} from './ChevronCard'
import ben from './media/ben.png'

describe('ChevronCard component', () => {
  // const { axe, toHaveNoViolations } = require('jest-axe')
  // expect.extend(toHaveNoViolations)
  const props = {
    label: 'label',
    imgUrl: ben,
  }

  const renderComponent = () => render(<ChevronCard {...props} />)
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
