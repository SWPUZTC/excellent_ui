export default function resolveItemData(cols: number, { span, offset }: { span?: number; offset?: number }): { span: number; offset: number } {
    const originSpan = span ?? 1 // 默认为 1
    const originOffset = offset ?? 0 // 默认为 0
    const minOffset = Math.min(originOffset, cols) // 偏移量不能超过列数
    const minSpan = Math.min(minOffset > 0 ? originSpan + originOffset : originSpan, cols) // 跨度不能超过列数
    return {
        span: minSpan,
        offset: minOffset
    }
}