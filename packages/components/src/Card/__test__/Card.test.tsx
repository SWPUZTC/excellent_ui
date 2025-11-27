import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from '../index'

describe('Card Component', () => {
    it('should render title and children correctly', () => {
        render(
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        )
        expect(screen.getByText('Card Title')).toBeInTheDocument()
        expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('should render extra content', () => {
        render(
            <Card title="Card Title" extra={<button>More</button>}>
                <p>Card content</p>
            </Card>
        )
        expect(screen.getByText('More')).toBeInTheDocument()
    })

    it('should apply bordered class by default', () => {
        const { container } = render(<Card>Content</Card>)
        expect(container.firstChild).toHaveClass('ex-card-bordered')
    })

    it('should not apply bordered class when bordered is false', () => {
        const { container } = render(<Card bordered={false}>Content</Card>)
        expect(container.firstChild).not.toHaveClass('ex-card-bordered')
    })

    it('should apply hoverable class when hoverable is true', () => {
        const { container } = render(<Card hoverable>Content</Card>)
        expect(container.firstChild).toHaveClass('ex-card-hoverable')
    })

    it('should render cover image', () => {
        render(<Card cover={<img src="test.jpg" alt="cover" />}>Content</Card>)
        const coverImage = screen.getByAltText('cover')
        expect(coverImage).toBeInTheDocument()
        expect(coverImage.parentElement).toHaveClass('ex-card-cover')
    })

    it('should render actions', () => {
        const actions = [<button key="1">Action 1</button>, <button key="2">Action 2</button>]
        render(<Card actions={actions}>Content</Card>)

        expect(screen.getByText('Action 1')).toBeInTheDocument()
        expect(screen.getByText('Action 2')).toBeInTheDocument()
        const actionsContainer = screen.getByText('Action 1').parentElement?.parentElement
        expect(actionsContainer).toHaveClass('ex-card-actions')
    })

    it('should render correctly without a title', () => {
        render(<Card>Content</Card>)
        expect(screen.getByText('Content')).toBeInTheDocument()
        // 验证 header 元素不存在
        const header = screen.queryByText('Title')
        expect(header).not.toBeInTheDocument()
    })
})
