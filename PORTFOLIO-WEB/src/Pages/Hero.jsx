import bg from '../assets/bg.png'
import scroll from '../assets/scroll.png'
import { motion } from 'framer-motion'
const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 20,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <div className="h-full md:h-[82vh]   overflow-hidden relative bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
            <div className="max-w-6xl  mx-auto">
                <motion.div initial="initial" animate="animate" variants={textVariants} className="h-[400px] w-full md:w-1/2 flex font-semibold flex-col mt-2 md:mt-0 md:justify-center gap-2 md:gap-5 items-center md:items-start">
                    <motion.h1 variants={textVariants} className='text-4xl -tracking-tighter text-purple-800'>Prachanda Rana</motion.h1>
                    <motion.h1 variants={textVariants} className='text-xl md:text-7xl  '>Full Stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="flex gap-2 text-xs md:text-lg z-[99] items-center">
                        <motion.button variants={textVariants} className='p-3 border border-white rounded-lg text-white'>See the latest work</motion.button>
                        <motion.button variants={textVariants} className='p-3 border border-white rounded-lg text-white hover:bg-blue-900'>Contact me</motion.button>
                    </motion.div>
                    <motion.img animate="scrollButton" variants={textVariants} src={scroll} alt="scroll" width={50} />
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="absolute selection:bg-none bottom-10 text-[#ffffff09] w-1/2 font-bold text-[40vh] whitespace-nowrap">
                Coder , Developer , Programmer
            </motion.div>
            <div className="md:h-full absolute  bottom-16 right:96 md:-top-3  md:right-10 right-4  md:w-auto  w-[100%]   ">
                <img src={bg} alt="background" className='object-cover md:w-full md:h-full' />
            </div>
        </div >
    )
}

export default Hero
