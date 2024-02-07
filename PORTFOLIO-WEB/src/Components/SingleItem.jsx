import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useScroll, motion, useTransform, transform } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
const SingleItem = ({ projectItems }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    const opacity = useTransform(scrollYProgress, [.5, 0], [1, 0]);

    return (
        <section >
            <div className="overflow-hidden flex items-center h-full w-full justify-center">
                <div className="max-w-6xl h-full m-auto items-center justify-center flex-col md:flex-row flex gap-10">
                    <motion.div style={{ opacity }} ref={ref} className="flex-1 h-1/2 hover:rounded-lg overflow-hidden ">
                        <img src={projectItems.img} className="h-full transition-all delay-75 end-auto  hover:scale-110 w-full object-cover" alt="Project Image" />
                    </motion.div>
                    <motion.div style={{ y }} className="textContainer flex flex-col gap-6 flex-1">
                        <h1 style={{ textShadow: "4px 5px 5px blue" }} className="text-4xl font-bold text-white " >{projectItems.title}</h1>
                        <p className="text-gray-500 text-lg">{projectItems.description}</p>
                        <div className="flex  items-center gap-4">
                            <Link to={projectItems.github} target="_blank" className="flex items-center gap-2 bg-orange-600 hover:bg-transparent border border-orange-600 hover:border-white hover:text-blue-300 transition-all delay-75 ease-linear py-2 px-6 rounded-lg  font-semibold">
                                Github
                                <FaGithub className="h-5 w-5" />
                            </Link>
                            <Link to={projectItems.live} target="_blank" className="flex items-center gap-2 border-white border py-2 px-6 rounded-lg hover:bg-blue-600 hover:border-blue-600  transition-all delay-75 ease-linear font-semibold">Live
                                <CiGlobe className="h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}
export default SingleItem