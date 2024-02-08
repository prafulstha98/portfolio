import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
const Cursor = () => {
    const [cursor, setCursor] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setCursor({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    return (
        <motion.div animate={{ x: cursor.x + 10, y: cursor.y + 10 }} style={{ borderColor: `rgb(${cursor.x + cursor.y},${cursor.x},${cursor.y})` }} className="w-10 h-10 hidden md:block rounded-full border-2 p-6 z-[999]  fixed "></motion.div>
    )
}

export default Cursor
