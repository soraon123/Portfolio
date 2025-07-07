import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Resume = () => {

  const secRef = useRef(null);
  const blockRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      blockRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i*0.2,
        });
      });
    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <section  id='resume' ref={secRef} className="min-h-screen bg-[#111] text-white px-6 sm:px-10 py-20">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-[#A8DADC] mb-10 text-center">Resume</h1>

        {/* Summary */}
        <div className="mb-10" ref={(el) => (blockRef.current[0] = el)}>
          <h2 className="text-2xl font-semibold text-[#A8DADC] mb-3">Summary</h2>
          <p className="text-white/70 text-sm leading-relaxed bg-white/5 p-4 rounded-md">
            Computer Science undergraduate with a focus on software development and modern application design. Skilled in C++, Python, and Java, with practical experience in building web and mobile solutions. Familiar with tools and frameworks including React, GSAP, LangChain, and MongoDB. Aiming to contribute to meaningful projects while continuously enhancing technical and problem-solving skills.
          </p>
        </div>

        {/* Skills  */}
        <div className="mb-10" ref={(el) => (blockRef.current[1] = el)}>
          <h2 className="text-2xl font-semibold text-[#A8DADC] mb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              'C++', 'Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript',
              'React', 'MongoDB', 'SQL', 'Node.js', 'Tailwind'
            ].map((skill) => (
              <span key={skill} className="bg-[#A8DADC] text-[#111] px-3 py-1 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#A8DADC] mb-3">Projects</h2>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="bg-white/5 p-4 rounded-md">
              <strong className="block text-[#A8DADC] mb-1">Brand Reputation Analyzer</strong>
              A tool to analyze sentiment from reviews using NLP and visualize it with charts.
              <br />
              <a href="https://github.com/your-profile/brand-reputation-analyzer" target="_blank" rel="noreferrer" className="text-[#A8DADC] underline">GitHub Link</a>
            </li>
            <li className="bg-white/5 p-4 rounded-md">
              <strong className="block text-[#A8DADC] mb-1">Dynamic Threat Response</strong>
              A process-monitoring dashboard that detects and auto-responds to CPU threats, powered by Python and Flask.
              <br />
              <a href="https://github.com/your-profile/dynamic-threat-response" target="_blank" rel="noreferrer" className="text-[#A8DADC] underline">GitHub Link</a>
            </li>
            <li className="bg-white/5 p-4 rounded-md">
              <strong className="block text-[#A8DADC] mb-1">Eco-Friendly Travel Planner</strong>
              A travel tool that calculates carbon footprints and suggests greener options.
              <br />
              <a href="https://github.com/your-profile/eco-travel-planner" target="_blank" rel="noreferrer" className="text-[#A8DADC] underline">GitHub Link</a>
            </li>
          </ul>
        </div> */}

        {/* Education  */}
        <div className="mb-10" ref={(el) => (blockRef.current[2] = el)}>
          <h2 className="text-2xl font-semibold text-[#A8DADC] mb-3">Education</h2>
          <div className="space-y-4 text-sm text-white/80">
            <div>
              <strong>B.Tech, CSE (Data Science)</strong><br />
              Lovely Professional University, 2023 - Present<br />
              CGPA: 8.3
            </div>
            <div>
              <strong>Higher Secondary</strong><br />
              Sri Chaitanya Techno School, Visakhapatnam, 2022 - 2023
            </div>
            <div>
              <strong>Secondary Education</strong><br />
              St. Arnold's School, Rourkela, 2020 - 2021
            </div>
          </div>
        </div>

        {/* Certifications  */}
        <div className="mb-10" ref={(el) => (blockRef.current[3] = el)}>
          <h2 className="text-2xl font-semibold text-[#A8DADC] mb-3">Certifications</h2>
          <ul className="list-disc list-inside text-sm text-white/70 space-y-2">
            <li>Responsive Web Design - FreeCodeCamp</li>
            <li>Fundamentals of Network and Digital Communication - Coursera</li>
            <li>The Bits and Bytes of Computer Networking - Coursera</li>
          </ul>
        </div>

        <div className="text-center mt-12" ref={(el) => (blockRef.current[4] = el)}>
          <a
            href="/RESUME(UPDATED).pdf"
            download
            className="inline-block bg-[#A8DADC] text-[#111] px-6 py-3 rounded-full font-semibold hover:bg-[#93c8cf] transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
