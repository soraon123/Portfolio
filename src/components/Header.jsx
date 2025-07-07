import React, { useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'boxicons/css/boxicons.min.css';
import gsap from 'gsap';

const Header = () => {

  const headerRef = useRef(null);
  const navRef = useRef([]);
  const mobileRef = useRef(null);


  const toggleMobileMenu = () => {
    if(mobileRef.current.classList.contains('hidden')){
      mobileRef.current.classList.remove('hidden');

      gsap.fromTo(mobileRef.current, {
        y: -30, 
        opacity: 0
      },
    {
      y: 0,
      opacity: 1,
      duration: 0.5, 
      ease: 'power3.out'
    });
    }else{
      mobileRef.current.classList.add('hidden');
    }
  };

  const closeMenu = () => {
    if(!mobileRef.current.classList.contains('hidden')){
      mobileRef.current.classList.add('hidden');
    }
  };

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    
    gsap.from(gsap.utils.toArray(navRef), {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.1,
      delay: 0.3,
    });
  }, []);

  return (
    <header ref={headerRef} className="flex justify-between items-center py-4 px-4 lg:px-20 bg-transparent z-50 relative">
      {/* Logo */}
      {/* <h1
        className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#A8DADC] via-[#B5EAEA] to-[#FADADD] text-transparent bg-clip-text"
        
      >
        Shruti.dev
      </h1> */}
      <span className="text-xl md:text-2xl font-mono font-semibold text-white">
  &lt;<span className="text-[#A8DADC]">shruti</span> /&gt;
</span>


      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12 text-white">
        {[
          { label: 'Home', to: '/#hero', delay: 0 },
          { label: 'About', to: '/#about', delay: 100 },
          { label: 'Resume', to: '/#resume', delay: 200 },
          { label: 'Projects', to: '/#projects', delay: 300 },
          { label: 'Contact', to: '/#contact', delay: 400 },
        ].map((item, idx) => (
          <Link smooth to={item.to} key={idx} ref={(el) => (navRef.current[idx] = el)} className="relative text-white hover:text-[#A8DADC] cursor-pointer transition-all ease-in-out
after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full
after:bg-[#A8DADC] after:transition-all after:duration-500"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu-alt-right text-[#A8DADC]"></i>
      </button>

      {/* Mobile Menu */}
      <div ref={mobileRef}
        id="mobilemenu"
        className="hidden fixed top-16 left-0 right-0 bottom-0 bg-black/70 backdrop-blur-md z-40 p-5 md:hidden"
      >
        <nav className="flex flex-col items-center gap-6">
          {['hero', 'about', 'resume', 'projects', 'contact'].map((section, i) => (
            <Link
              smooth
              to={`/#${section}`}
              key={section}
              onClick={closeMenu}
              className="text-base text-white transition-colors hover:text-[#A8DADC]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
