import React, { useState } from 'react';

const Carousel = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % 2);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
    };

    return (
        <section className="p-6 h-[500px] mt-[5rem]">
            <div className="container w-[1080px] mx-auto p-4 pt-6 mt-4 md:p-6 lg:p-12">
                <div className="flex relative">
                    <div
                        className={`first w-[1080px] mx-auto space-x-6 absolute flex justify-between items-center carousel-slide  top-[-1.30rem] left-0  h-full transition duration-500 ease-in-out ${slide === 0 ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="w-[70%]">
                            <p className="text-lg">
                            D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
                            </p>
                            <div className="flex mt-6 justify-between">
                                <div className="flex space-x-4 w-[50%]">
                                    <img src="/images/651c00235cd9c2cd10fb1976_Samosa Party Client Image.webp" className="rounded-full h-[70px]" />
                                    <div>
                                        <div>Diksha Pande</div>
                                        <div>Co-founder,Samosa Party</div>
                                    </div>
                                </div>
                                <img width="170px" src="/images/64abd73c0bc5eae6cf1aa65e_samosa party logo.svg" />
                            </div>
                        </div>
                        <div className="w-[30%] p-8 mt-8 ml-9">
                            <img className=" mt-[12rem] w-[500px] rounded-xl h-[500px]"  src="/images/664ddc11c29c3652662f0739_samosa party image.webp" />
                        </div>
                    </div>
                    <div
                        className={`  w-[1080px] mx-auto space-x-6 absolute flex justify-between items-center carousel-slide  top-0 left-0  h-full transition duration-500 ease-in-out ${slide === 1 ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="w-[70%]">
                            <p className="text-lg">
                                As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.
                                While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.
                            </p>
                            <div className="flex mt-6 justify-between">
                                <div className="flex space-x-4 w-[50%]">
                                    <img src="/images/664ddd1080709540ff764308_P-Tal founder.jpg" className="rounded-full h-[70px]" />
                                    <div>
                                        <div>Kirti Goel</div>
                                        <div>Co-founder,P-TAL</div>
                                    </div>
                                </div>
                                <img width="70px" src="/images/65bcd77cae6da5aab64f973a_P-TAL.svg" />
                            </div>
                        </div>
                        <div className="w-[30%] p-8 mt-8 ml-9">
                            <img  className="rounded-xl w-[500px] h-[500px] mt-[12rem]"  src="/images/664c90f75b0f0e735016706b_P-tal-p-500.webp" />
                        </div>
                    </div>
                    <div className="flex mt-1 gap-4 absolute bottom-[-10rem] left-[-28rem] w-full justify-center">
                        <button onClick={prevSlide}>
                            <img src="/images/639b3e775b326d5122ea3ebb_slider-arrow (1).svg" className="rotate-180" />
                        </button>
                        <button onClick={nextSlide}>
                            <img src="/images/639b3e775b326d5122ea3ebb_slider-arrow.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;