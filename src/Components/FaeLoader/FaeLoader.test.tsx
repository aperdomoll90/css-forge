import { render } from '@testing-library/react'
import FaeLoader, {FaeLoaderPropsType} from './FaeLoader'


describe('FaeLoader component', () => {
    // const { axe, toHaveNoViolations } = require('jest-axe')
    // expect.extend(toHaveNoViolations)

    let props:FaeLoaderPropsType = {
      size: 10,
}
  const renderComponent = () => render(<FaeLoader {...props} />)
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
