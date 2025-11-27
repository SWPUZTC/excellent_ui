import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Tag from '../index'

describe('Tag Component', () => {
    it('renders basic tag with content', () => {
        const { container } = render(<Tag>Default</Tag>)
        const root = container.querySelector('.ex-tag') as HTMLElement
        expect(root).toBeInTheDocument()
        expect(screen.getByText('Default')).toBeInTheDocument()
    })

    it('applies size classes', () => {
        const { container: c1 } = render(<Tag size="small">Small</Tag>)
        expect(c1.querySelector('.ex-tag')!).toHaveClass('ex-tag-small')

        const { container: c2 } = render(<Tag size="medium">Medium</Tag>)
        expect(c2.querySelector('.ex-tag')!).toHaveClass('ex-tag-medium')

        const { container: c3 } = render(<Tag size="large">Large</Tag>)
        expect(c3.querySelector('.ex-tag')!).toHaveClass('ex-tag-large')
    })

    it('renders bordered and visibility classes', () => {
        const { container } = render(
            <Tag bordered visible={false}>
                Hidden
            </Tag>
        )
        const root = container.querySelector('.ex-tag') as HTMLElement
        expect(root).toHaveClass('ex-tag-bordered')
        expect(root).toHaveClass('ex-tag-invisible')
    })

    it('renders icon prefix and close icon when closeable', () => {
        const { container } = render(
            <Tag closeable icon={<span>ICON</span>}>
                With Icon
            </Tag>
        )
        expect(container.querySelector('.ex-tag-icon')).toBeInTheDocument()
        expect(screen.getByText('ICON')).toBeInTheDocument()
        expect(container.querySelector('.ex-tag-close-icon')).toBeInTheDocument()
    })

    it('clicking tag toggles checked when checkable and calls onCheck', () => {
        const onCheck = vi.fn()
        const { container } = render(
            <Tag checkable onCheck={onCheck}>
                Toggle
            </Tag>
        )
        const root = container.querySelector('.ex-tag') as HTMLElement

        // initial unchecked
        expect(root).not.toHaveClass('ex-tag-checked')
        fireEvent.click(root)
        expect(onCheck).toHaveBeenCalledWith(true)
        expect(root).toHaveClass('ex-tag-checked')

        fireEvent.click(root)
        expect(onCheck).toHaveBeenCalledWith(false)
        expect(root).not.toHaveClass('ex-tag-checked')
    })

    it('respects defaultChecked initial state', () => {
        const { container } = render(
            <Tag checkable defaultChecked>
                Init Checked
            </Tag>
        )
        const root = container.querySelector('.ex-tag') as HTMLElement
        expect(root).toHaveClass('ex-tag-checked')
    })

    it('accepts custom closeIcon', () => {
        render(
            <Tag closeable closeIcon={<span>MYCLOSE</span>}>
                Custom Close
            </Tag>
        )
        expect(screen.getByText('MYCLOSE')).toBeInTheDocument()
    })

    it('applies custom className and style', () => {
        const { container } = render(
            <Tag className="custom-class" style={{ width: '200px' }}>
                Styled
            </Tag>
        )
        const root = container.querySelector('.ex-tag') as HTMLElement
        expect(root).toHaveClass('custom-class')
        expect(root).toHaveStyle('width: 200px')
    })
})
