const SkillsShowComponents = ({ data }) => {
    return (
        <div className='flex flex-col font-semibold  text-xs md:text-xl gap-4 p-2 border-2 border-blue-500 w-full  justify-between'>
            <div className='flex items gap-2  '>
                <p className=''>Language: <span>{data.name}</span></p>
                {data.icon}
            </div>
            <div className='flex items-center gap-2'>
                <p className="flex text-xs md:text-xl gap-3 items-center w-full"> Skill:
                    <input className='w-10 md:w-full' type="range" min={0} value={data?.skillValue} max={100} />
                    <span>{data.skillPercentage
                    }</span>
                </p>
            </div>
            <div className='w-20 md:w-32 font-bold text-sm md:text-lg' >Exp: <span className='font-normal'>{data.exp}</span></div>
        </div>
    )
}

export default SkillsShowComponents
