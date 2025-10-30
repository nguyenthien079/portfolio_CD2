import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Calculate scroll progress
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
    setProgress(scrollPercent);
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && 
        <div className="scroll-progress">
          <div 
            className="progress-bar" 
            style={{width: `${progress}%`}}
          ></div>
          <button 
            onClick={scrollToTop}
            className="scroll-to-top"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      }
    </>
  );
}

export default ScrollProgress;