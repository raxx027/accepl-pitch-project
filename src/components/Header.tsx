
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/a595a445-7cbe-419d-b731-d9702d2a76c9.png" 
              alt="Accredian Engineering Logo" 
              className="h-10"
            />
            <div className="ml-1">
              <h1 className="text-lg font-medium tracking-tight">
                <span className="text-accepl-teal">Accredian</span> 
                <span className="text-gray-700 text-sm font-normal tracking-wide"> Engineering Pvt Ltd</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">also known as ACCEPL</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('executive-summary')}
              className="text-sm font-medium text-gray-700 hover:text-accepl-teal transition-colors"
            >
              Executive Summary
            </button>
            <button 
              onClick={() => scrollToSection('project-phases')}
              className="text-sm font-medium text-gray-700 hover:text-accepl-teal transition-colors"
            >
              Project Phases
            </button>
            <button 
              onClick={() => scrollToSection('financial-breakdown')}
              className="text-sm font-medium text-gray-700 hover:text-accepl-teal transition-colors"
            >
              Financial Breakdown
            </button>
            <button 
              onClick={() => scrollToSection('conclusion')}
              className="text-sm font-medium text-gray-700 hover:text-accepl-teal transition-colors"
            >
              Conclusion
            </button>
          </nav>
          
          <div className="flex md:hidden">
            <button 
              onClick={() => {}}
              className="text-accepl-teal hover:text-accepl-teal-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
