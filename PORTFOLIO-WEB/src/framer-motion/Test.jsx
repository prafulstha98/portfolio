import { motion } from 'framer-motion'
import { useState } from 'react'
const Test = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        visible: (i) => ({
            opacity: 1,
            // x: 100,
            transition: {
                staggerChildren: 1,
                delay: i * .5,
                // duration: 2,
                // type: 'spring',
                stiffness: 200,
                // damping: 2000
            }
        }),
        hidden: {
            opacity: 0,
            // transition: { duration: 2 }
        }
    }

    const li = [
        "home", "about", "services", "Contact"
    ]
    return (
        <div className="min-h-screen flex items-center justify-center" >
            {/* <motion.div
                className='bg-white w-40 h-40 rounded-md '
                initial="hidden"
                variants={variants}
                animate={open ? "visible" : 'hidden'}
            // initial={{ opacity: .5, scale: 1, borderRadius: '1px' }}
            // transition={{ duration: 2 }}
            // animate={{ x: 120, y: 120 }}
            // drag
            // whileInView={{ opacity: 1, borderRadius: '50px' }}
            ></motion.div>
            <button onClick={() => setOpen(!open)}>Click</button> */}

            <motion.ul
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                {
                    li.map((list, i) => (
                        <motion.li
                            variants={variants}
                            custom={i}
                            key={list}>{list}</motion.li>
                    ))
                }
            </motion.ul >
        </div >
    )
}

export default Test
