import React, { useState } from 'react'
import LoginForm from './LonginPop'
import "./Section6.css"
const Section6 = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const openLoginForm = () => {
        setScrollPosition(window.scrollY); // Store the current scroll position
        window.scrollTo({ top: 0 }); // Scroll to top
        setIsLoginOpen(true);
      };
      const closeLoginForm = () => {
        setIsLoginOpen(false);
        window.scrollTo({ top: scrollPosition }); // Scroll back to the stored position
      };
  

  return (
    <section className="bg-black">
        <div className="w-full p-6 ">
            <div className=" gradient-background w-[1080px] mx-auto bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% flex flex-col justify-center items-center  mt-[6rem] p-[5rem] px-[2rem] mb-[2rem]   rounded-xl">
                <h1 className="text-5xl text-white font-semibold mt-4">You can grow faster than you think!</h1>
                <p className="w-[75%] mt-[4rem] text-white">
                Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
                </p>
                <button onClick={openLoginForm} className="rounded-full bg-black text-white p-3 px-4 py-3 mt-[2rem] flex justify-center items-center ">Get started with crest</button>
            </div>
        </div>
        <LoginForm isOpen={isLoginOpen} onClose={closeLoginForm} />
      
    </section>
  )
}

export default Section6
