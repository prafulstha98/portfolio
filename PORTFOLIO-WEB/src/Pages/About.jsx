import TagComponent from "../Components/TagComponent"
import { motion } from 'framer-motion'
import { animate } from "../constants/helper"
const About = () => {
    const variants = {
        initial: { opacity: .5, color: "black" },
        animate: { opacity: 1, color: 'blue', transition: { repeat: Infinity, duration: 1, staggerChildren: .2 } }
    }
    const upVariants = {
        initial: { color: 'black' },
        animate: { color: 'red', transition: { duration: 1, staggerChildren: .2 } }
    }
    return (
        <div
            style={{ background: 'linear-gradient(180deg,#0c0c1d,#111132)' }}
            className="flex min-h-screen flex-col gap-10">
            <TagComponent title='About' />
            <motion.p
                whileHover={{ boxShadow: 'inset 2px 2px 500px black', textShadow: '1px 1px 2px white' }}
                whileTap={{ boxShadow: 'inset 2px 2px 400px black', textShadow: '1px 1px 2px white' }}
                transition={{ duration: .5 }}

                style={{
                    boxShadow: '4px 4px 5px purple'
                }}

                className="md:text-center text-xl md:text-2xl bg-slate-300 text-black rounded-lg  border-2 md:w-[90%] md:leading-8 tracking-tighter font-bold  p-4  mx-auto" >
                Hi there, myself
                <motion.span
                    variants={variants} initial="initial" animate="animate" className="text-red-500">
                    {animate(" Praful Shrestha ", variants)}
                </motion.span>
                <br />
                I am a
                <motion.span variants={upVariants} initial="initial"
                    whileInView="animate" className="text-red-500">
                    {animate(" full stack developer ", upVariants)}
                </motion.span>
                with over 2.5+ years of experience in this field.
                <br />

                <br />
                I posses solid understanding of frontend like ReactJS and back-end  Node.js, Express.js, and MongoDB. Throughout my career as a freelancer, I&apos;ve worked on different kinds of projects, from small improvements to full applications.

                <br />
                <br />

                I am committed to maintaining effective communication with both clients and team members, as I believe that clear and open communication is essential for the success of any project. I strive to deliver high-quality solutions that exceed expectations.
            </motion.p>
        </div >

    )
}

export default About
