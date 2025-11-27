import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Badge from '../index'

describe('Badge Component', () => {
    it('renders count and attaches to children', () => {
        const { container } = render(
            <Badge count={9}>
                <div>child</div>
            </Badge>
        )

        expect(screen.getByText('child')).toBeInTheDocument()
        const sup = container.querySelector('sup.ex-badge-dot') as HTMLElement
        expect(sup).toBeInTheDocument()
        expect(sup).toHaveClass('ex-badge-dot-number')
        expect(sup.textContent).toBe('9')
    })

    it('applies maxCount with "+" suffix', () => {
        const { container } = render(
            <Badge count={100} maxCount={10}>
                <div>child</div>
            </Badge>
        )
        const sup = container.querySelector('sup.ex-badge-dot') as HTMLElement
        expect(sup.textContent).toBe('10+')
    })

    it('prefers text over count', () => {
        const { container } = render(
            <Badge text="NEW" count={999}>
                <div>child</div>
            </Badge>
        )
        const sup = container.querySelector('sup.ex-badge-dot') as HTMLElement
        expect(sup).toHaveClass('ex-badge-dot-text')
        expect(sup.textContent).toBe('NEW')
    })

    it('shows dot-only when count <= 0', () => {
        const { container } = render(
            <Badge count={0}>
                <div>child</div>
            </Badge>
        )
        const sup = container.querySelector('sup.ex-badge-dot') as HTMLElement
        expect(sup).toHaveClass('ex-badge-dot-zero')
        expect(sup.textContent).toBe('')
    })

    it('standalone mode sets ex-badge-standalone', () => {
        const { container } = render(<Badge count={2} />)
        const sup = container.querySelector('sup.ex-badge-dot') as HTMLElement
        expect(sup).toHaveClass('ex-badge-standalone')
        expect(sup).toHaveClass('ex-badge-dot-number')
        expect(sup.textContent).toBe('2')
    })
})
