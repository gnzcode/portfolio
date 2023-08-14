import { useRef, useEffect } from 'react'

export default function useAnimations(animations) {
    const element = useRef()
    const addAnimations = () => {
        if (!animations || !element.current) return
        if (typeof animations == "string") {
            element.current.classList.add(animations)
            return
        }
        element.current?.classList.add(...animations)
    }
    const removeAnimations = () => {
        if (!animations || !element.current) return
        if (typeof animations == "string") {
            element.current.classList.remove(animations)
            return
        }
        element.current.classList.remove(...animations)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (!element.current) return
            const el = element.current;
            const { top, bottom } = el.getBoundingClientRect();
            const ventanaAltura = window.innerHeight;
            if (top < ventanaAltura && bottom > 0) {
                addAnimations()
            } else {
                removeAnimations()
            }
        }
        window.addEventListener("load", addAnimations)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [element])
    return element
}