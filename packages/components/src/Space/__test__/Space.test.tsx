import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Space from '../index'

describe('Space Component', () => {
    it('should render children correctly', () => {
        render(
            <Space>
                <span>Item 1</span>
                <span>Item 2</span>
            </Space>
        )
        expect(screen.getByText('Item 1')).toBeInTheDocument()
        expect(screen.getByText('Item 2')).toBeInTheDocument()
    })

    it('should apply vertical direction when specified', () => {
        const { container } = render(
            <Space direction="vertical">
                <span>Item 1</span>
            </Space>
        )
        expect(container.firstChild).toHaveClass('ex-space-vertical')
    })

    it('should apply correct gap size with predefined sizes', () => {
        const { container: mini } = render(
            <Space size="mini">
                <span>1</span>
            </Space>
        )
        expect(mini.firstChild).toHaveStyle('gap: 4px')

        const { container: small } = render(
            <Space size="small">
                <span>1</span>
            </Space>
        )
        expect(small.firstChild).toHaveStyle('gap: 8px')

        const { container: medium } = render(
            <Space size="medium">
                <span>1</span>
            </Space>
        )
        expect(medium.firstChild).toHaveStyle('gap: 16px')

        const { container: large } = render(
            <Space size="large">
                <span>1</span>
            </Space>
        )
        expect(large.firstChild).toHaveStyle('gap: 24px')
    })

    it('should apply custom gap size with a number', () => {
        const { container } = render(
            <Space size={20}>
                <span>1</span>
            </Space>
        )
        expect(container.firstChild).toHaveStyle('gap: 20px')
    })

    it('should apply wrap class when wrap is true', () => {
        const { container } = render(
            <Space wrap>
                <span>Item 1</span>
            </Space>
        )
        expect(container.firstChild).toHaveClass('ex-space-wrap')
    })
})
