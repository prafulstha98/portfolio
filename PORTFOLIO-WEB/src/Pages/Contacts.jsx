import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import TagComponent from '../Components/TagComponent';
const Contacts = () => {
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t9jsg8g', 'template_mmiboq1', formRef.current, {
                publicKey: 'ZVBrgt3HshvDQpVjO',
            })

            .then(
                () => {
                    setSuccess(true)
                    formRef.current.reset();
                },
                () => {
                    setError(true)
                },
            );
    };

    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: .2
            }
        },
    }
    const leftVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                // delay: 4,
                staggerChildren: .1
            }
        },
    }


    setTimeout(() => {
        setError(false)
        setSuccess(false)
    }, 2000);
    return (
        <div className=' flex flex-col min-h-screen gap-2 '>
            <TagComponent title='Contact' />
            <motion.div variants={variants} initial="initial" whileInView="animate" className="contact p-16  w-full md:max-w-6xl   m-auto flex flex-col md:flex-row items-center  gap-10">
                <motion.div variants={variants} className="textContainer flex flex-col gap-4 text-center items-center  md:items-start md:text-left mt-20 md:mt-0 md:gap-8 flex-1">
                    <h1 className="text-3xl md:text-7xl md:leading-[90px] font-bold">Lets Work Together</h1>
                    <motion.div variants={leftVariants} className="item">
                        <motion.h1 variants={leftVariants} className="font-semibold"> Mail:</motion.h1>
                        <span className="font-light">prafulshrestha57@gmail.com</span>
                    </motion.div>
                    <motion.div variants={leftVariants} className="item">
                        <motion.h1 variants={leftVariants} className="font-semibold">Address:</motion.h1>
                        <span className="font-light">Kathmandu, Nepal</span>
                    </motion.div>
                    {/* <motion.div variants={variants} className="item">
                    <h1>Phone</h1>
                    <span>+977 9860938293</span>
                </motion.div> */}

                </motion.div>
                <div className="formContainer  w-[90vw] p-10 md:p-0  relative stroke-blue-500 flex-1" >
                    <motion.form ref={formRef} variants={variants} onSubmit={sendEmail} className="flex  flex-col gap-2 ">
                        <input className=" py-1.5  md:py-3 px-6 bg-transparent text-white border border-white rounded-lg" type="text" required placeholder="Name" name='name' />
                        <input className=" py-1.5  md:py-3 px-6 bg-transparent text-white border border-white rounded-lg" type="email" required placeholder="Email" name="email" />
                        <textarea className=" py-1.5  md:py-3 px-6 bg-transparent text-white border border-white rounded-lg" rows="8" placeholder="Message" name="message"></textarea>
                        <button type='submit' className="bg-orange-500  transition-all delay-200 ease-in-out py-1 md:py-2 px-6 rounded-lg text-lg hover:bg-white hover:text-black font-semibold">Submit</button>

                        <p className={`text-center font-lg h-4 ${error ? 'text-red-800' : 'text-green-700'}`}>
                            {error && 'Error while sending the mail...!!!'}
                            {success && 'Mail send successfully...!!!'}
                        </p>
                    </motion.form>
                </div >
            </motion.div >
        </div>

    )
}

export default Contacts
