import mountains from '../assets/mountains.png'
import planets from '../assets/planets.png'
import stars from '../assets/stars.png'
import { motion } from 'framer-motion'

const Parallax = ({ heading, gradient }) => {
    return (
        <div
            style={{
                background: `linear-gradient(180deg,#111132,${gradient})`
            }}
            className="w-full relative h-full flex items-center justify-center"
        >
            <h1 className="text-8xl">{heading}</h1>
            <div style={{ background: `url(${mountains}) no-repeat center/cover` }} className="mountains absolute h-full w-full  "></div>
            <div style={{ background: `url(${planets}) no-repeat center/cover` }} className="mountains absolute h-full w-full  "></div>
            <div style={{ background: `url(${stars}) no-repeat center/cover` }} className="mountains absolute h-full w-full  "></div>
        </div>
    )
}

export default Parallax
