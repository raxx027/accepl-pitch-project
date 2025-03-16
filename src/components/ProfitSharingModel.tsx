
import { useEffect, useRef } from 'react';

const ProfitSharingModel = () => {
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
    <div ref={sectionRef} className="mt-12 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Profit Sharing Model</h3>
        <p className="text-sm text-gray-600 mt-1">Detailed breakdown of how profits are distributed over the project lifecycle</p>
      </div>
      
      <div className="p-6">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Ownership Structure</h4>
              <div className="flex items-center mb-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-accepl-teal h-4 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <span className="inline-block w-3 h-3 bg-accepl-teal rounded-full mr-2"></span>
                  <span className="text-gray-700">Investor Equity: 35%</span>
                </div>
                <div>
                  <span className="inline-block w-3 h-3 bg-gray-200 rounded-full mr-2"></span>
                  <span className="text-gray-700">Company Equity: 65%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-accepl-teal/10 p-4 rounded-lg border border-accepl-teal/20">
                <h4 className="font-medium text-accepl-teal mb-2">Initial Recovery Phase (Years 1-5)</h4>
                <p className="text-sm text-gray-700">
                  100% of profits are allocated to investors to accelerate initial investment recovery.
                </p>
              </div>
              
              <div className="bg-accepl-amber/10 p-4 rounded-lg border border-accepl-amber/20">
                <h4 className="font-medium text-accepl-amber mb-2">Profit Sharing Phase (Years 6+)</h4>
                <p className="text-sm text-gray-700">
                  Profits split with 70% to investors and 30% to company, despite ownership structure being different.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-4">Company's Profit Allocation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Reinvestment</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-accepl-teal h-3 rounded-full" style={{ width: '89%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Used for capacity expansion, technology upgrades, and market growth</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Safety Net (Retained Earnings)</span>
                  <span className="text-sm font-medium">11%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-accepl-amber h-3 rounded-full" style={{ width: '11%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Kept as safety buffer for unexpected expenses or market downturns</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-accepl-teal mb-1">Year 7</div>
              <div className="text-sm text-gray-600">Break-even Point</div>
              <p className="text-xs text-gray-500 mt-2">Company achieves operational profitability</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-accepl-amber mb-1">Year 25</div>
              <div className="text-sm text-gray-600">Cumulative Return</div>
              <p className="text-xs text-gray-500 mt-2">₹48,289 Cr returned to investors (3257% ROI)</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-800 mb-1">Every 5 Years</div>
              <div className="text-sm text-gray-600">Capacity Expansion</div>
              <p className="text-xs text-gray-500 mt-2">Major reinvestment cycles for growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitSharingModel;
