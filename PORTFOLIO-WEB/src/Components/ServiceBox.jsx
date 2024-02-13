import { motion } from 'framer-motion'
const ServiceBox = ({ title, body }) => {

    // const animate = body.split(' ').map((e, i) => (
    //     <motion.span variants={variants} animate={variants.animate} key={i} >{e}</motion.span>
    // ))
    // console.log(animate);
    return (
        <motion.div
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transiiton={{ duration: 1, stiffness: 130, damping: 50 }}
            style={{ boxShadow: "2px 2px 5px blue" }}
            whileHover={{ scale: 1.1, boxShadow: " inset 1px 1px 15px white" }}
            whileTap={{ scale: 1.1, boxShadow: " inset 1px 1px 15px skyblue" }}
            className="p-3 h-full border-white shadow-lg m-1 rounded-lg sm:w-full md:w-[45%]">
            <div className="box flex  flex-col gap-1 justify-between p-3 ">
                <h2 className="text-lg uppercase text-center font-bold border border-t-0 border-l-0 border-r-0 border-b-blue-500">{title}</h2>
                <motion.p whileFocus={{ color: 'white' }} className="p-1 font-bold rounded-lg  text-slate-400 shadow-lg tracking-tighter">{body}</motion.p>
            </div>

        </motion.div>
    )
}

export default ServiceBox
