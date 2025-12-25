import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { useState } from 'react'
import { HamburgerButton } from './HamburgerButton'

describe('HamburgerButton component', () => {
  const renderComponent = (props = {}) => render(<HamburgerButton {...props} />)

  it('should render correctly', () => {
    const { container } = renderComponent()
    expect(container.querySelector('button')).toBeInTheDocument()
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
      fireEvent.click(button!)
      expect(button).toHaveAttribute('aria-pressed', 'false')
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
      return <HamburgerButton active={active} onToggle={setActive} />
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
      const { container } = render(<HamburgerButton active={false} onToggle={onToggle} />)
      const button = container.querySelector('button')

      fireEvent.click(button!)
      expect(onToggle).toHaveBeenCalledWith(true)
      expect(button).toHaveAttribute('aria-pressed', 'false')
    })
  })

  it('should set data-active attribute', () => {
    const { container } = renderComponent()
    const button = container.querySelector('button')

    expect(button).toHaveAttribute('data-active', 'false')
    fireEvent.click(button!)
    expect(button).toHaveAttribute('data-active', 'true')
  })

  it('should use custom ariaLabel', () => {
    const { container } = renderComponent({ ariaLabel: 'Open navigation' })
    const button = container.querySelector('button')

    expect(button).toHaveAttribute('aria-label', 'Open navigation')
  })

  it('should demonstrate ADA compliance on this component', async () => {
    const { container } = renderComponent()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})