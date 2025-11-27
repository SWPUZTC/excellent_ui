import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Checkbox from '../index'

const Group = Checkbox.Group

describe('Checkbox Component', () => {
    it('renders and toggles in uncontrolled mode', () => {
        const onChange = vi.fn()
        const { container } = render(<Checkbox onChange={onChange}>Checkbox</Checkbox>)
        const label = container.querySelector('.ex-checkbox') as HTMLElement
        const input = label.querySelector('input[type="checkbox"]') as HTMLInputElement
        expect(screen.getByText('Checkbox')).toBeInTheDocument()
        expect(input.checked).toBe(false)
        fireEvent.click(label)
        expect(onChange).toHaveBeenCalled()
        expect(input.checked).toBe(true)
    })

    it('respects disabled state', () => {
        const onChange = vi.fn()
        const { container } = render(
            <Checkbox disabled onChange={onChange}>
                Disabled
            </Checkbox>
        )
        const label = container.querySelector('.ex-checkbox') as HTMLElement
        expect(label).toHaveClass('ex-checkbox-disabled')
        fireEvent.click(label)
        expect(onChange).not.toHaveBeenCalled()
    })

    it('shows custom icon when provided', () => {
        render(
            <Checkbox defaultChecked icon={<span data-testid="custom-icon">*</span>}>
                With Icon
            </Checkbox>
        )
        expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('error class applied when error prop is true', () => {
        const { container } = render(<Checkbox error>Err</Checkbox>)
        const label = container.querySelector('.ex-checkbox') as HTMLElement
        expect(label).toHaveClass('ex-checkbox-error')
    })
})

describe('Checkbox.Group', () => {
    it('initializes with defaultValue and toggles values', () => {
        const { container } = render(
            <Group defaultValue={['1', '3']}>
                <Checkbox value="1">One</Checkbox>
                <Checkbox value="2">Two</Checkbox>
                <Checkbox value="3">Three</Checkbox>
            </Group>
        )
        const items = Array.from(container.querySelectorAll('.ex-checkbox')) as HTMLElement[]
        // 1 and 3 checked
        expect(items[0]).toHaveClass('ex-checkbox-checked')
        expect(items[2]).toHaveClass('ex-checkbox-checked')
        fireEvent.click(items[1])
        expect(items[1]).toHaveClass('ex-checkbox-checked')
    })

    it('controlled: value does not change without prop update', () => {
        const onChange = vi.fn()
        const { container, rerender } = render(
            <Group value={['1']} onChange={onChange}>
                <Checkbox value="1">One</Checkbox>
                <Checkbox value="2">Two</Checkbox>
            </Group>
        )
        const items = Array.from(container.querySelectorAll('.ex-checkbox')) as HTMLElement[]
        expect(items[0]).toHaveClass('ex-checkbox-checked')
        fireEvent.click(items[1])
        // onChange called with new array
        expect(onChange).toHaveBeenCalled()
        // still only "1" is checked because controlled
        expect(items[0]).toHaveClass('ex-checkbox-checked')

        rerender(
            <Group value={['2']} onChange={onChange}>
                <Checkbox value="1">One</Checkbox>
                <Checkbox value="2">Two</Checkbox>
            </Group>
        )
        expect(items[1]).toHaveClass('ex-checkbox-checked')
    })

    it('renders options shorthand and object form', () => {
        const { container } = render(
            <Group options={['A', { label: 'B', value: 'b', disabled: true }, { label: 'C', value: 'c' }]} defaultValue={['A', 'c']} />
        )
        const items = Array.from(container.querySelectorAll('.ex-checkbox')) as HTMLElement[]
        expect(items.length).toBe(3)
        expect(items[0]).toHaveClass('ex-checkbox-checked')
        expect(items[1]).toHaveClass('ex-checkbox-disabled')
    })

    it('vertical direction applies group class', () => {
        const { container } = render(
            <Group direction="vertical">
                <Checkbox value="1">One</Checkbox>
                <Checkbox value="2">Two</Checkbox>
            </Group>
        )
        const group = container.querySelector('.ex-checkbox-group') as HTMLElement
        expect(group.className).toContain('ex-checkbox-group-direction-vertical')
    })
})
