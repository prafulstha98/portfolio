import Svg from '../Components/Svg'
import { NavLink, Route, Routes } from 'react-router-dom'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { useState } from 'react';
import SkillsShowComponents from '../Components/SkillsShowComponents';
import { AnimatePresence, motion } from 'framer-motion';

const Skills = () => {
    const [skillsRoute, setSkillsRoute] = useState('');

    const professionallSkills = [
        {
            name: 'Html',
            icon: <FaHtml5 />,
            skillValue: 90,
            skillPercentage: '90%',
            exp: '+2yrs'
        },
        {
            name: 'Css',
            icon: <FaCss3 />,
            skillValue: 90,
            skillPercentage: '90%',
            exp: '+2yrs'
        },
        {
            name: 'JavaScript',
            icon: <TbBrandJavascript />,
            skillValue: 80,
            skillPercentage: '80%',
            exp: '+3yrs'
        },
        {
            name: 'React',
            icon: <FaReact />,
            skillValue: 60,
            skillPercentage: '60%',
            exp: '+1yrs'
        },
        {
            name: 'Node',
            icon: <FaNodeJs />,
            skillValue: 70,
            skillPercentage: '70%',
            exp: '+1.5yrs'
        },
        {
            name: 'MongoDb',
            icon: <DiMongodb />,
            skillValue: 60,
            skillPercentage: '60%',
            exp: '+9mnth'
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between p-2">
            <div className='flex order-2 md:order-1 gap-2 flex-col md:w-full p-4 items-center'>
                <h1 className='text-3xl font-semibold underline underline-offset-4'>Professional Skills</h1>
                <div className='md:border-2 border-t-transparent border-l-transparent border-r-transparent border-b-purple-600 p-3 w-full flex items-center  text-2xl md:text-5xl gap-5 flex-wrap'>
                    {professionallSkills?.map((skill) => (
                        <div key={skill.name} className='flex items-center  gap-2 '>
                            <div className='flex gap-1 flex-col items-center'>

                                <NavLink to={`/${skill.name.toLowerCase()}`} className={({ isActive }) => `${isActive ? 'text-purple-900' : ''}  flex flex-col items-center`} onClick={() => setSkillsRoute(skill.name)}>
                                    <span className='text-sm md:text-lg uppercase  text-center'>{skill.name}</span>
                                    {skill.icon}
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex w-full flex-col'>
                    <h1>Click to show</h1>
                    <AnimatePresence mode='wait'>
                        <Routes>
                            <Route
                                path={`/${skillsRoute}`}
                                element={
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <SkillsShowComponents
                                            key={skillsRoute}
                                            data={professionallSkills.find(
                                                (skill) =>
                                                    skill?.name.toLowerCase() === skillsRoute.toLowerCase()
                                            )}
                                        />
                                    </motion.div>
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
            <div className='md:w-[70%] px-20 h-full w-full order-1 overflow-hidden md:order-2 md:h-[60%]'>
                <Svg />
            </div>
        </div>
    );
}

export default Skills;
