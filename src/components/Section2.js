import React from 'react'

const Section2 = () => {
    return (
        <section className="mt-[250px] mb-[150px]">
            <div className="mx-auto w-[1080px] flex flex-col justify-center items-center">
                <h1 className="text-5xl text-center font-bold">Four key questions answered by Crest</h1>
                <div className="flex items-center flex-row space-x-10 justify-between h-[250px] mt-[7.5rem] ">
                    <div className=" bg-purple-100 rounded-xl flex flex-col p-5 mx-auto w-[275px]  justify-center  " >
                        <img width="50px" src="/images/63f63ee54595853ca5e31682_what to orderr (1).svg" />
                        <div className="flex flex-col justify-center  mt-4">
                            <h1 className="text-2xl font-semibold">What To order</h1>
                            <p className="mt-4">Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>

                        </div>
                    </div>
                    <div className=" bg-purple-100 rounded-xl w-[275px] flex flex-col p-[1.40rem] w-[270px]  justify-center  ">
                        <img width="50px" src="/images/63bd0d2fab2e360025df922a_when to orderr.svg" />
                        <div className="flex flex-col justify-center  mt-4">
                            <h1 className="text-2xl font-semibold">When To order</h1>
                            <p className="mt-4">Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>

                        </div>

                    </div>
                    <div className=" bg-purple-100 rounded-xl  w-[275px] flex flex-col p-[1.65rem] w-[270px]  justify-center  ">
                        <img width="50px" src="/images/63bd0cc629ab7f2d8cb0a8bd_how much to stock.svg" />
                        <div className="flex flex-col justify-center  mt-4">
                            <h1 className="text-2xl font-semibold">How much to stock</h1>
                            <p className="mt-4">Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>

                        </div></div>
                    <div className=" bg-purple-100 rounded-xl w-[275px] flex flex-col p-[1.75rem] w-[270px]  justify-center  ">
                        <img width="50px" src="/images/63bd0c2c27cde81ffea6515b_where to placee.svg" />
                        <div className="flex flex-col justify-center  mt-4">
                            <h1 className="text-2xl font-semibold">Where to place</h1>
                            <p className="mt-4">Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Section2
