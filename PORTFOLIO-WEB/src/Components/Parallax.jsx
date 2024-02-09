import { useRef } from 'react'
import mountains from '../assets/mountains.png'
import stars from '../assets/stars.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ heading, gradient, bg }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '700%'])
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    return (
        <div
            ref={ref}
            style={{
                background: `linear-gradient(180deg,#111132,${gradient})`
            }}
            className="w-full relative overflow-hidden h-[100vh]  flex items-center justify-center"
        >
            <motion.h1 style={{ y: yText }} className="text-5xl md:text-8xl font-bold">{heading}</motion.h1>
            <motion.div style={{ background: `url(${mountains}) no-repeat center/cover` }} className="mountains  z-[3] absolute h-full w-full  "></motion.div>
            <motion.div style={{ background: `url(${bg}) no-repeat center/cover`, y: yBg }} className="mountains z-[2] absolute h-full w-full  "></motion.div>
            <motion.div style={{ background: `url(${stars}) no-repeat center/cover`, x: yBg }} className="mountains z-[1] absolute h-full w-full  "></motion.div>
        </div>
    )
}

export default Parallax
