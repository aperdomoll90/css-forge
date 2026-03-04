import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SlicerButton } from './SlicerButton'

describe('SlicerButton component', () => {
  const defaultProps = {
    label: 'Test Link',
    href: 'https://example.com',
  }

  const renderComponent = (props = {}) =>
    render(<SlicerButton {...defaultProps} {...props} />)

  it('should render correctly', () => {
    const { container } = renderComponent()
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('should render the label text', () => {
    const { getByText } = renderComponent({ label: 'Click Me' })
    expect(getByText('Click Me')).toBeInTheDocument()
  })

  it('should have correct href attribute', () => {
    const { container } = renderComponent({ href: 'https://test.com' })
    const link = container.querySelector('a')

    expect(link).toHaveAttribute('href', 'https://test.com')
  })

  it('should have data-label attribute for pseudo-elements', () => {
    const { container } = renderComponent({ label: 'My Label' })
    const link = container.querySelector('a')

    expect(link).toHaveAttribute('data-label', 'My Label')
  })

  it('should render label as link text content', () => {
    const { container } = renderComponent({ label: 'My Label' })
    const link = container.querySelector('a')

    expect(link).toHaveTextContent('My Label')
  })

  it('should apply custom color via CSS variable', () => {
    const { container } = renderComponent({ color: '#ff0000' })
    const link = container.querySelector('a')

    expect(link).toHaveStyle('--color: #ff0000')
  })

  it('should apply custom hover color via CSS variable', () => {
    const { container } = renderComponent({ colorHover: '#00ff00' })
    const link = container.querySelector('a')

    expect(link).toHaveStyle('--color-hover: #00ff00')
  })

  it('should apply custom fontSize via CSS variable', () => {
    const { container } = renderComponent({ fontSize: '2rem' })
    const link = container.querySelector('a')

    expect(link).toHaveStyle('--font-size: 2rem')
  })

  it('should apply custom className', () => {
    const { container } = renderComponent({ className: 'my-custom-class' })
    const link = container.querySelector('a')

    expect(link).toHaveClass('my-custom-class')
  })

  it('should apply custom style prop', () => {
    const { container } = renderComponent({
      style: { fontWeight: 'bold', letterSpacing: '0.1em' },
    })
    const link = container.querySelector('a')

    expect(link).toHaveStyle('font-weight: bold')
    expect(link).toHaveStyle('letter-spacing: 0.1em')
  })

  it('should use default color value (#fff)', () => {
    const { container } = renderComponent()
    const link = container.querySelector('a')

    expect(link).toHaveStyle('--color: #fff')
  })

  it('should demonstrate ADA compliance on this component', async () => {
    const { container } = renderComponent()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})