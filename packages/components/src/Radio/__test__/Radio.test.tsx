import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Radio from '../index'

const Group = Radio.Group

describe('Radio Component', () => {
    it('renders a basic radio and toggles in uncontrolled mode', () => {
        const handleChange = vi.fn()
        const { container } = render(<Radio onChange={handleChange}>Radio</Radio>)
        const label = container.querySelector('.ex-radio') as HTMLElement
        const input = label.querySelector('input[type="radio"]') as HTMLInputElement
        expect(screen.getByText('Radio')).toBeInTheDocument()
        expect(input.checked).toBe(false)

        fireEvent.click(label)
        expect(handleChange).toHaveBeenCalledWith(true, undefined)
        expect(input.checked).toBe(true)
    })

    it('respects disabled state', () => {
        const handleChange = vi.fn()
        const { container } = render(
            <Radio disabled onChange={handleChange}>
                Disabled Radio
            </Radio>
        )
        const label = container.querySelector('.ex-radio') as HTMLElement
        expect(label).toHaveClass('ex-radio-disabled')
        fireEvent.click(label)
        expect(handleChange).not.toHaveBeenCalled()
    })

    it('controlled: checked prop prevents internal toggle', () => {
        const handleChange = vi.fn()
        const { container, rerender } = render(
            <Radio checked={false} onChange={handleChange}>
                Controlled
            </Radio>
        )
        const input = container.querySelector('input[type="radio"]') as HTMLInputElement
        fireEvent.click(input)
        expect(handleChange).toHaveBeenCalledWith(true, undefined)
        // Still false because it's controlled
        expect(input.checked).toBe(false)

        rerender(
            <Radio checked={true} onChange={handleChange}>
                Controlled
            </Radio>
        )
        expect(input.checked).toBe(true)
    })
})

describe('Radio.Group', () => {
    it('renders children and manages selection with defaultValue (uncontrolled)', () => {
        const { container } = render(
            <Group defaultValue="b">
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
                <Radio value="c">C</Radio>
            </Group>
        )
        const radios = Array.from(container.querySelectorAll('.ex-radio')) as HTMLElement[]
        // B should be checked
        expect(radios[1]).toHaveClass('ex-radio-checked')
        fireEvent.click(radios[0])
        // After click, A should be checked
        expect(radios[0]).toHaveClass('ex-radio-checked')
        expect(radios[1]).not.toHaveClass('ex-radio-checked')
    })

    it('controlled value does not change without prop update', () => {
        const handleChange = vi.fn()
        const { container, rerender } = render(
            <Group value="a" onChange={handleChange}>
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
            </Group>
        )
        const radios = Array.from(container.querySelectorAll('.ex-radio')) as HTMLElement[]
        expect(radios[0]).toHaveClass('ex-radio-checked')
        fireEvent.click(radios[1])
        // onChange called with new value
        expect(handleChange).toHaveBeenCalled()
        // still checked A because controlled
        expect(radios[0]).toHaveClass('ex-radio-checked')

        rerender(
            <Group value="b" onChange={handleChange}>
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
            </Group>
        )
        expect(radios[1]).toHaveClass('ex-radio-checked')
    })

    it('supports options shorthand with strings and objects', () => {
        const { container } = render(
            <Group options={['A', { label: 'B', value: 'b' }, { label: 'C', value: 'c', disabled: true }]} defaultValue="b" />
        )
        const radios = Array.from(container.querySelectorAll('.ex-radio')) as HTMLElement[]
        expect(radios.length).toBe(3)
        expect(radios[1]).toHaveClass('ex-radio-checked')
        expect(radios[2]).toHaveClass('ex-radio-disabled')
    })

    it('button type applies group and item classes, respects size and hover', () => {
        const { container } = render(
            <Group type="button" size="small" defaultValue="a">
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
            </Group>
        )
        const group = container.querySelector('.ex-radio-group') as HTMLElement
        expect(group.className).toContain('ex-radio-group-type-button')
        expect(group.className).toContain('ex-radio-group-size-small')
        const radios = Array.from(container.querySelectorAll('.ex-radio')) as HTMLElement[]
        expect(radios[0].className).toContain('ex-radio-button')
    })

    it('vertical direction adds proper group class', () => {
        const { container } = render(
            <Group direction="vertical" defaultValue="a">
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
            </Group>
        )
        const group = container.querySelector('.ex-radio-group') as HTMLElement
        expect(group.className).toContain('ex-radio-group-direction-vertical')
    })
})
