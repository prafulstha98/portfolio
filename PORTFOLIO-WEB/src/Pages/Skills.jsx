import Svg from '../Components/Svg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAdobeaftereffects } from "react-icons/si";
const Skills = () => {
    const professionallSkills = [
        {
            name: 'Html',
            icon: <FaHtml5 />,
            skillValue: 80,
            skillPercentage: '80%',
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
            skillValue: 70,
            skillPercentage: '70%',
            exp: '+3yrs'
        },
        {
            name: 'React',
            icon: <FaReact />,
            skillValue: 80,
            skillPercentage: '80%',
            exp: '+1yrs'
        },
        {
            name: 'Node',
            icon: <FaNodeJs />,
            skillValue: 70,
            skillPercentage: '70%',
            exp: '+1yrs'
        },
        {
            name: 'MongoDb',
            icon: <DiMongodb />,
            skillValue: 60,
            skillPercentage: '60%',
            exp: '+9mnth'
        },
    ]

    return (
        <div className="flex flex-col md:flex-row  justify-between items-center p-2" >
            <div className='flex order-2 md:order-1 gap-2 flex-col md:w-full  p-4 items-center'>
                <h1 className='text-3xl font-semibold underline underline-offset-4'>Professional Skills</h1>

                {
                    professionallSkills?.map((skill) => (
                        <div key={skill.name} className='flex items-center p-2 border-2 border-blue-500 w-full  justify-between'>
                            <div className='flex items-center gap-2 w-20  md:w-40 '>
                                <p className='font-semibold text-xs md:text-xl'>{skill.name}</p>
                                {/* <FaHtml5 className='h-7 w-7' /> */}
                                {skill.icon}
                            </div>
                            <div className='flex items-center  gap-2'>
                                <input className='w-10 md:w-full' type="range" min={0} value={skill.skillValue} max={100} />
                                <span>{skill.skillPercentage}</span>
                            </div>
                            <div className='w-20 md:w-32 font-bold text-sm md:text-lg' >Exp: <span className='font-normal'>{skill.exp}</span></div>
                        </div>
                    ))
                }


            </div>
            <div className='md:w-[70%] px-20 h-full w-full order-1 md:order-2 md:h-[60%]' >
                <Svg />
            </div>
        </div>
    )
}

export default Skills
