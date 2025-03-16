
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-accepl-amber opacity-10 blur-3xl" />
        <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-accepl-teal opacity-10 blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-32 md:pt-28">
        <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-accepl-teal">Investor Project Report:</span> 
              <div className="mt-2">Steel & Solar Manufacturing Plants</div>
            </h1>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 w-24 h-1 bg-accepl-amber mx-auto my-6"></div>
            <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A premium investment opportunity in two large-scale manufacturing facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 bg-white bg-opacity-60 rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accepl-teal-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M12 2v20M2 5h20M8 21H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
                  </svg>
                </div>
                <h3 className="font-medium text-lg text-gray-900">Steel Manufacturing Plant</h3>
              </div>
              <p className="text-gray-600 ml-13">Located in Chhattisgarh and focused on structural steel, ERW pipes, and galvanized steel.</p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 bg-white bg-opacity-60 rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accepl-amber-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                  </svg>
                </div>
                <h3 className="font-medium text-lg text-gray-900">Solar Manufacturing Plant</h3>
              </div>
              <p className="text-gray-600 ml-13">Located in Uttar Pradesh and producing high-efficiency solar panels and cells.</p>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 mt-12 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
            <div>
              <p className="text-3xl font-bold text-accepl-teal">₹2,100 Cr</p>
              <p className="text-sm text-gray-600 mt-1">Total Investment</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accepl-teal">35%</p>
              <p className="text-sm text-gray-600 mt-1">Investor Equity</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accepl-teal">Year 5</p>
              <p className="text-sm text-gray-600 mt-1">Break-even</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accepl-teal">₹48,289 Cr</p>
              <p className="text-sm text-gray-600 mt-1">25-Year Return</p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600 mt-12 text-center">
            <a href="#executive-summary" className="inline-flex items-center text-accepl-teal hover:text-accepl-teal-dark transition-colors">
              <span>Discover the opportunity</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
