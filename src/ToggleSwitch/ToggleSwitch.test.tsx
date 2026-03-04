import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { useState } from 'react'
import { ToggleSwitch } from './ToggleSwitch'

describe('ToggleSwitch component', () => {
  const renderComponent = (props = {}) => render(<ToggleSwitch {...props} />)

  it('should render correctly', () => {
    const { container } = renderComponent()
    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument()
    expect(container.querySelector('label')).toBeInTheDocument()
  })

  describe('uncontrolled mode', () => {
    it('should toggle checked state on click', () => {
      const { container } = renderComponent()
      const input = container.querySelector('input')

      expect(input).not.toBeChecked()
      fireEvent.click(input!)
      expect(input).toBeChecked()
      fireEvent.click(input!)
      expect(input).not.toBeChecked()
    })

    it('should respect defaultChecked prop', () => {
      const { container } = renderComponent({ defaultChecked: true })
      const input = container.querySelector('input')

      expect(input).toBeChecked()
    })

    it('should call onToggle callback when clicked', () => {
      const onToggle = jest.fn()
      const { container } = renderComponent({ onToggle })
      const input = container.querySelector('input')

      fireEvent.click(input!)
      expect(onToggle).toHaveBeenCalledWith(true)

      fireEvent.click(input!)
      expect(onToggle).toHaveBeenCalledWith(false)
    })
  })

  describe('controlled mode', () => {
    const ControlledWrapper = ({ initialChecked = false }: { initialChecked?: boolean }) => {
      const [checked, setChecked] = useState(initialChecked)
      return <ToggleSwitch checked={checked} onToggle={setChecked} />
    }

    it('should reflect controlled checked state', () => {
      const { container } = render(<ControlledWrapper initialChecked={true} />)
      const input = container.querySelector('input')

      expect(input).toBeChecked()
    })

    it('should update when parent state changes', () => {
      const { container } = render(<ControlledWrapper initialChecked={false} />)
      const input = container.querySelector('input')

      expect(input).not.toBeChecked()
      fireEvent.click(input!)
      expect(input).toBeChecked()
    })

    it('should not toggle if parent does not update state', () => {
      const onToggle = jest.fn()
      const { container } = render(<ToggleSwitch checked={false} onToggle={onToggle} />)
      const input = container.querySelector('input')

      fireEvent.click(input!)
      expect(onToggle).toHaveBeenCalledWith(true)
      expect(input).not.toBeChecked()
    })
  })

  it('should set data-checked attribute', () => {
    const { container } = renderComponent()
    const input = container.querySelector('input')

    expect(input).toHaveAttribute('data-checked', 'false')
    fireEvent.click(input!)
    expect(input).toHaveAttribute('data-checked', 'true')
  })

  it('should apply custom color via CSS variable', () => {
    const { container } = renderComponent({ color: '#ff0000' })
    const wrapper = container.firstChild

    expect(wrapper).toHaveStyle('--color: #ff0000')
  })

  it('should apply custom size via CSS variable', () => {
    const { container } = renderComponent({ size: 80 })
    const wrapper = container.firstChild

    expect(wrapper).toHaveStyle('--size: 80px')
  })

  it('should render labels via data attributes', () => {
    const { container } = renderComponent({ labelBefore: 'Off', labelAfter: 'On' })
    const label = container.querySelector('label')

    expect(label).toHaveAttribute('data-label-before', 'Off')
    expect(label).toHaveAttribute('data-label-after', 'On')
  })

  it('should use custom ariaLabel', () => {
    const { container } = renderComponent({ ariaLabel: 'Theme toggle' })
    const input = container.querySelector('input')

    expect(input).toHaveAttribute('aria-label', 'Theme toggle')
  })

  it('should apply custom className', () => {
    const { container } = renderComponent({ className: 'my-custom-class' })
    const wrapper = container.firstChild

    expect(wrapper).toHaveClass('my-custom-class')
  })

  it('should demonstrate ADA compliance on this component', async () => {
    const { container } = renderComponent({ ariaLabel: 'Toggle switch' })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})