import { useState, useEffect } from "react";

export const useScrollTop = (target: HTMLElement | Window = window, visibleHeight = 400) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!(target instanceof Window || target instanceof HTMLElement)) {
            return;
        }
        const handleScroll = () => {
            const scrollTop = target instanceof Window ? target.scrollY : target.scrollTop;
            setVisible(scrollTop > visibleHeight);
        };
        target.addEventListener('scroll', handleScroll);
        return () => {
            target.removeEventListener('scroll', handleScroll);
        }
    }, [target, visibleHeight])

    return visible;
}