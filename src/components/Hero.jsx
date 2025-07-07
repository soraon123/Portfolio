import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const splineRef = useRef(null);
  const taglineRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60, 
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.from(paraRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(splineRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.4,
        delay: 0.2,
        ease: 'power2.out'

      });

      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7,
        ease: 'power2.out',
      })

      gsap.to(heroRef.current, {
        backgroundColor: '#121212',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main id='hero'  ref={heroRef} className='relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden'>
        {/* <img className='absolute top-0 right-0 opacity-60 -z-1' src="/gradient.png" alt="Gradient-png" />

      <div className='h-0 w-[40rem] absolute to-[20%] right-[-5%] shadow-[0_0_900px_20px_#A8DADC] -rotate-[30deg] -z-10'></div> */}


      <div className='max-w-xl ml-[5%] z-10 mt-12 sm:mt-14 md:mt-16 lg:mt-0'>
        <h1 ref={headingRef} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          Hello, <br />
          human!
        </h1>

        <div ref={splineRef}  className='block lg:hidden relative h-[300px] sm:h-[400px] w-full z-20 mb-6'>
          <Spline 
            className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto' 
            scene="https://prod.spline.design/9JAu31CGbpITEjbT/scene.splinecode" 
          />
        </div>

        <p ref={paraRef} className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'
>
  I'm — a Computer Science student passionate about data science, AI, and the art of building thoughtful digital experiences.
  <br />
  I explore creative development through tools like Spline and GSAP, and I'm currently diving into AI with LangChain — learning one experiment at a time.
  
  <br />
  <span ref={taglineRef} className='block mt-4 text-sm sm:text-base font-medium italic text-gray-500'>
    Curious coder. Visual thinker. Always learning.
  </span>
</p>

        
      </div>
      <div ref={splineRef} className='hidden lg:block absolute top-10 left-[50%] h-full w-[60%] z-0'>
        <Spline 
          className='w-full h-full scale-[1.2]' 
          scene="https://prod.spline.design/9JAu31CGbpITEjbT/scene.splinecode" 
        />
      </div>
    </main>
  );
};

export default Hero;
