import React, { useCallback, useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else if (window.scrollY < 180) {
        setIsScrolled(false);
      }
    });
  });

  return (
    <>
      <button
        className="fixed bottom-0 right-0 m-4 p-2 bg-transparent border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-500 rounded-full focus:outline-none"
        onClick={handleScroll}
        style={{
          display: isScrolled ? 'inline' : 'none',
        }}
      >
        Scroll
      </button>
    </>
  );
};

export default ScrollToTop;
