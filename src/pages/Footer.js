import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black  text-white ">
            <div className="flex  mx-auto w-[1080px] h-full gap-11 justify-between  ">
                <div className="flex mt-6 flex-col w-[700px] p-4 ">
                    <div>
                        <img width="300px" src="/images/63d8262cbfe9e806aca29403_Crest white font small.png"></img>
                        <p className="mt-9 text-gray-400 hover:text-white cursor-pointer">Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>

                    </div>
                    <div className="mt-[7rem]">
                        <div className="flex w-[400px] gap-4">
                            <p>Copyright 2024 Crest</p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition-all duration-200">Terms of Service</p>
                            <p className="text-gray-400 hover:text-white cursor-pointer transition-all duration-200">Privacy Policy</p>
                        </div>
                        <div className="mt-2">
                            Conifer Innovations Private Limited <br />
                            CIN: U72900KA2022PTC163144
                        </div>

                    </div>

                </div>
                <div className="flex">
                    <div className="flex gap-4 mt-6 w-[300px] ml-7">
                        <div className="flex w-[165px] flex-col gap-y-4">
                            <p className="text-lg">Explore</p>
                            <ul className="flex flex-col gap-y-4">
                                <li className="text-gray-400 hover:text-white cursor-pointer">Product</li>
                                <li className="text-gray-400 hover:text-white cursor-pointer">Pricing</li>
                                <li className="text-gray-400 hover:text-white cursor-pointer">Customer Stories</li>
                                <li className="text-gray-400 hover:text-white cursor-pointer">Career</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-[130px] gap-y-4">
                            <p className="text-lg">Learn</p>
                            <ul className="flex flex-col gap-y-4">
                                <li className="text-gray-400 hover:text-white cursor-pointer">About Us</li>
                                <li className="text-gray-400 hover:text-white cursor-pointer"> Blog</li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex flex-col gap-y-5 mt-6 ml-9">
                        <p className="text-lg">Contact Crest</p>
                        <p className="text-gray-400 hover:text-white cursor-pointer">sales@getcrest.ai</p>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Registered Office:
                            1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Corporate Office:
                            291, All Time Space, 4th Floor,
                            15th A Cross, Sector - 6,
                            HSR Layout, Bengaluru,
                            India. 560102</p>



                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer
