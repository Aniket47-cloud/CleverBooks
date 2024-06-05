import React from 'react'
import "./Section1.css"

const Section1 = () => {
 
    return (
        <section className="bg-black flex justify-between">
            <img className="absolute right-0 -top-20 " src="/images/639b3e775b326d3e24ea3f00_homengg.svg" />


            <div className="w-[1080px]  flex  justify-between  items-center p-9  text-white">
                <div className="w-[68%] ml-[150px] flex flex-col mt-[90px] ">
                    <p className="text-6xl font-semibold ">

                        <p className="mb-3">Every order</p>
                        fulfilled, <span className="bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 90% inline-block text-transparent bg-clip-text ">on time.</span>

                    </p>
                    <p className="mt-6 py-2 w-[85%] text-lg leading-6">
                        Eliminate overstocking and under-stocking with Crest.
                        Built by supply-chain experts,
                        it brings the same technology used by large global brands to power fast-growing startups.
                        In short, we make supply meet demand, and then help you grow both.
                    </p>
                    <div className="flex mt-16 gap-4 w-[800px] ">
                        <div className="rounded-full px-1 py-3 w-[235px] h-[70px] flex justify-center items-center bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% hover:text-white  ">
                            <button   className="bg-black  mx-auto hover:bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 90% rounded-full  py-5 px-9 transition ease-in-out duration-200  ">
                                <span className="  bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text  ">
                                    Get started with Crest
                                </span>
                            </button>
                        </div>
                        <img src="images/img bleow nav in left side.svg" className="animate-bounce transition ease-in-out duration-1000" alt="" />
                    </div>

                </div>
                <div className="absolute right-0 py-6 mt-5  ">
                    <img className="mt-[60px] w-[590px] ml-[40px]" src="/images/639b3e775b326d648dea3f01_Hero Image.svg" alt='' />
                </div>


            </div>
            <div>
                <img className="absolute h-[55px]bottom-0 right-0 z-[-85] w-[1650px]" src="/images/639b3e775b326d7eb5ea3efb_home-hero-bg.svg" alt="" />
            </div>

        </section>
    )
}

export default Section1
