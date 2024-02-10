
const TagComponent = ({ title }) => {
    return (
        <div className='sticky  bg-gradient-to-b from-[#0c0c1d] to-[#111132] pt-5 md:pt-0 top-0 left-0'>
            <h2 style={{ textShadow: '2px 2px 10px blue' }} className="text-center text-4xl md:text-5xl uppercase font-semibold p-2">&lt;{title} /&gt;</h2>
        </div>
    )
}

export default TagComponent
