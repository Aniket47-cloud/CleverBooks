import React, { useRef, useEffect, useState } from 'react';
import './Section3.css';

const Section3 = () => {
  const containerRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([true, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const sectionHeight = 400; // Each section's height
      const newVisibleSections = [false, false, false];

      // Update visibility of sections based on scroll position
      for (let i = 0; i < newVisibleSections.length; i++) {
        if (scrollTop >= i * sectionHeight) {
          newVisibleSections[i] = true;
        }
      }

      setVisibleSections(newVisibleSections);

      // Change scroll thumb color based on current section
      const currentSectionIndex = Math.min(
        Math.floor(scrollTop / sectionHeight),
        newVisibleSections.length - 1
      );
      const currentSection = container.querySelectorAll('.sub-section')[currentSectionIndex];
      if (currentSection) {
        const color = currentSection.getAttribute('data-color');
        container.style.setProperty('--scroll-thumb-color', color);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <section className="bg-black p-10">
      <div className="scrollable-container  w-[1080px] mx-auto" ref={containerRef}>
        <div className={`sub-section ${visibleSections[0] ? 'visible' : 'hidden'} flex flex-col bg-black` } data-color="#3498db">
          <p className="text-white text-4xl"><span className="text-9xl font-bold bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text">85</span>%</p> 
          
          <p className="text-white text-3xl">
          Reduction in out-of-stock
          </p>
        </div>
        <div className={`sub-section ${visibleSections[1] ? 'visible' : 'hidden'} flex flex-col bg-black`} data-color="#e74c3c">
          <p className="text-white text-4xl">
            <span className="text-9xl font-bold bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text">25</span>days</p> 
          
          <p className="text-white text-3xl">
          Reduction in cash recovery time
          </p></div>
        <div className={`sub-section ${visibleSections[2] ? 'visible' : 'hidden'} flex flex-col bg-black`} data-color="#f1c40f">
          <p className="text-white text-4xl">
            <span className="text-9xl font-bold bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text">15</span>%</p> 
          
          <p className="text-white text-3xl">
          Growth in revenue
          </p></div>
      </div>

    </section>
    

  );
};

export default Section3;

