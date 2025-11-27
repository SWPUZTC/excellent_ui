import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Comment from '../index'

describe('Comment Component', () => {
    it('renders basic structure: avatar, author, datetime, content, actions', () => {
        const { container } = render(
            <Comment
                author="Socrates"
                avatar={<div data-testid="avatar">AVATAR</div>}
                datetime="1 hour"
                content={<div>Comment body content.</div>}
                actions={<button>Reply</button>}
            />
        )

        // 结构渲染
        expect(container.querySelector('.ex-comment')).toBeInTheDocument()
        expect(container.querySelector('.ex-comment-avatar')).toBeInTheDocument()
        expect(screen.getByTestId('avatar')).toBeInTheDocument()
        expect(screen.getByText('Socrates')).toBeInTheDocument()
        expect(screen.getByText('1 hour')).toBeInTheDocument()
        expect(screen.getByText('Comment body content.')).toBeInTheDocument()
        expect(screen.getByText('Reply')).toBeInTheDocument()

        // 默认对齐（未传 align）应为左对齐
        const title = container.querySelector('.ex-comment-title') as HTMLElement
        const actions = container.querySelector('.ex-comment-actions') as HTMLElement
        expect(title).toHaveStyle('justify-content: flex-start')
        expect(actions).toHaveStyle('justify-content: flex-start')
    })

    it('applies right alignment when align="right"', () => {
        const { container } = render(
            <Comment
                author="Balzac"
                avatar={<div>AVATAR</div>}
                datetime="1 hour"
                content={<div>Content</div>}
                actions={<button>Reply</button>}
                align="right"
            />
        )

        const title = container.querySelector('.ex-comment-title') as HTMLElement
        const actions = container.querySelector('.ex-comment-actions') as HTMLElement
        // datetime 右对齐 => 标题区两端对齐
        expect(title).toHaveStyle('justify-content: space-between')
        // actions 右对齐
        expect(actions).toHaveStyle('justify-content: flex-end')
    })

    it('applies mixed alignment when align is object', () => {
        const { container } = render(
            <Comment
                author="Austen"
                avatar={<div>AVATAR</div>}
                datetime="now"
                content={<div>Mixed</div>}
                actions={<button>Action</button>}
                align={{ datetime: 'right', actions: 'left' }}
            />
        )

        const title = container.querySelector('.ex-comment-title') as HTMLElement
        const actions = container.querySelector('.ex-comment-actions') as HTMLElement
        expect(title).toHaveStyle('justify-content: space-between')
        expect(actions).toHaveStyle('justify-content: flex-start')
    })

    it('align object falls back to left when specific key is missing', () => {
        const { container } = render(
            <Comment
                author="Plato"
                avatar={<div>AVATAR</div>}
                datetime="yesterday"
                content={<div>Fallback</div>}
                actions={<button>Do</button>}
                align={{ datetime: 'right' }} // 未指定 actions 时应回退到 left
            />
        )

        const title = container.querySelector('.ex-comment-title') as HTMLElement
        const actions = container.querySelector('.ex-comment-actions') as HTMLElement
        expect(title).toHaveStyle('justify-content: space-between')
        expect(actions).toHaveStyle('justify-content: flex-start')
    })

    it('renders nested children comments in inner container', () => {
        const { container } = render(
            <Comment
                author="Socrates"
                avatar={<div>AVATAR</div>}
                datetime="1 hour"
                content={<div>Parent</div>}
                actions={<button>Reply</button>}
            >
                <Comment author="Child" content={<div>Child content</div>} />
            </Comment>
        )

        const inner = container.querySelector('.ex-comment-inner-comment') as HTMLElement
        expect(inner).toBeInTheDocument()
        expect(screen.getByText('Child')).toBeInTheDocument()
        expect(screen.getByText('Child content')).toBeInTheDocument()
    })

    it('applies custom className and style', () => {
        const { container } = render(
            <Comment
                className="custom-class"
                style={{ width: '320px' }}
                author="Author"
                avatar={<div>AVATAR</div>}
                datetime="now"
                content={<div>Content</div>}
                actions={<button>Reply</button>}
            />
        )
        const root = container.querySelector('.ex-comment') as HTMLElement
        expect(root).toHaveClass('custom-class')
        expect(root).toHaveStyle('width: 320px')
    })

    it('renders actions array correctly', () => {
        const actions = [<button key="a">Like</button>, <button key="b">Reply</button>]
        render(
            <Comment
                author="Author"
                avatar={<div>AVATAR</div>}
                datetime="now"
                content={<div>Content</div>}
                actions={actions}
            />
        )
        expect(screen.getByText('Like')).toBeInTheDocument()
        expect(screen.getByText('Reply')).toBeInTheDocument()
    })
})