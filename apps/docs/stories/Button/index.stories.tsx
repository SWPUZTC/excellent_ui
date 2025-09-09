import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@excellent_ui/components'

// 定义组件元数据
const ButtonMeta: Meta<typeof Button> = {
    title: '组件/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['default', 'primary']
        },
        borderType: {
            control: 'select',
            options: ['solid', 'dashed', 'dotted']
        },
        size: {
            control: 'select',
            options: ['mini', 'small', 'medium', 'large', 'extraLarge']
        },
        status: {
            control: 'select',
            options: ['default', 'success', 'warning', 'danger']
        },
        htmlType: {
            control: 'select',
            options: ['button', 'submit', 'reset']
        },
        disabled: {
            control: 'boolean'
        }
    }
}

export default ButtonMeta

type Story = StoryObj<typeof Button>

// 默认按钮
export const Default: Story = {
    args: {
        children: '默认按钮',
        type: 'default',
        borderType: 'solid',
        disabled: false
    }
}
