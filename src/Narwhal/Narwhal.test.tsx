import { render } from '@testing-library/react'
import {Narwhal} from './Narwhal'

describe('Narwhal component', () => {
  // const { axe, toHaveNoViolations } = require('jest-axe')
  // expect.extend(toHaveNoViolations)

  const renderComponent = () => render(<Narwhal />)
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
