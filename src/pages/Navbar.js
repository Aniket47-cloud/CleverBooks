import React from 'react'

const Navbar = () => {
    return (

        <nav className="bg-black p-3">
            <div className="w-[1080px] mx-auto flex justify-between items-center">
                <div>
                    <a href="/">
                        <img src="images/63d8262cbfe9e806aca29403_Crest white font small.png" alt="" width="150px" />
                    </a>

                </div>
                <div>
                    <ul className="text-white flex justify-between gap-5">
                        <li className="hover:text-[#fc907e] transition-all duration-200 cursor-pointer">Product</li>
                        <li className="hover:text-[#fc907e] transition-all duration-200 cursor-pointer">Pricing</li>
                        <li className="hover:text-[#fc907e] transition-all duration-200 cursor-pointer">Industry</li>
                        <li className="hover:text-[#fc907e]  transition-all duration-200 cursor-pointer">About</li>
                        <li className="hover:text-[#fc907e]  transition-all duration-200 cursor-pointer">Customer Stories</li>
                        <li className="hover:text-[#fc907e] transition-all duration-200 cursor-pointer">Blog</li>


                    </ul>

                </div>


                <div className="text-white flex justify-center items-center gap-4">
                    <p className="bg-gradient-to-r from-orange-300 from 65% to-purple-500 to 100% text-transparent inline-block bg-clip-text cursor-pointer hover:text-white transition-all duration-200">Login</p>
                    <div className="rounded-full cursor-pointer p-4 hover:bg-gradient-to-r from-purple-500 from 65% to-orange-300 to 100% ">
                        <button className=" rounded-full p-2 px-2 bg-gradient-to-r from-orange-300 from 65% to-purple-500 to 100% hover:text-black transition-all duration-200">Talk to Us</button>
                    </div>
                </div>


            </div>
        </nav>

    )
}

export default Navbar
