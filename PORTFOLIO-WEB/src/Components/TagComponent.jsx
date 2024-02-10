import { motion } from 'framer-motion'
const TagComponent = ({ title }) => {
    return (
        <motion.div
            whileHover={{ boxShadow: "inset 2px 2px 400px black", color: 'white' }}
            whileTap={{ boxShadow: "inset 2px 2px 400px black", color: 'white' }}
            transition={{ duration: .5 }}
            className='sticky  bg-slate-200 text-slate-800 z-10 top-0 left-0'>
            <h2 style={{ textShadow: '1px 2px 2px black' }} className="text-center text-4xl md:text-5xl capitalize font-semibold p-1">&lt;{title} /&gt;</h2>
        </motion.div>
    )
}

export default TagComponent
