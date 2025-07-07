import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'boxicons/css/boxicons.min.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const secRef = useRef(null);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: secRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      });

      // Animate paragraph
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: secRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      });

      // Animate each contact card
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          delay: 0.3 + i * 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reset',
          },
        });
      });

      // Animate CTA
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        delay: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      });

      // Refresh ScrollTrigger on anchor jump
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      id="contact"
      className="bg-[#111] text-white px-6 sm:px-10 md:px-[5vw] py-24 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 ref={headRef} className="text-4xl font-bold text-[#A8DADC]">
          Get in Touch
        </h2>
        <p
          ref={paraRef}
          className="mt-4 text-gray-400 max-w-md mx-auto text-sm sm:text-base"
        >
          Whether it's a collaboration, a cool idea, or just a hello — I'd love
          to connect with you!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          {
            icon: 'bx bx-envelope',
            title: 'E-mail',
            text: 'shrutioraon004@gmail.com',
          },
          {
            icon: 'bx bxl-linkedin-square',
            title: 'LinkedIn',
            text: 'Shruti Oraon',
            link: 'https://www.linkedin.com/in/shruti-oraon-7b949a29a',
          },
          {
            icon: 'bx bxl-github',
            title: 'GitHub',
            text: 'soraon123',
            link: 'https://github.com/soraon123',
          },
        ].map((item, i) => {
          const isLink = !!item.link;
          const cardClass =
            'bg-[#1a1a1a] hover:bg-[#222] transition p-6 rounded-lg shadow-md flex flex-col items-center text-center';

          const content = (
            <>
              <i className={`${item.icon} text-3xl text-[#A8DADC] mb-3`}></i>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm underline">{item.text}</p>
            </>
          );

          return isLink ? (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardsRef.current[i] = el)}
              className={cardClass}
            >
              {content}
            </a>
          ) : (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={cardClass}
            >
              {content}
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <a
        ref={ctaRef}
        href="https://www.linkedin.com/in/shruti-oraon-7b949a29a"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block bg-[#A8DADC] text-[#111] px-6 py-3 rounded-full font-semibold hover:bg-[#8ccfd6] transition"
      >
        Let's Connect
      </a>
    </section>
  );
};

export default Contact;
