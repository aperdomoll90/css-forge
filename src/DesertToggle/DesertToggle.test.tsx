import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { useState } from 'react'
import { DesertToggle } from './DesertToggle'

describe('DesertToggle component', () => {
  const renderComponent = (props = {}) => render(<DesertToggle {...props} />)

  it('should render correctly', () => {
    const { container } = renderComponent()
    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument()
  })

  describe('uncontrolled mode', () => {
    it('should toggle checked state on click', () => {
      const { container } = renderComponent()
      const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

      expect(input.checked).toBe(false)
      fireEvent.click(input)
      expect(input.checked).toBe(true)
      fireEvent.click(input)
      expect(input.checked).toBe(false)
    })

    it('should respect defaultChecked prop', () => {
      const { container } = renderComponent({ defaultChecked: true })
      const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

      expect(input.checked).toBe(true)
      fireEvent.click(input)
      expect(input.checked).toBe(false)
    })

    it('should call onToggle callback when clicked', () => {
      const onToggle = jest.fn()
      const { container } = renderComponent({ onToggle })
      const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

      fireEvent.click(input)
      expect(onToggle).toHaveBeenCalledWith(true)

      fireEvent.click(input)
      expect(onToggle).toHaveBeenCalledWith(false)
    })
  })

  describe('controlled mode', () => {
    const ControlledWrapper = ({ initialChecked = false }: { initialChecked?: boolean }) => {
      const [checked, setChecked] = useState(initialChecked)
      return <DesertToggle checked={checked} onToggle={setChecked} />
    }

    it('should reflect controlled checked state', () => {
      const { container } = render(<ControlledWrapper initialChecked={true} />)
      const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

      expect(input.checked).toBe(true)
    })

    it('should update when parent state changes', () => {
      const { container } = render(<ControlledWrapper initialChecked={false} />)
      const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

      expect(input.checked).toBe(false)
      fireEvent.click(input)
      expect(input.checked).toBe(true)
    })

    it('should not toggle if parent does not update state', () => {
      const onToggle = jest.fn()
      const { container } = render(<DesertToggle checked={false} onToggle={onToggle} />)
      const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

      fireEvent.click(input)
      expect(onToggle).toHaveBeenCalledWith(true)
      expect(input.checked).toBe(false)
    })
  })

  it('should use custom ariaLabel', () => {
    const { container } = renderComponent({ ariaLabel: 'Toggle theme' })
    const input = container.querySelector('input[type="checkbox"]')

    expect(input).toHaveAttribute('aria-label', 'Toggle theme')
  })

  it('should demonstrate ADA compliance on this component', async () => {
    const { container } = renderComponent()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})