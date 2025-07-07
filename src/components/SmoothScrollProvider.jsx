// src/components/SmoothScrollProvider.jsx
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      class: 'is-reveal',
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main-scroll" ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollProvider;
