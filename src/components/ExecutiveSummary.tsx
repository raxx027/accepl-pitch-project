
import { useEffect, useRef } from 'react';

const ExecutiveSummary = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="executive-summary" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block">
            <span className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 inline-block px-3 py-1 text-xs font-medium text-accepl-teal bg-accepl-teal-light/20 rounded-full">
              SECTION 1
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 mt-4 text-3xl font-bold text-gray-900">
            Executive Summary
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 w-16 h-1 bg-accepl-amber mx-auto my-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8">
            <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-gray-700 mb-6 text-balance">
              This project report provides a detailed financial breakdown and investment plan for setting up two large-scale manufacturing plants in India:
            </p>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accepl-teal-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M12 2v20M2 5h20M8 21H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Steel Manufacturing Plant in Chhattisgarh</h3>
                  <p className="text-gray-600 mt-1">Focused on structural steel, ERW pipes, and galvanized steel.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accepl-amber-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Solar Cell & Module Manufacturing Plant in Uttar Pradesh</h3>
                  <p className="text-gray-600 mt-1">Producing high-efficiency solar panels and cells.</p>
                </div>
              </div>
            </div>
            
            <hr className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 my-8 border-gray-200" />
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-900 font-medium mb-3">Investment Structure</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Total Investment: ₹2,100 Cr</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Investor Contribution: ₹2,100 Cr (Upfront Full Investment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Investor Equity: 35%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Company Equity: 65%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-900 font-medium mb-3">Financial Strategy</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Break-even: Year 5</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>After break-even, the company reinvests its share of profit while keeping a 10% safety net.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Capacity expansion is done every 5 years based on available reinvestment capital.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Tax rates are incorporated for realistic financial planning.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
