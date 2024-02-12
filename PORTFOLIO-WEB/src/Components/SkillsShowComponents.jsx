import { motion } from "framer-motion"


const SkillsShowComponents = ({ data = {} }) => {
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
        },
    }
    const imageVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .3,
                damping: 50,
                stiffness: 150,
                staggerChildren: .5
            }
        }
    }
    return (
        <motion.div variants={variants} initial="initial" animate="animate" style={{ boxShadow: '5px 5px 5px purple' }} className='flex flex-col font-semibold  text-lg md:text-xl gap-4 p-2   bg-white text-black  w-full  justify-between'>
            <motion.div variants={variants} className='flex  gap-2  '>
                <p className='flex items-center justify-center w-full gap-2 md:text-4xl'>Language: <span className="font-normal">{data.name}</span>
                    {data.icon}
                </p>
            </motion.div>
            <div className="flex flex-col md:flex-row gap-2 p-5 justify-between ">
                <div className=" px-3 md:w-1/2">
                    <motion.div variants={variants} className='flex items-center font-bold gap-2'>
                        <p className="flex text-lg md:text-xl gap-3 items-center w-full"> Skill:
                            <input className=' w-full' type="range" min={0} value={data?.skillValue} max={100} />
                            <span>{data.skillPercentage
                            }</span>
                        </p>
                    </motion.div>
                    <motion.div variants={variants} className='  font-bold text-lg' >Exp: <span className='font-bold'>{data.exp}</span></motion.div>
                </div>

                <div className="border-2 border-purple-700   rounded-xl overflow-hidden flex">
                    <motion.img variants={imageVariants} className="w-[360px]  object-contain" src={data.image} alt="skill" />
                </div>
            </div>

        </motion.div>
    )
}

export default SkillsShowComponents
