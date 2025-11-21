import type { ReactNode, PropsWithChildren } from 'react'
import { isValidElement } from 'react'



/**
 * 获取 React 节点的文本内容
 * @param children React 节点
 * @returns 节点的文本内容
 */
const getCopyText = (children: ReactNode):string => {
    if(!children || typeof children == 'boolean' || typeof children === 'symbol') {
        return ''
    } else if(typeof children === 'string' || typeof children === 'number') {
        return String(children)
    } else if(Array.isArray(children)) {
        return children.map(child => getCopyText(child)).join('')
    } else if(isValidElement(children)) {
        const { children: child } = children.props as PropsWithChildren
        return getCopyText(child)
    } else {
        return ''
    }
}

const copy = async (children: ReactNode) => {
    const text = getCopyText(children)
    if(text) {
        await navigator.clipboard.writeText(text)
    }
}

export default copy