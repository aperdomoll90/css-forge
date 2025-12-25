import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SkillBar } from './SkillBar'

describe('SkillBar component', () => {
  const defaultProps = {
    level: 80,
    label: 'React',
  }

  const renderComponent = (props = {}) => render(<SkillBar {...defaultProps} {...props} />)

  it('should render correctly', () => {
    const { container } = renderComponent()
    expect(container.querySelector('[data-label]')).toBeInTheDocument()
  })

  it('should display the correct label via data attribute', () => {
    const { container } = renderComponent({ label: 'TypeScript' })
    const element = container.querySelector('[data-label="TypeScript"]')
    expect(element).toBeInTheDocument()
  })

  it('should display the correct level via data attribute', () => {
    const { container } = renderComponent({ level: 90 })
    const fill = container.querySelector('[data-level="90"]')
    expect(fill).toBeInTheDocument()
  })

  it('should set maxWidth style based on level', () => {
    const { container } = renderComponent({ level: 75 })
    const fill = container.querySelector('[data-level]')
    expect(fill).toHaveStyle({ maxWidth: '75%' })
  })

  it('should demonstrate ADA compliance on this component', async () => {
    const { container } = renderComponent()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
