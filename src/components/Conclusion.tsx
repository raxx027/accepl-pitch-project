
import { useEffect, useRef } from 'react';

const Conclusion = () => {
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
    <section id="conclusion" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-accepl-amber opacity-5 blur-3xl" />
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-accepl-teal opacity-5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block">
            <span className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 inline-block px-3 py-1 text-xs font-medium text-accepl-teal bg-accepl-teal-light/20 rounded-full">
              SECTION 4
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 mt-4 text-3xl font-bold text-gray-900">
            Conclusion
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 w-16 h-1 bg-accepl-amber mx-auto my-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-10">
            <ul className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accepl-teal-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Conservative Growth Estimates</h3>
                  <p className="text-gray-600 mt-1">Lower initial revenues and profits ensure a conservative estimate, making the projections realistic.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accepl-teal-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Strategic Reinvestment</h3>
                  <p className="text-gray-600 mt-1">Reinvestment of company profits every 5 years leads to steady revenue and profit growth.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accepl-teal-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tax Planning Integration</h3>
                  <p className="text-gray-600 mt-1">Tax planning ensures realistic after-tax profitability with a standard 25% corporate tax rate.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accepl-amber-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Substantial Long-term Returns</h3>
                  <p className="text-gray-600 mt-1">Investor receives cumulative profits of ₹48,289 Cr by Year 25, continuing to increase in the long term.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accepl-amber-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Debt-Free Operation</h3>
                  <p className="text-gray-600 mt-1">Loan repayments are fully cleared by Year 10, reducing financial liabilities and boosting profitability.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accepl-amber-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Passive Income Generation</h3>
                  <p className="text-gray-600 mt-1">Structured profit-sharing ensures investors benefit from consistent passive income over the entire project lifetime.</p>
                </div>
              </li>
            </ul>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 mt-10 p-6 bg-gradient-to-r from-accepl-teal/10 to-accepl-amber/10 rounded-lg border border-gray-200">
              <p className="text-center text-gray-800 font-medium">
                This project presents an excellent long-term investment opportunity with structured growth, high returns, and predictable reinvestments.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 mt-10 text-center">
              <button className="px-6 py-3 bg-accepl-teal text-white font-medium rounded-full shadow-md hover:bg-accepl-teal-dark transition-colors">
                Request Detailed Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
