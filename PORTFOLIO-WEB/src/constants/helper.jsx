import { motion } from 'framer-motion'
export const animate = (string, variants) => {
    return string.split('').map((word, i) => (
        <motion.span
            key={i}
            variants={variants}
        >{word}</motion.span>
    ))
}