import { useRef } from "react"
import SingleItem from "../Components/SingleItem"
import { projectItems } from "../constants"
import { motion, useScroll, useSpring } from 'framer-motion'
const Projects = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio relative " id="projects" ref={ref}>
            {/* pt-[calc(100vh-100px)]  */}
            <div style={{ textShadow: '3px 3px 15px blue' }} className="progress sticky top-0 left-0 z-10  md:p-2 text-center text-2xl  md:text-4xl text-white font-semibold  bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden md:text-white ">
                <h1 style={{ textShadow: '3px 3px 10px blue' }} className="uppercase mb-2">&lt; Featured Works /&gt;</h1>
                <motion.div style={{ scaleX }} className="progress-bar  bg-slate-600 h-1 md:h-2 rounded-lg"></motion.div>
            </div>

            {
                projectItems?.map((items) => (
                    <SingleItem key={items.title} projectItems={items} />
                ))
            }
        </div>
    )
}

export default Projects
