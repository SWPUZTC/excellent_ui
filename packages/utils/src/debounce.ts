export default function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
