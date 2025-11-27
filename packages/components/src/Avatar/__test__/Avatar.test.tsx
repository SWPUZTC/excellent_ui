import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
import Avatar from '../index'

describe('Avatar Component', () => {
    let originalSpanClientWidth: PropertyDescriptor | undefined
    let mockTextWidth = 100

    beforeAll(() => {
        originalSpanClientWidth = Object.getOwnPropertyDescriptor(HTMLSpanElement.prototype, 'clientWidth')
        Object.defineProperty(HTMLSpanElement.prototype, 'clientWidth', {
            configurable: true,
            get() {
                return mockTextWidth
            }
        })
    })

    afterAll(() => {
        if (originalSpanClientWidth) {
            Object.defineProperty(HTMLSpanElement.prototype, 'clientWidth', originalSpanClientWidth)
        } else {
            // @ts-expect-error: Delete a non-configurable property.
            delete HTMLSpanElement.prototype.clientWidth
        }
    })

    it('renders image branch and not text branch', () => {
        const { container } = render(
            <Avatar>
                <img alt="avatar" src="#" />
            </Avatar>
        )
        expect(container.querySelector('.ex-avatar-img')).toBeInTheDocument()
        expect(container.querySelector('.ex-avatar-text')).not.toBeInTheDocument()
    })

    it('autoFix scales down when text wider than container', async () => {
        mockTextWidth = 100
        const { container, rerender } = render(<Avatar size={40}>Hello</Avatar>)

        // 触发依赖更新以重新执行 autoFix（依赖 size/children）
        rerender(<Avatar size={40}>Hello world</Avatar>)

        const textEl = container.querySelector('.ex-avatar-text') as HTMLElement
        const expectedScale = 40 / (mockTextWidth + 4) // size / (textWidth + 4)
        expect(textEl.style.transform).toBe(`scale(${expectedScale}) translateX(-50%)`)
    })

    it('autoFix resets scale to 1 when text fits', () => {
        mockTextWidth = 10
        const { container, rerender } = render(<Avatar size={40}>Hello</Avatar>)
        rerender(<Avatar size={40}>Hi</Avatar>)

        const textEl = container.querySelector('.ex-avatar-text') as HTMLElement
        expect(textEl.style.transform).toBe('scale(1) translateX(-50%)')
    })

    it('trigger icon renders correct classes and color fallback', () => {
        const { container: maskC } = render(<Avatar triggerType="mask" triggerIcon={<span>icon</span>} />)
        const maskIcon = maskC.querySelector('.ex-avatar-trigger-icon-mask') as HTMLElement
        expect(maskIcon).toBeInTheDocument()

        const { container: btnC } = render(
            <Avatar triggerType="button" triggerIcon={<span>icon</span>} style={{ backgroundColor: '#123456' }} />
        )
        const btnIcon = btnC.querySelector('.ex-avatar-trigger-icon-button') as HTMLElement
        // 未显式设置 triggerStyle.color 时，回落到头像背景色
        expect(btnIcon).toHaveStyle('color: #123456')
    })

    it('handles onClick', () => {
        const handleClick = vi.fn()
        const { container } = render(<Avatar onClick={handleClick}>A</Avatar>)
        const root = container.querySelector('.ex-avatar') as HTMLElement
        fireEvent.click(root)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})

describe('Avatar.Group', () => {
    it('passes size and shape defaults to children', () => {
        const { container } = render(
            <Avatar.Group size={24} shape="square">
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
            </Avatar.Group>
        )
        const avatars = container.querySelectorAll('.ex-avatar')
        expect(avatars.length).toBe(2)
        avatars.forEach(el => {
            expect(el).toHaveStyle('width: 24px')
            expect(el).toHaveStyle('height: 24px')
            expect(el).toHaveClass('ex-avatar-square')
        })
    })

    it('shows +N when exceeding maxCount', () => {
        const { getByText } = render(
            <Avatar.Group size={24} maxCount={2}>
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
                <Avatar>C</Avatar>
            </Avatar.Group>
        )
        // 超出 1 个，显示 +1
        expect(getByText('+1')).toBeInTheDocument()
    })

    it('controls z-index ordering with zindexAscend', () => {
        const { container: descC } = render(
            <Avatar.Group size={24}>
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
            </Avatar.Group>
        )
        const descAvatars = Array.from(descC.querySelectorAll('.ex-avatar')) as HTMLElement[]
        expect(descAvatars[0]).toHaveStyle('z-index: 2')
        expect(descAvatars[1]).toHaveStyle('z-index: 1')

        const { container: ascC } = render(
            <Avatar.Group size={24} zindexAscend>
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
            </Avatar.Group>
        )
        const ascAvatars = Array.from(ascC.querySelectorAll('.ex-avatar')) as HTMLElement[]
        expect(ascAvatars[0]).toHaveStyle('z-index: 1')
        expect(ascAvatars[1]).toHaveStyle('z-index: 2')
    })

    it('applies overlapping margin-left based on size', () => {
        const { container } = render(
            <Avatar.Group size={24}>
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
            </Avatar.Group>
        )
        const avatars = Array.from(container.querySelectorAll('.ex-avatar')) as HTMLElement[]
        // 第二个开始重叠，size 为 24，margin-left 为 -size/4 = -6px
        expect(avatars[0]).toHaveStyle('margin-left: 0px')
        expect(avatars[1]).toHaveStyle('margin-left: -6px')
    })
})
