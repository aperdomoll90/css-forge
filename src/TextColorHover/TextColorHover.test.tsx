import { render } from '@testing-library/react'
import { TextColorHover } from './TextColorHover'
import { TextColorHoverPropsTypes } from './TextColorHover.types'

describe('TextColorHover component', () => {
  // const { axe, toHaveNoViolations } = require('jest-axe')
  // expect.extend(toHaveNoViolations)
  const props: TextColorHoverPropsTypes = { text: 'test' }
  const renderComponent = () => render(<TextColorHover {...props} />)
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
