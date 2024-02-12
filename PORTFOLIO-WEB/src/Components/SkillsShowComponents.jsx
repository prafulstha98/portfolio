import { motion } from "framer-motion"


const SkillsShowComponents = ({ data }) => {
    const variants = {
        initial: {
            y: -50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            // boxShadow: '1px 1px 2px gray',
            transition: {
                duration: .4,
                damping: 30,
                stiffness: 120,
                staggerChildren: .5
            }
        }
    }
    console.log(data)
    return (
        <motion.div variants={variants} initial="initial" animate="animate" style={{ boxShadow: '5px 5px 5px gray' }} className='flex flex-col font-semibold  text-lg md:text-xl gap-4 p-2   bg-white text-black  w-full  justify-between'>
            <motion.div variants={variants} className='flex items gap-2  '>
                <p className='flex items-center gap-2 md:text-4xl'>Language: <span className="font-normal">{data.name}</span>
                    {data.icon}
                </p>
            </motion.div>
            <motion.div variants={variants} className='flex items-center font-bold gap-2'>
                <p className="flex text-lg md:text-xl gap-3 items-center w-full"> Skill:
                    <input className=' w-full' type="range" min={0} value={data?.skillValue} max={100} />
                    <span>{data.skillPercentage
                    }</span>
                </p>
            </motion.div>
            <motion.div variants={variants} className='  font-bold text-lg' >Exp: <span className='font-bold'>{data.exp}</span></motion.div>
        </motion.div>
    )
}

export default SkillsShowComponents
