const Contacts = () => {
    return (
        <div className="contact  h-full max-w-6xl m-auto flex flex-col md:flex-row items-center  gap-10">
            <div className="textContainer flex flex-col gap-8 flex-1">
                <h1 className="text-7xl leading-[90px] font-bold">Lets Work Together</h1>
                <div className="item">
                    <h1 className="font-semibold"> Mail:</h1>
                    <span className="font-light">pralhadrana123@gmail.com</span>
                </div>
                <div className="item">
                    <h1 className="font-semibold">Address:</h1>
                    <span className="font-light">Kathmandu, Nepal</span>
                </div>
                {/* <div className="item">
                    <h1>Phone</h1>
                    <span>+977 9860938293</span>
                </div> */}
            </div>
            <div className="formContainer flex-1" >
                <form className="flex flex-col gap-2 ">
                    <input className="py-3 px-6 bg-transparent text-white border border-white rounded-lg" type="text" required placeholder="Name" />
                    <input className="py-3 px-6 bg-transparent text-white border border-white rounded-lg" type="email" required placeholder="Email" />
                    <textarea className="py-3 px-6 bg-transparent text-white border border-white rounded-lg" rows="8" placeholder="Message"></textarea>
                    <button className="bg-orange-500 py-2 px-6 rounded-sm font-semibold">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts
