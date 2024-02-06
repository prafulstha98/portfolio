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
        <div className="portfolio relative" ref={ref}>
            <div className="progress sticky top-0 left-0 p-10 text-center text-orange-500 text-3xl">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progress-bar  bg-white h-2 rounded-lg"></motion.div>
            </div>

            {
                projectItems?.map((items) => (
                    <SingleItem key={items.title} projectItems={items} />
                ))
            }
            projects compponents
        </div>
    )
}

export default Projects
