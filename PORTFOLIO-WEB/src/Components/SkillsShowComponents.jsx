import { motion } from "framer-motion"
import { useState } from "react";
import { FaGithub, FaGitAlt, FaSass, FaPhp, FaJava } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandRedux, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

const SkillsShowComponents = ({ data = '' }) => {
    const [iconName, setIconName] = useState('Other Skills')
    const otherSkills = [
        { id: 1, icon: <FaGithub />, name: 'Github' },
        { id: 2, icon: <FaGitAlt />, name: 'Git' },
        { id: 3, icon: <FaSass />, name: 'Sass' },
        { id: 4, icon: <FaPhp />, name: 'Php' },
        { id: 5, icon: <FaJava />, name: 'Java' },
        { id: 6, icon: <SiTailwindcss />, name: 'Tailwind css' },
        { id: 7, icon: <TbBrandTypescript />, name: 'Typescript' },
        { id: 8, icon: <TbBrandRedux />, name: 'Redux Toolkit' },
        { id: 9, icon: <TbBrandNextjs />, name: 'Next js' }
    ];

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
                duration: .5,
                damping: 30,
                stiffness: 120,
                staggerChildren: .2
            }
        },
    }
    const skillVariant = {
        initial: {
            y: -50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            rotate: 360,
            transition: {
                duration: .5,
                damping: 30,
                stiffness: 120,
                staggerChildren: .2
            }
        }
    }

    console.log(data, 'data')
    if (!data) {
        return (
            <div className="text-center flex items-center md:text-3xl  ">
                <p className="text-purple-600 " >
                    Click on the icons to see my skills
                </p>
            </div>
        );
    }
    return (
        <motion.div variants={variants} initial="initial" animate="animate" style={{ boxShadow: '5px 5px 5px purple' }
        } className='flex flex-col font-semibold  text-lg md:text-xl gap-4 p-2   bg-white text-black  w-full  justify-between' >
            <motion.div variants={variants} className='flex  gap-2  '>
                <p className='flex items-center justify-center w-full gap-2 md:text-4xl'>Language: <span className="font-normal">{data.name}</span>
                    {data.icon}
                </p>
            </motion.div>
            <div className="flex flex-col md:flex-row gap-2 p-5 justify-between ">
                <div className="order-2 md:order-1 flex flex-col gap-5 md:px-3 md:w-1/2">
                    <motion.div variants={variants} className='flex items-center font-bold gap-2'>
                        <p className="flex text-lg md:text-xl gap-3 items-center w-full"> Skill:
                            <input className=' w-full' onChange={() => { }} type="range" min={0} value={data?.skillValue} max={100} />
                            <span>{data.skillPercentage
                            }</span>
                        </p>
                    </motion.div>
                    <motion.div variants={variants} className='  font-bold text-lg' >Exp: <span className='font-bold'>{data.exp}</span></motion.div>
                    <motion.div variants={variants} className="p-4  shadow-2xl flex flex-col items-center">
                        <h1 className="font-semibold md:text-3xl text-purple-800  ">{iconName}</h1>
                        <div className="flex p-2 text-2xl md:text-4xl flex-wrap items-center gap-5 ">
                            {
                                otherSkills?.map((icon) => (
                                    <motion.span variants={skillVariant} onClick={() => setIconName(icon.name)} className="border-2 p-2 hover:bg-purple-900 focus:bg-purple-900 hover:text-white rounded-full" key={icon.id}>{icon.icon}</motion.span>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>

                <div className="border-2 order-1 md:order-2 border-purple-700 md:w-[70%] md:h-1/2 rounded-xl overflow-hidden flex">
                    <motion.img variants={imageVariants} initial="initial" animate="animate" className="w-full  object-contain" src={data.image} alt="skill" />
                </div>
            </div>

        </motion.div >
    )
}

export default SkillsShowComponents
