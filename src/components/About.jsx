import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {

  const imgRef = useRef(null);
  const txtRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            imgRef.current,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
            }
          );

          gsap.fromTo(
            txtRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
            }
          );
        } else {
          
          gsap.set([imgRef.current, txtRef.current], { opacity: 0 });
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  

  return (
    <section  ref={sectionRef} 
      id="about"
      className="min-h-screen w-full bg-[#111] text-white px-6 sm:px-10 py-20 flex flex-col lg:flex-row items-center justify-center gap-10"
    >
      {/* Profile Image */}
      <div ref={imgRef} className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 border-[#A8DADC] shadow-xl">
        <img
          src="./cv.jpeg"
          alt="Shruti"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Text */}
      <div ref={txtRef} className="max-w-xl text-center lg:text-left">
        <h5 className="uppercase text-[#A8DADC] tracking-wider text-sm font-semibold mb-4">
          About Me
        </h5>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          I'm <span className="text-[#A8DADC] font-semibold">Shruti</span> — a Computer Science undergrad passionate about both the technical and creative sides of technology.
          <br /><br />
          While my journey focuses on <span className="text-[#A8DADC] font-medium">Data Science</span> and <span className="text-[#A8DADC] font-medium">AI</span>, I’m equally drawn to UI animation using <span className="text-[#A8DADC] font-medium">GSAP</span>, 3D interfaces via <span className="text-[#A8DADC] font-medium">Spline</span>, and experimenting with <span className="text-[#A8DADC] font-medium">LangChain</span> for generative applications.
          <br /><br />
          Outside of code, you’ll find me sketching, exploring interactive web design, or brainstorming creative concepts that merge logic and visuals.
        </p>
      </div>
    </section>
  );
};

export default About;
