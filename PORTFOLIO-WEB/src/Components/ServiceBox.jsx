
const ServiceBox = ({ title, body }) => {



    return (
        <div className="p-3 border-2 border-white shadow-lg m-1 rounded-lg sm:w-full md:w-1/4">
            <div className="box flex flex-col gap-1 justify-between p-3 ">
                <h2 className="text-lg uppercase text-center font-bold border border-t-0 border-l-0 border-r-0 border-b-blue-500">{title}</h2>
                <p className="p-1 font-bold rounded-lg h-52 text-blue-400 shadow-lg tracking-tighter">{body}</p>
            </div>

        </div>
    )
}

export default ServiceBox
