import React, { useState } from 'react';
import './Section4.css';

const logos = [
    '/images/64abbb510685690c8d8b1bdc_rr cable.svg',
    '/images/64abd73c0bc5eae6cf1aa65e_samosa party logo.svg',
    '/images/65266958030e4b24786a6907_tahiliya.svg',
    '/images/65266958d1b6be6bd4e44c51_sylvi.svg',
    '/images/652673d679d1942e616b3675_everloom.svg',
    '/images/65bcd77c2b88fe75cb4e9e62_BLUE TRIBE.svg',
    '/images/65bcd77cae6da5aab64f973a_P-TAL.svg',
    '/images/65bcd77cdc92e571f2b995d1_bakers dozen.svg',
    '/images/662f471d9f187d3886afcf0c_swtantra.svg',
    '/images/662f471e19ebc9f547ee1453_the whole truth.svg',
    '/images/662f471ebeab55128d85b2a8_zavya.svg'

];

const Section4 = () => {
 
  
    return (
        <section>
            <div className="slider-container">
                <div className="slider">
                    {logos.map((logo, index) => (
                        <div className="slide" key={index}>
                            <img width="100px" src={logo} alt={`Logo ${index + 1}`} />
                        </div>
                    ))}
                    {logos.map((logo, index) => (
                        <div className="slide" key={`duplicate-${index}`}>
                            <img width="100px" src={logo} alt={`Logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
           
        </section>
    );
};

export default Section4;
