import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { useState } from 'react'
import { ExpandButton } from './ExpandButton'

describe('ExpandButton component', () => {
  const renderComponent = (props = {}) => render(<ExpandButton {...props} />)

  it('should render correctly', () => {
    const { container } = renderComponent()
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should render two line spans', () => {
    const { container } = renderComponent()
    const lines = container.querySelectorAll('span')
    expect(lines).toHaveLength(2)
  })

  it('should have vertical line with data-vertical attribute', () => {
    const { container } = renderComponent()
    const verticalLine = container.querySelector('[data-vertical="true"]')
    expect(verticalLine).toBeInTheDocument()
  })

  describe('rotate variant (default)', () => {
    it('should have data-variant="rotate" by default', () => {
      const { container } = renderComponent()
      const button = container.querySelector('button')
      expect(button).toHaveAttribute('data-variant', 'rotate')
    })
  })

  describe('collapse variant', () => {
    it('should have data-variant="collapse"', () => {
      const { container } = renderComponent({ variant: 'collapse' })
      const button = container.querySelector('button')
      expect(button).toHaveAttribute('data-variant', 'collapse')
    })
  })

  describe('uncontrolled mode', () => {
    it('should toggle aria-pressed on click', () => {
      const { container } = renderComponent()
      const button = container.querySelector('button')

      expect(button).toHaveAttribute('aria-pressed', 'false')
      fireEvent.click(button!)
      expect(button).toHaveAttribute('aria-pressed', 'true')
      fireEvent.click(button!)
      expect(button).toHaveAttribute('aria-pressed', 'false')
    })

    it('should respect defaultActive prop', () => {
      const { container } = renderComponent({ defaultActive: true })
      const button = container.querySelector('button')

      expect(button).toHaveAttribute('aria-pressed', 'true')
    })

    it('should call onToggle callback when clicked', () => {
      const onToggle = jest.fn()
      const { container } = renderComponent({ onToggle })
      const button = container.querySelector('button')

      fireEvent.click(button!)
      expect(onToggle).toHaveBeenCalledWith(true)

      fireEvent.click(button!)
      expect(onToggle).toHaveBeenCalledWith(false)
    })
  })

  describe('controlled mode', () => {
    const ControlledWrapper = ({ initialActive = false }: { initialActive?: boolean }) => {
      const [active, setActive] = useState(initialActive)
      return <ExpandButton active={active} onToggle={setActive} />
    }

    it('should reflect controlled active state', () => {
      const { container } = render(<ControlledWrapper initialActive={true} />)
      const button = container.querySelector('button')

      expect(button).toHaveAttribute('aria-pressed', 'true')
    })

    it('should update when parent state changes', () => {
      const { container } = render(<ControlledWrapper initialActive={false} />)
      const button = container.querySelector('button')

      expect(button).toHaveAttribute('aria-pressed', 'false')
      fireEvent.click(button!)
      expect(button).toHaveAttribute('aria-pressed', 'true')
    })

    it('should not toggle if parent does not update state', () => {
      const onToggle = jest.fn()
      const { container } = render(<ExpandButton active={false} onToggle={onToggle} />)
      const button = container.querySelector('button')

      fireEvent.click(button!)
      expect(onToggle).toHaveBeenCalledWith(true)
      expect(button).toHaveAttribute('aria-pressed', 'false')
    })
  })

  it('should use custom ariaLabel', () => {
    const { container } = renderComponent({ ariaLabel: 'Expand section' })
    const button = container.querySelector('button')

    expect(button).toHaveAttribute('aria-label', 'Expand section')
  })

  it('should demonstrate ADA compliance on rotate variant', async () => {
    const { container } = renderComponent({ variant: 'rotate' })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should demonstrate ADA compliance on collapse variant', async () => {
    const { container } = renderComponent({ variant: 'collapse' })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})