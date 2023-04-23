import { render } from '@testing-library/react'
import SkillBar, { skillBarPropsTypes } from './SkillBar'


describe('SkillBar component', () => {
    // const { axe, toHaveNoViolations } = require('jest-axe')
    // expect.extend(toHaveNoViolations)

    let props: skillBarPropsTypes = {
        level: 10,
        label: 'string',
  }
  const renderComponent = () => render(<SkillBar {...props} />)
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
