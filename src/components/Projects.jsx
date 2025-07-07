import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  {
    title: 'Brand Reputation Analyzer',
    year: '2025',
    image: './bsa.png',
    github: 'https://github.com/soraon123/Brand_Reputation_Analyzer.git',
  },
  {
    title: 'Dynamic Threat Response',
    year: '2025',
    image: './dts.png',
    github: 'https://github.com/soraon123/DYNAMIC-THREAT-RESPONSE.git',
  },
  {
    title: 'Eco-Friendly Travel Planner',
    year: '2025',
    image: './eco.png',
    github: 'https://github.com/soraon123/eco-friendly-travel-planner.git',
  },
];

const Projects = () => {
  const imageRefs = useRef([]);
  const currentIndex = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, rotate: 0 });
  const animPos = useRef({ x: 0, y: 0, rotate: 0 });
  const animationFrame = useRef(null);

  useEffect(() => {
    const elems = document.querySelectorAll('.elem');

    const animate = () => {
      animPos.current.x += (mousePos.current.x - animPos.current.x) * 0.1;
      animPos.current.y += (mousePos.current.y - animPos.current.y) * 0.1;
      animPos.current.rotate += (mousePos.current.rotate - animPos.current.rotate) * 0.1;

      if (currentIndex.current !== null) {
        const img = imageRefs.current[currentIndex.current];
        if (img) {
          gsap.set(img, {
            top: animPos.current.y,
            left: animPos.current.x,
            rotate: animPos.current.rotate,
          });
        }
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    elems.forEach((elem, index) => {
      let lastX = 0;

      elem.addEventListener('mousemove', (e) => {
        const bounds = elem.getBoundingClientRect();
        const img = imageRefs.current[index];
        if (!img) return;

        const localX = e.clientX - bounds.left;
        const localY = e.clientY - bounds.top;

        const diff = e.clientX - lastX;
        lastX = e.clientX;
        const rotate = gsap.utils.clamp(-20, 20, diff * 0.4);

        mousePos.current = {
          x: localX,
          y: localY,
          rotate,
        };

        currentIndex.current = index;

        gsap.to(img, {
          opacity: 1,
          duration: 0.3,
          ease: 'power3.out',
        });

        imageRefs.current.forEach((otherImg, i) => {
          if (i !== index) {
            gsap.to(otherImg, { opacity: 0, duration: 0.2 });
          }
        });
      });

      elem.addEventListener('mouseleave', () => {
        const img = imageRefs.current[index];
        if (img) {
          gsap.to(img, { opacity: 0, duration: 0.3 });
        }
        currentIndex.current = null;
      });
    });

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <section  id="projects"  className="bg-[#111] w-full min-h-screen pt-24 md:pt-20 pl-[1vw] pr-[2vw] text-white">
      <h2 className="text-4xl font-bold text-[#A8DADC] mb-12 px-4">Projects</h2>

      {projects.map((project, index) => (
        <a
          key={index}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`group elem relative flex justify-between items-center w-full py-[2.5vw] pr-0 border-t border-zinc-700 hover:bg-white/5 transition duration-300 ${
            index === projects.length - 1 ? 'border-b' : ''
          }`}
        >
          {/* Hover Image */}
          <img
            ref={(el) => (imageRefs.current[index] = el)}
            src={project.image}
            alt={project.title}
            className="pointer-events-none absolute opacity-0 h-[140%] -translate-x-1/2 -translate-y-1/2 z-40"
          />

          {/* Tooltip */}
          <span className="absolute top-3 right-3 text-xs bg-[#A8DADC] text-black px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 z-50 shadow-md">
            View on GitHub
          </span>

          {/* Title */}
          <h1 className="text-[4vw] md:text-[3.5vw] lg:text-[3vw] uppercase text-white font-semibold tracking-wide group-hover:text-[#A8DADC] transition">
            {project.title}
          </h1>

          {/* Year */}
          <h5 className="text-sm text-zinc-300 border border-zinc-600 px-3 py-1 rounded-md shadow-inner group-hover:border-[#A8DADC] transition">
            {project.year}
          </h5>
        </a>
      ))}
    </section>
  );
};

export default Projects;
