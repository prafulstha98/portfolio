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
            <div className="progress sticky top-0 left-0 z-10  md:pt-10 text-center text-2xl pt-[calc(100vh-60px)]   md:text-4xl text-white font-semibold md:text-orange-500 ">
                <h1 className=" mb-2">Featured Works</h1>
                <motion.div style={{ scaleX }} className="progress-bar  bg-white h-1 md:h-2 rounded-lg"></motion.div>
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
