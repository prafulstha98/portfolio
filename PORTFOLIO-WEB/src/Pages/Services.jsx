import { motion } from 'framer-motion'
import people from '../assets/people.webp'
import ServiceBox from '../Components/ServiceBox'
import { topics } from '../constants'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
const Services = () => {
    const ref = useRef()
    const variants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 1
            }
        }
    }
    const boxVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .5,
                stiffness: 110,
                damping: 20,
                staggerChildren: .1
            }
        }
    }
    return (
        <motion.div
            variants={variants} initial="initial"
            animate={"animate"}
            whileInView={"animate"}
            ref={ref}
            style={{ background: 'linear-gradient(180deg,#0c0c1d,#111132)' }} className=' flex p-2  flex-col justify-between ' >
            <motion.div className="textcontainer w-full md:w-auto self-center flex-col md:flex-row text-center md:self-end flex items-center gap-5">
                <motion.p className='font-extralight text-base md:text-xl text-right text-gray-500' >I focus on helping your brand grow <br /> and move forward</motion.p>
                <hr className='md:w-[500px] w-[300px] border border-t-gray  mb-2 md:mb-0' />
            </motion.div>

            <motion.div
                variants={variants}
                className="titleCOntainer flex flex-col gap-5 items-center  ">
                <div className="title flex-col md:flex-row gap-1 flex text-center md:gap-5 items-center ">
                    <img src={people} className='rounded-[50px] h-12 md:h-20 w-72 object-cover' alt="title" />
                    <h1 className='text-4xl md:text-7xl font-extralight'>
                        <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title flex  gap-5 items-center">
                    <h1 className=' text-2xl md:text-6xl font-extralight'>
                        <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.
                    </h1>
                    <Link to='/#projects' className='py-2 md:py-4 px-6 md:px-6 rounded-xl border-2 shadow-lg hover:bg-blue-900 transition-all delay-300 ease-out  border-blue-900 font-semibold text-nowrap text-sm md:text-xl bg-transparent uppercase'>what I did</Link>
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                className="listcontainer flex-wrap gap-4 p-5 items-center justify-around flex-col md:flex-row  flex">
                {
                    topics?.map((topic) => (
                        <ServiceBox key={topic.title} variants={boxVariants} title={topic.title} body={topic.body} />
                    ))
                }

            </motion.div>
        </motion.div>
    )
}

export default Services
