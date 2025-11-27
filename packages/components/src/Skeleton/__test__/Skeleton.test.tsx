import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skeleton from '../index'

describe('Skeleton Component', () => {
    it('renders skeleton with animation by default', () => {
        const { container } = render(<Skeleton />)
        const root = container.querySelector('.ex-skeleton') as HTMLElement
        expect(root).toBeInTheDocument()
        expect(root).toHaveClass('ex-skeleton-animated') // animation 默认开启
        // 默认 text 为 true，应渲染 3 行
        const rows = container.querySelectorAll('.ex-skeleton-row')
        expect(rows.length).toBe(3)
    })

    it('renders children when loading is false and children exist', () => {
        const { container } = render(
            <Skeleton loading={false}>
                <div>real content</div>
            </Skeleton>
        )
        expect(screen.getByText('real content')).toBeInTheDocument()
        // 不应渲染 skeleton 内容
        expect(container.querySelector('.ex-skeleton-row')).not.toBeInTheDocument()
        expect(container.querySelector('.ex-skeleton-image')).not.toBeInTheDocument()
    })

    it('image boolean true renders default circle and default size', () => {
        const { container } = render(<Skeleton image text={false} />)
        const img = container.querySelector('.ex-skeleton-image') as HTMLElement
        expect(img).toBeInTheDocument()
        // 默认 size=default，且 shape=circle
        expect(img).toHaveClass('ex-skeleton-image-default')
        expect(img).toHaveClass('ex-skeleton-image-circle')
        // 无文本
        expect(container.querySelector('.ex-skeleton-row')).not.toBeInTheDocument()
    })

    it('image config supports shape and preset sizes', () => {
        const { container } = render(
            <Skeleton
                image={{ shape: 'square', size: 'large' }}
                text={false}
            />
        )
        const img = container.querySelector('.ex-skeleton-image') as HTMLElement
        expect(img).toHaveClass('ex-skeleton-image-large')
        expect(img).toHaveClass('ex-skeleton-image-square')
    })

    it('image config supports numeric size', () => {
        const { container } = render(
            <Skeleton
                image={{ size: 72 }}
                text={false}
            />
        )
        const img = container.querySelector('.ex-skeleton-image') as HTMLElement
        expect(img).toHaveStyle('width: 72px')
        expect(img).toHaveStyle('height: 72px')
    })

    it('text rows default to 3 with last row 60% width when width not specified', () => {
        const { container } = render(<Skeleton text />)
        const rows = Array.from(container.querySelectorAll('.ex-skeleton-row')) as HTMLElement[]
        expect(rows.length).toBe(3)
        // 第三行（最后一行）宽度约 60%
        expect(rows[2]).toHaveStyle('width: 60%')
        // 前两行默认 100%
        expect(rows[0]).toHaveStyle('width: 100%')
        expect(rows[1]).toHaveStyle('width: 100%')
    })

    it('text width accepts array per row', () => {
        const { container } = render(
            <Skeleton
                text={{ rows: 3, width: ['80%', 300, '50%'] }}
            />
        )
        const rows = Array.from(container.querySelectorAll('.ex-skeleton-row')) as HTMLElement[]
        expect(rows[0]).toHaveStyle('width: 80%')
        expect(rows[1]).toHaveStyle('width: 300px')
        expect(rows[2]).toHaveStyle('width: 50%')
    })

    it('text width accepts single number or string', () => {
        const { container: c1 } = render(<Skeleton text={{ rows: 2, width: 400 }} />)
        const rows1 = Array.from(c1.querySelectorAll('.ex-skeleton-row')) as HTMLElement[]
        expect(rows1[0]).toHaveStyle('width: 400px')
        expect(rows1[1]).toHaveStyle('width: 400px')

        const { container: c2 } = render(<Skeleton text={{ rows: 2, width: '75%' }} />)
        const rows2 = Array.from(c2.querySelectorAll('.ex-skeleton-row')) as HTMLElement[]
        expect(rows2[0]).toHaveStyle('width: 75%')
        expect(rows2[1]).toHaveStyle('width: 75%')
    })

    it('disables text when text=false', () => {
        const { container } = render(<Skeleton text={false} />)
        expect(container.querySelector('.ex-skeleton-row')).not.toBeInTheDocument()
    })

    it('applies custom className and style on root', () => {
        const { container } = render(<Skeleton className="custom" style={{ width: '320px' }} />)
        const root = container.querySelector('.ex-skeleton') as HTMLElement
        expect(root).toHaveClass('custom')
        expect(root).toHaveStyle('width: 320px')
    })

    it('disables animation when animation=false', () => {
        const { container } = render(<Skeleton animation={false} />)
        const root = container.querySelector('.ex-skeleton') as HTMLElement
        expect(root).not.toHaveClass('ex-skeleton-animated')
    })
})