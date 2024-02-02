import { motion } from 'framer-motion'
import people from '../assets/people.webp'
import ServiceBox from '../Components/ServiceBox'
import { topics } from '../constants'
const Services = () => {

    return (
        <motion.div style={{ background: 'linear-gradient(180deg,#0c0c1d,#111132)' }} className='h-full flex p-2  flex-col justify-between' >
            <motion.div className="textcontainer self-end flex items-center gap-5">

                <motion.p className='font-extralight text-xl text-right text-gray-500' >I focus on helping your brand grow <br /> and move forward</motion.p>
                <hr className='w-[500px] border border-t-gray' />
            </motion.div>

            <motion.div
                className="titleCOntainer flex flex-col gap-5 items-center  ">
                <div className="title flex gap-5 items-center ">
                    <img src={people} className='rounded-[50px] h-20 w-72 object-cover' alt="title" />
                    <h1 className='text-7xl font-extralight'>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className="title flex gap-5 items-center">
                    <h1 className='text-6xl font-extralight'>
                        <b>For Your</b> Business.
                    </h1>
                    <button className=' py-4 px-6 rounded-xl border-2 shadow-lg hover:bg-blue-900 transition-all delay-300 ease-out  border-blue-900 font-semibold text-xl bg-transparent uppercase'>what I do</button>
                </div>
            </motion.div>
            <motion.div className="listcontainer flex-col md:flex-row  border-2 border-gray-700 flex">
                {
                    topics?.map((topic) => (
                        <ServiceBox key={topic.title} title={topic.title} body={topic.body} />
                    ))
                }

            </motion.div>
        </motion.div>
    )
}

export default Services
