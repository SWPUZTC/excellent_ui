import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Grid from '../index'

// Mock useBreakPoint hook
vi.mock('@excellent-ui/hooks', async () => {
    const original = await vi.importActual('@excellent-ui/hooks')
    return {
        ...original,
        useBreakPoint: () => 'md' // 默认模拟中等屏幕断点
    }
})

describe('Grid Component', () => {
    it('should render children correctly', () => {
        render(
            <Grid>
                <Grid.GridItem>
                    <div>Item 1</div>
                </Grid.GridItem>
                <Grid.GridItem>
                    <div>Item 2</div>
                </Grid.GridItem>
            </Grid>
        )
        expect(screen.getByText('Item 1')).toBeInTheDocument()
        expect(screen.getByText('Item 2')).toBeInTheDocument()
    })

    describe('Collapsed functionality', () => {
        it('should show all items when not collapsed', () => {
            render(
                <Grid collapsed={false} cols={24} collapsedRows={1}>
                    <Grid.GridItem span={12}>
                        <div>Item 1</div>
                    </Grid.GridItem>
                    <Grid.GridItem span={12}>
                        <div>Item 2</div>
                    </Grid.GridItem>
                    <Grid.GridItem span={12}>
                        <div>Item 3</div>
                    </Grid.GridItem>
                </Grid>
            )

            expect(screen.getByText('Item 1')).toBeVisible()
            expect(screen.getByText('Item 2')).toBeVisible()
            expect(screen.getByText('Item 3')).toBeVisible()
        })

        it('should hide items that exceed collapsedRows limit', () => {
            render(
                <Grid collapsed={true} cols={24} collapsedRows={1}>
                    <Grid.GridItem span={12}>
                        <div>Item 1</div>
                    </Grid.GridItem>
                    <Grid.GridItem span={12}>
                        <div>Item 2</div>
                    </Grid.GridItem>
                    <Grid.GridItem span={12}>
                        <div>Item 3</div>
                    </Grid.GridItem>
                </Grid>
            )

            expect(screen.getByText('Item 1')).toBeVisible()
            expect(screen.getByText('Item 2')).toBeVisible()
            // Item 3 (12) 超过了第一行 (24)，应该被隐藏
            expect(screen.getByText('Item 3').parentElement).toHaveStyle('display: none')
        })

        it('should account for offset when calculating collapsed items', () => {
            render(
                <Grid collapsed={true} cols={24} collapsedRows={1}>
                    <Grid.GridItem span={10}>
                        <div>Item 1</div>
                    </Grid.GridItem>
                    <Grid.GridItem span={10} offset={4}>
                        <div>Item 2</div>
                    </Grid.GridItem>
                    <Grid.GridItem span={10}>
                        <div>Item 3</div>
                    </Grid.GridItem>
                </Grid>
            )

            expect(screen.getByText('Item 1')).toBeVisible()
            // Item 2 (span 10 + offset 4 = 14) 加上 Item 1 (10) = 24，仍在第一行
            expect(screen.getByText('Item 2')).toBeVisible()
            // Item 3 超出，被隐藏
            expect(screen.getByText('Item 3').parentElement).toHaveStyle('display: none')
        })
    })
})
