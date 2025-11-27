import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Descriptions from '../index'

// Mock useBreakPoint to control responsive behavior
vi.mock('@excellent-ui/hooks', async () => {
    const original = await vi.importActual('@excellent-ui/hooks')
    return {
        ...original,
        useBreakPoint: () => 'md' // 固定返回 md
    }
})

describe('Descriptions Component', () => {
    const data = [
        { label: 'Name', value: 'Socrates', span: 1 },
        { label: 'Mobile', value: '123-1234-1234', span: 2 },
        { label: 'Residence', value: 'Beijing', span: 1 },
        { label: 'Hometown', value: 'Beijing', span: 1 }
    ]

    it('renders title and rows with horizontal layout', () => {
        const { container } = render(<Descriptions title="User Info" data={data} layout="horizontal" />)
        expect(screen.getByText('User Info')).toBeInTheDocument()
        const rows = container.querySelectorAll('tr.ex-descriptions-row')
        expect(rows.length).toBeGreaterThan(0)
        // 横向布局使用 item-label / item-value 类名
        expect(container.querySelector('.ex-descriptions-item-label')).toBeInTheDocument()
        expect(container.querySelector('.ex-descriptions-item-value')).toBeInTheDocument()
    })

    it('applies border and size classes on container', () => {
        const { container } = render(<Descriptions border size="small" data={data} />)
        const root =
            container.querySelector('.ex-descriptions-horizontal') ||
            container.querySelector('.ex-descriptions-vertical') ||
            container.querySelector('.ex-descriptions-inline-horizontal') ||
            container.querySelector('.ex-descriptions-inline-vertical')
        expect(root).toBeTruthy()
        const rootEl = root as HTMLElement
        expect(rootEl.className).toContain('ex-descriptions-border')
        expect(rootEl.className).toContain('ex-descriptions-small')
    })

    it('uses fixed table layout when tableLayout = fixed', () => {
        const { container } = render(<Descriptions tableLayout="fixed" data={data} />)
        // 容器包含 fixed 类，以便 CSS 应用 table-layout: fixed
        const root = container.querySelector('.ex-descriptions-fixed') as HTMLElement
        expect(root).toBeInTheDocument()
        // 表格存在
        expect(container.querySelector('.ex-descriptions-table')).toBeInTheDocument()
    })

    it('inline-horizontal: renders inline label/value classes', () => {
        const { container } = render(<Descriptions layout="inline-horizontal" data={data} />)
        expect(container.querySelector('.ex-descriptions-item-label-inline')).toBeInTheDocument()
        expect(container.querySelector('.ex-descriptions-item-value-inline')).toBeInTheDocument()
    })

    it('responsive columns resolve via useBreakPoint and getBreakPoint', () => {
        const respData = [
            { label: 'A', value: '1', span: 1 },
            { label: 'B', value: '2', span: 1 },
            { label: 'C', value: '3', span: 1 }
        ]
        const { container } = render(<Descriptions layout="horizontal" columns={{ xs: 1, md: 2 }} data={respData} />)
        const firstRowValues = Array.from(
            container.querySelectorAll('tr.ex-descriptions-row')[0].querySelectorAll('td.ex-descriptions-item-value')
        ) as HTMLTableCellElement[]
        const sumColSpan = firstRowValues.reduce((sum, td) => sum + (td.colSpan || 1), 0)
        expect(sumColSpan).toBe(2)
    })
})
