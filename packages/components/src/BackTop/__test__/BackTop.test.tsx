import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import BackTop from '../index'

// 使用 hoisted 在顶层提前声明并初始化 mock，避免“初始化前不可访问”
const hoisted = vi.hoisted(() => ({
    mockedUseScrollTop: vi.fn<(element: HTMLElement | Window, threshold: number) => boolean>(() => false)
}))

vi.mock('@excellent-ui/hooks', () => ({
    useScrollTop: hoisted.mockedUseScrollTop
}))

describe('BackTop Component', () => {
    it('does not render when useScrollTop returns false', () => {
        hoisted.mockedUseScrollTop.mockReturnValue(false)
        const { container } = render(<BackTop>UP</BackTop>)
        expect(container.querySelector('.ex-back-top')).not.toBeInTheDocument()
    })

    it('renders when useScrollTop returns true', () => {
        hoisted.mockedUseScrollTop.mockReturnValue(true)
        const { container } = render(<BackTop>UP</BackTop>)
        const root = container.querySelector('.ex-back-top') as HTMLElement
        expect(root).toBeInTheDocument()
        expect(screen.getByText('UP')).toBeInTheDocument()
    })

    it('applies className and style', () => {
        hoisted.mockedUseScrollTop.mockReturnValue(true)
        const { container } = render(
            <BackTop className="extra" style={{ width: '100px' }}>
                UP
            </BackTop>
        )
        const root = container.querySelector('.ex-back-top') as HTMLElement
        expect(root.className).toContain('ex-back-top')
        expect(root.className).toContain('extra')
        expect(root).toHaveStyle('width: 100px')
    })
})
