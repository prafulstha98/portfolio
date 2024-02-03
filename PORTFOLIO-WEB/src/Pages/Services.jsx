import { motion, useInView } from 'framer-motion'
import people from '../assets/people.webp'
import ServiceBox from '../Components/ServiceBox'
import { topics } from '../constants'
import { useRef } from 'react'
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
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
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .5,
                stiffness: 110,
                damping: 20,
                staggerChildren: .2
            }
        },
        hover: {
            background: 'white',
            color: 'black',
            opacity: .6,
            boxShadow: "inset 5px 5px 10px rgba(255, 0, 0, 0.8), inset -5px -5px 10px rgba(0, 0, 255, 0.8), inset 5px -5px 10px rgba(0, 255, 0, 0.8), inset -5px 5px 10px rgba(255, 255, 0, 0.8)",
            transition: {
                duration: 1,
            }
        }
    }
    return (
        <motion.div
            variants={variants} initial="initial"
            animate={isInView && "animate"}
            whileInView={"animate"}
            ref={ref}
            style={{ background: 'linear-gradient(180deg,#0c0c1d,#111132)' }} className='h-full flex p-2  flex-col justify-between' >
            <motion.div className="textcontainer self-end flex items-center gap-5">

                <motion.p className='font-extralight text-xl text-right text-gray-500' >I focus on helping your brand grow <br /> and move forward</motion.p>
                <hr className='w-[500px] border border-t-gray' />
            </motion.div>

            <motion.div
                variants={variants}
                className="titleCOntainer flex flex-col gap-5 items-center  ">
                <div className="title flex gap-5 items-center ">
                    <img src={people} className='rounded-[50px] h-20 w-72 object-cover' alt="title" />
                    <h1 className='text-7xl font-extralight'>
                        <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title flex gap-5 items-center">
                    <h1 className='text-6xl font-extralight'>
                        <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.
                    </h1>
                    <button className=' py-4 px-6 rounded-xl border-2 shadow-lg hover:bg-blue-900 transition-all delay-300 ease-out  border-blue-900 font-semibold text-xl bg-transparent uppercase'>what I do</button>
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                className="listcontainer flex-col md:flex-row  flex">
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
