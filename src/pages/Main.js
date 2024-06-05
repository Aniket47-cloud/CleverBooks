import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'

import Section6 from '../components/Section6'
import Carousel from '../components/Carousel'


const Main = ({openLoginForm, closeLoginForm ,isLoginOpen,setIsLoginOpen}) => {
  
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Carousel/>
     
      <Section6 openLoginForm={openLoginForm} closeLoginForm={closeLoginForm} isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen}/>
     
     
    </div>
  )
}

export default Main
