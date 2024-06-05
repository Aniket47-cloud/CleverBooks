import React, { useRef, useEffect, useState } from 'react';
import './Section7.css';

const Section7 = () => {
  const containerRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([true, false, false]);
  const [scrollThumbIcon, setScrollThumbIcon] = useState('icon-stockout');

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight / 3; // Each section's height
      const newVisibleSections = [false, false, false];

      // Update visibility of sections based on scroll position
      for (let i = 0; i < newVisibleSections.length; i++) {
        if (scrollTop >= i * sectionHeight) {
          newVisibleSections[i] = true;
        }
      }

      setVisibleSections(newVisibleSections);

      // Change scroll thumb icon based on current section
      const currentSectionIndex = Math.min(
        Math.floor(scrollTop / sectionHeight),
        newVisibleSections.length - 1
      );
      const currentSection = container.querySelectorAll('.sub-section')[currentSectionIndex];
      if (currentSection) {
        const icon = currentSection.getAttribute('data-icon');
        setScrollThumbIcon(icon);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <section className="bg-black p-10">
      <div
        className="scrollable-container w-[1080px] mx-auto overflow-y-auto"
        ref={containerRef}
      >
        <div
          className={`sub-section ${visibleSections[0]? 'visible' : 'hidden'} flex flex-col bg-black`}
          data-color="#3498db"
          data-icon="icon-stockout"
        >
          <p className="text-white text-4xl">
            <span className="text-9xl font-bold bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text">
              85
            </span>
            %
          </p>
          <p className="text-white text-3xl">
            Reduction in out-of-stock
          </p>
        </div>
        <div
          className={`sub-section ${visibleSections[1]? 'visible' : 'hidden'} flex flex-col bg-black`}
          data-color="#e74c3c"
          data-icon="icon-cash"
        >
          <p className="text-white text-4xl">
            <span className="text-9xl font-bold bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text">
              25
            </span>
            days
          </p>
          <p className="text-white text-3xl">
            Reduction in cash recovery time
          </p>
        </div>
        <div
          className={`sub-section ${visibleSections[2]? 'visible' : 'hidden'} flex flex-col bg-black`}
          data-color="#f1c40f"
          data-icon="icon-revenue"
        >
          <p className="text-white text-4xl">
            <span className="text-9xl font-bold bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text">
              15
            </span>
            %
          </p>
          <p className="text-white text-3xl">
            Growth in revenue
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section7;