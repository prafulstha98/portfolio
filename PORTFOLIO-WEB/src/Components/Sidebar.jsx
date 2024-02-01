import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion'
import { sideBarlinkItems } from "../constants";
const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 30px 32px)",
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
                damping: 40
            }
        },
        closed: {
            clipPath: "circle(25px at 30px 32px)",
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 40,
                damping: 10
            }
        }
    }

    const linkVariants = {
        open: {
            x: 0,
            transition: {
                staggerChildren: .6
            }
        },
        closed: {
            transition: {
                staggerChildren: .2,
                staggerDirection: -1
            }
        }
    }

    const linkItemVariants = {
        open: {
            x: 20,
            opacity: 1
        },
        closed: {
            x: -500,
            opacity: 0
        }
    }
    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className="flex flex-col  items-center justify-center fixed z-[99] bg-white text-black"
        >
            <motion.div
                variants={variants}
                className="fixed top-0 left-0 md:w-80 w-full   bg-white">
                <motion.div
                    variants={linkVariants}
                    className=" w-80 min-h-[590px] z-50 absolute flex flex-col bg-white  justify-center items-center md:items-start gap-4">
                    {sideBarlinkItems?.map((link) => (
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: .8 }}
                            className="font-bold text-xl uppercase  shadow-xl px-4 py-1 w-60 text-gray-700"
                            variants={linkItemVariants}
                            href={`#${link.toLowerCase()}`} key={link}>{link}</motion.a>
                    ))}
                </motion.div>
            </motion.div>
            <button
                onClick={() => setOpen(prev => !prev)}
                className="w-12 h-12 fixed rounded-lg bg-transparent left-5 top-2">
                {
                    open ? <RxCross2 className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />
                }
            </button>

        </motion.div>
    )
}

export default Sidebar
