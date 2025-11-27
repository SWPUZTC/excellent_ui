import { useEffect, useState } from "react";
import { debounce } from "@excellent-ui/utils";



// 定义断点
const BREAK_POINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
}

/**
 * 自定义 hook，用于获取当前视口宽度对应的断点
 * @description 该 hook 会根据当前视口宽度返回对应的断点键名（如 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'）
 * @returns 当前视口宽度对应的断点键名（如 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'）
 */
const useBreakPoint = (): keyof typeof BREAK_POINTS => {
    const [width, setWidth] = useState<number | undefined>(() => {
        return typeof window !== 'undefined' ? window.innerWidth : undefined;
    })

    // 监听窗口变化，更新宽度
    useEffect(() => {
        // 因为 debounce 函数的第一个参数是 this，执行的函数里不涉及到this，所以这里传 null
        const handleResize = debounce(() => {
            setWidth(window.innerWidth);
        }, 200);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // 如果是SSR，默认返回 xs
    if (!width) return 'xs'

    // 根据宽度判断当前断点 找到第一个大于等于宽度的断点 默认 xs
    let breakPoint = width >= BREAK_POINTS.xxl ? 'xxl' : 'xs';
    Object.keys(BREAK_POINTS).forEach((key) => {
        if (width <= BREAK_POINTS[key as keyof typeof BREAK_POINTS]) {
            return;
        }
        breakPoint = key;
    });
    return breakPoint as keyof typeof BREAK_POINTS;
}

export default useBreakPoint;