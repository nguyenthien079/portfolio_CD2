import { useEffect } from 'react';

function useScrollAnimation() {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
}

export default useScrollAnimation;