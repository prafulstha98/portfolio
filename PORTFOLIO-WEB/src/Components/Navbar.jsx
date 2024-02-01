import { motion } from 'framer-motion'
import Sidebar from './Sidebar';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const socialIconsName = [
        { url: 'https://www.facebook.com/itachiUchiha482244', name: <FaFacebookF /> },
        { url: 'https://github.com/prachanda482244', name: <FaGithub /> },
        { url: 'https://www.linkedin.com/in/prachanda-rana/', name: <FaLinkedin /> },
        { url: 'https://twitter.com/Itachi482244', name: <FaTwitter /> },
    ]

    const variants = {
        visible: {
            opacity: 1,
            color: "blue",
            transition: {
                duration: 1, staggerChildren: .5
            },

        },
        hidden: {
            opacity: 0
        },

    }
    const iconVariants = {
        hidden: { color: 'black' },
        visible: { color: 'white' },
    };
    return (
        <nav className="h-28">
            <Sidebar />
            <div className="wrapper h-full max-w-6xl mx-auto justify-between p-2 flex items-center">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: .5, duration: .5 }}
                    className="font-bold text-xl"
                >Prachanda Rana</motion.span>
                <motion.div
                    initial="hidden" animate="visible"
                    variants={variants}
                    className="social-icons flex gap-5 text-xl items-center">

                    {socialIconsName?.map((icon) => (
                        <motion.a
                            whileHover={{ color: 'blue', scale: 1.3 }}
                            whileTap={{ color: 'blue', scale: 1.3 }}
                            variants={iconVariants}
                            key={icon.url} rel='noreferrer' href={icon.url} target="_blank">{icon.name}</motion.a>
                    ))}

                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar
