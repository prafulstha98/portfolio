const ServiceBox = ({ title, body }) => {
    return (
        <div
            style={{ boxShadow: "2px 2px 5px blue" }}
            className="p-3 h-full bg-slate-50 text-slate-950 border-white shadow-lg m-1 rounded-lg sm:w-full md:w-[45%]">
            <div className="box flex  flex-col gap-1 justify-between p-3 ">
                <h2 style={{ textShadow: "2px 2px 3px purple" }} className="text-lg uppercase text-center font-bold border border-t-0 border-l-0 border-r-0 tracking-wide border-b-blue-500">{title}</h2>
                <p className="p-1 font-bold rounded-lg  text-slate-800 shadow-lg tracking-tighter">{body}</p>
            </div>

        </div>
    )
}

export default ServiceBox
