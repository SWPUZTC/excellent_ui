import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Layout from '../index'

const { Header, Footer, Content, Sider } = Layout

describe('Layout Component', () => {
    it('renders header, content, footer and defaults to column direction when no Sider', () => {
        const { container } = render(
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        )
        const root = container.querySelector('.ex-layout') as HTMLElement
        expect(root).toBeInTheDocument()
        expect(screen.getByText('Header')).toBeInTheDocument()
        expect(screen.getByText('Content')).toBeInTheDocument()
        expect(screen.getByText('Footer')).toBeInTheDocument()
        expect(root).toHaveStyle('flex-direction: column')
    })

    it('uses row direction when Sider is a direct child', () => {
        const { container } = render(
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
        )
        const root = container.querySelector('.ex-layout') as HTMLElement
        expect(root).toHaveStyle('flex-direction: row')
    })

    it('Sider width switches between width and collapsedWidth based on collapsed', () => {
        const { rerender, container } = render(
            <Layout>
                <Sider width={200} collapsedWidth={80} collapsed>
                    Sider
                </Sider>
                <Content>Content</Content>
            </Layout>
        )
        const sider = container.querySelector('.ex-layout-sider') as HTMLElement
        expect(sider).toHaveStyle('width: 80px')
        expect(sider).toHaveStyle('min-width: 80px')

        rerender(
            <Layout>
                <Sider width={200} collapsedWidth={80} collapsed={false}>
                    Sider
                </Sider>
                <Content>Content</Content>
            </Layout>
        )
        const sider2 = container.querySelector('.ex-layout-sider') as HTMLElement
        expect(sider2).toHaveStyle('width: 200px')
        expect(sider2).toHaveStyle('min-width: 80px')
    })

    it('collapsible renders arrow and triggers onCollapse with toggled state', () => {
        const onCollapse = vi.fn()
        const { container } = render(
            <Layout>
                <Sider collapsible collapsed={false} onCollapse={onCollapse}>
                    Sider
                </Sider>
                <Content>Content</Content>
            </Layout>
        )
        const arrow = container.querySelector('.ex-layout-sider-collapse-arrow') as HTMLElement
        expect(arrow).toBeInTheDocument()
        fireEvent.click(arrow)
        expect(onCollapse).toHaveBeenCalledWith(true)
    })

    it('applies resize style to Sider', () => {
        const { container } = render(
            <Layout>
                <Sider resize="horizontal">Sider</Sider>
                <Content>Content</Content>
            </Layout>
        )
        const sider = container.querySelector('.ex-layout-sider') as HTMLElement
        expect(sider).toHaveStyle('resize: horizontal')
    })

    it('applies custom className and style to Layout and Sider', () => {
        const { container } = render(
            <Layout className="root-extra" style={{ gap: '10px' }}>
                <Sider className="sider-extra" style={{ width: 120 }}>
                    Sider
                </Sider>
                <Content>Content</Content>
            </Layout>
        )
        const root = container.querySelector('.ex-layout') as HTMLElement
        const sider = container.querySelector('.ex-layout-sider') as HTMLElement
        expect(root).toHaveClass('root-extra')
        expect(root).toHaveStyle('gap: 10px')
        expect(sider).toHaveClass('sider-extra')
    })
})
