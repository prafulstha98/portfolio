import { motion } from 'framer-motion'
const ServiceBox = ({ title, body, variants }) => {
    return (
        <motion.div
            variants={variants}
            whileHover={variants.hover}
            className="p-3 border-2 hover:bg-blue-400   transition-all delay-100 ease-linear border-white shadow-lg m-1 rounded-lg sm:w-full md:w-1/4">
            <motion.div variants={variants} className="box flex flex-col gap-1 justify-between p-3 ">
                <h2 className="text-lg uppercase text-center font-bold border border-t-0 border-l-0 border-r-0 border-b-blue-500">{title}</h2>
                <motion.p whileHover={{ color: 'black' }} className="p-1 font-bold rounded-lg h-52 text-blue-400  shadow-lg tracking-tighter">{body}</motion.p>
            </motion.div>

        </motion.div>
    )
}

export default ServiceBox
