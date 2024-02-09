import { motion } from 'framer-motion'
const ServiceBox = ({ title, body, variants }) => {

    // const animate = body.split(' ').map((e, i) => (
    //     <motion.span variants={variants} animate={variants.animate} key={i} >{e}</motion.span>
    // ))
    // console.log(animate);
    return (
        <motion.div
            variants={variants}
            whileHover={variants.hover}
            whileTap={variants.hover}
            initial={variants.initial}
            animate={variants.animate}
            className="p-3 border-2  border-white shadow-lg m-1 rounded-lg sm:w-full md:w-1/4">
            <motion.div variants={variants}
                className="box flex flex-col gap-1 justify-between p-3 ">
                <h2 className="text-lg uppercase text-center font-bold border border-t-0 border-l-0 border-r-0 border-b-blue-500">{title}</h2>
                <motion.p whileFocus={{ color: 'white' }} className="p-1 font-bold rounded-lg h-52 text-slate-400 shadow-lg tracking-tighter">{body}</motion.p>
            </motion.div>

        </motion.div>
    )
}

export default ServiceBox
