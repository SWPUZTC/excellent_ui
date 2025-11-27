import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Switch from '../index'

describe('Switch Component', () => {
    it('renders with role switch and default unchecked state', () => {
        const { container } = render(<Switch />)
        const btn = container.querySelector('button.ex-switch') as HTMLButtonElement
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveAttribute('role', 'switch')
        expect(btn).toHaveAttribute('aria-checked', 'false')
        expect(btn).not.toHaveClass('ex-switch-checked')
    })

    it('shows unCheckedText when unchecked and size is default', () => {
        const { container } = render(<Switch unCheckedText="OFF" />)
        const inner = container.querySelector('.ex-switch-inner') as HTMLElement
        expect(inner).toBeInTheDocument()
        expect(inner.textContent).toBe('OFF')
    })

    it('does not render text in small size', () => {
        const { container } = render(<Switch size="small" checkedText="ON" unCheckedText="OFF" />)
        const inner = container.querySelector('.ex-switch-inner') as HTMLElement
        expect(inner).not.toBeInTheDocument()
    })

    it('renders checkedText when defaultChecked is true', () => {
        const { container } = render(<Switch defaultChecked checkedText="ON" />)
        const btn = container.querySelector('.ex-switch') as HTMLElement
        expect(btn).toHaveClass('ex-switch-checked')
        const inner = container.querySelector('.ex-switch-inner') as HTMLElement
        expect(inner.textContent).toBe('ON')
    })

    it('uncontrolled: toggles state on click and calls onChange', () => {
        const onChange = vi.fn()
        const { container } = render(<Switch unCheckedText="OFF" checkedText="ON" onChange={onChange} />)
        const btn = container.querySelector('.ex-switch') as HTMLElement

        // initial unchecked
        expect(btn).toHaveAttribute('aria-checked', 'false')
        expect(btn).not.toHaveClass('ex-switch-checked')
        expect(container.querySelector('.ex-switch-inner')?.textContent).toBe('OFF')

        // click -> checked
        fireEvent.click(btn)
        expect(onChange).toHaveBeenCalledWith(true)
        expect(btn).toHaveAttribute('aria-checked', 'true')
        expect(btn).toHaveClass('ex-switch-checked')
        expect(container.querySelector('.ex-switch-inner')?.textContent).toBe('ON')

        // click -> unchecked
        fireEvent.click(btn)
        expect(onChange).toHaveBeenCalledWith(false)
        expect(btn).toHaveAttribute('aria-checked', 'false')
        expect(btn).not.toHaveClass('ex-switch-checked')
        expect(container.querySelector('.ex-switch-inner')?.textContent).toBe('OFF')
    })

    it('controlled: does not change visually without prop update but calls onChange', () => {
        const onChange = vi.fn()
        const { container, rerender } = render(<Switch checked={false} onChange={onChange} />)
        const btn = container.querySelector('.ex-switch') as HTMLElement

        // click -> should call onChange(true), but remain unchecked
        fireEvent.click(btn)
        expect(onChange).toHaveBeenCalledWith(true)
        expect(btn).toHaveAttribute('aria-checked', 'false')
        expect(btn).not.toHaveClass('ex-switch-checked')

        // update checked prop -> should reflect checked
        rerender(<Switch checked={true} onChange={onChange} />)
        expect(btn).toHaveAttribute('aria-checked', 'true')
        expect(btn).toHaveClass('ex-switch-checked')
    })

    it('renders icons based on state (handle content)', () => {
        const { container, rerender } = render(
            <Switch checkedIcon={<span>ONICON</span>} unCheckedIcon={<span>OFFICON</span>} />
        )
        // unchecked initially
        const handle = container.querySelector('.ex-switch-handle') as HTMLElement
        expect(handle).toBeInTheDocument()
        expect(screen.getByText('OFFICON')).toBeInTheDocument()

        // toggle to checked (uncontrolled)
        fireEvent.click(container.querySelector('.ex-switch') as HTMLElement)
        expect(screen.getByText('ONICON')).toBeInTheDocument()

        // controlled check: render stays in sync with checked prop
        rerender(<Switch checked={false} checkedIcon={<span>ONICON</span>} unCheckedIcon={<span>OFFICON</span>} />)
        expect(screen.getByText('OFFICON')).toBeInTheDocument()
    })

    it('loading: adds loading class and avoids icon text', () => {
        const { container } = render(
            <Switch loading checkedIcon={<span>ONICON</span>} unCheckedIcon={<span>OFFICON</span>} />
        )
        const btn = container.querySelector('.ex-switch') as HTMLElement
        expect(btn).toHaveClass('ex-switch-loading')

        const handle = container.querySelector('.ex-switch-handle') as HTMLElement
        // 在 loading 时把手内是 <Spin />，不应渲染我们传入的图标文本
        expect(handle.textContent).not.toContain('ONICON')
        expect(handle.textContent).not.toContain('OFFICON')
    })

    it('disabled: cannot toggle, onChange not called', () => {
        const onChange = vi.fn()
        const { container } = render(<Switch disabled onChange={onChange} />)
        const btn = container.querySelector('.ex-switch') as HTMLButtonElement
        expect(btn).toBeDisabled()

        fireEvent.click(btn)
        expect(onChange).not.toHaveBeenCalled()
        expect(btn).toHaveAttribute('aria-checked', 'false')
        expect(btn).not.toHaveClass('ex-switch-checked')
    })

    it('applies custom className and style', () => {
        const { container } = render(
            <Switch className="custom-class" style={{ width: '120px' }} />
        )
        const btn = container.querySelector('.ex-switch') as HTMLElement
        expect(btn).toHaveClass('custom-class')
        expect(btn).toHaveStyle('width: 120px')
    })
})