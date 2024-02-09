import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const SingleItem = ({ projectItems }) => {

    const variants = {
        initial: {
            x: -300,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                stiffness: 120,
                damping: 40
            }
        }
    }
    return (
        <section className="h-auto md:h-[100vh]  " >
            <div className="overflow-hidden  h-full w-full">
                <motion.div variants={variants} initial="initial"
                    whileInView="animate" className="max-w-6xl h-full p-6 md:p-10 m-auto items-center md:items-center justify-center flex-col md:flex-row flex md:gap-10">
                    <motion.div
                        variants={variants}
                        className="flex-1 w-full max-h-80 md:h-1/2 hover:rounded-lg overflow-hidden ">
                        <img src={projectItems.img} className="h-full  transition-all delay-75 end-auto  hover:scale-110 w-full object-contain md:object-cover" alt="Project Image" />
                    </motion.div>
                    <motion.div
                        variants={variants}
                        className="textContainer max-sm:!transform-none items-center md:items-start flex flex-col gap-4 md:gap-6 flex-1">
                        <h1 style={{ textShadow: "4px 5px 5px blue" }} className="text-2xl md:text-4xl font-bold text-white " >{projectItems.title}</h1>
                        <p className="text-gray-500 text-xs md:text-lg">{projectItems.description}</p>
                        <div className="flex  items-center gap-4">
                            <Link to={projectItems.github} target="_blank" className="flex items-center gap-2 bg-orange-600 hover:bg-transparent border border-orange-600 hover:border-white hover:text-blue-300 transition-all delay-75 ease-linear py-1 md:py-2 px-6 rounded-lg  font-semibold">
                                Github
                                <FaGithub className="h-5 w-5" />
                            </Link>
                            <Link to={projectItems.live} target="_blank" className="flex items-center gap-2 border-white border  py-1 md:py-2 px-6 rounded-lg hover:bg-blue-600 hover:border-blue-600  transition-all delay-75 ease-linear font-semibold">Live
                                <CiGlobe className="h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
export default SingleItem