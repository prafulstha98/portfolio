
const TagComponent = ({ title }) => {
    return (
        <div style={{ boxShadow: "inset 2px 2px 10px black " }} className='sticky bg-slate-300 text-slate-800 z-10 top-0 left-0'>
            <h2 style={{ textShadow: '2px 2px 10px black' }} className="text-center text-4xl md:text-5xl uppercase font-semibold p-2">&lt;{title} /&gt;</h2>
        </div>
    )
}

export default TagComponent
