import { useEffect, useRef, useState } from 'react';
import ProfitSharingModel from './ProfitSharingModel';

const financialData = [
  { year: 1, revenue: 1800, profitBeforeTax: 100, tax: 25, profitAfterTax: 75, investorProfit: 75, investorCumulative: 75, companyProfit: 0, reinvestment: 0, retained: 0 },
  { year: 2, revenue: 2800, profitBeforeTax: 200, tax: 50, profitAfterTax: 150, investorProfit: 150, investorCumulative: 225, companyProfit: 0, reinvestment: 0, retained: 0 },
  { year: 3, revenue: 4000, profitBeforeTax: 350, tax: 87.5, profitAfterTax: 262.5, investorProfit: 262.5, investorCumulative: 487.5, companyProfit: 0, reinvestment: 0, retained: 0 },
  { year: 4, revenue: 5500, profitBeforeTax: 500, tax: 125, profitAfterTax: 375, investorProfit: 375, investorCumulative: 862.5, companyProfit: 0, reinvestment: 0, retained: 0 },
  { year: 5, revenue: 7000, profitBeforeTax: 650, tax: 162.5, profitAfterTax: 487.5, investorProfit: 487.5, investorCumulative: 1350, companyProfit: 0, reinvestment: 0, retained: 0 },
  { year: 6, revenue: 8500, profitBeforeTax: 800, tax: 200, profitAfterTax: 600, investorProfit: 420, investorCumulative: 1770, companyProfit: 180, reinvestment: 160, retained: 20 },
  { year: 7, revenue: 10000, profitBeforeTax: 1000, tax: 250, profitAfterTax: 750, investorProfit: 525, investorCumulative: 2295, companyProfit: 225, reinvestment: 200, retained: 45 },
  { year: 8, revenue: 12000, profitBeforeTax: 1300, tax: 325, profitAfterTax: 975, investorProfit: 683, investorCumulative: 2978, companyProfit: 293, reinvestment: 260, retained: 78 },
  { year: 9, revenue: 14000, profitBeforeTax: 1600, tax: 400, profitAfterTax: 1200, investorProfit: 840, investorCumulative: 3818, companyProfit: 360, reinvestment: 320, retained: 118 },
  { year: 10, revenue: 16000, profitBeforeTax: 1900, tax: 475, profitAfterTax: 1425, investorProfit: 998, investorCumulative: 4816, companyProfit: 428, reinvestment: 380, retained: 165 },
  { year: 11, revenue: 18500, profitBeforeTax: 2200, tax: 550, profitAfterTax: 1650, investorProfit: 1155, investorCumulative: 5971, companyProfit: 495, reinvestment: 440, retained: 220 },
  { year: 12, revenue: 21000, profitBeforeTax: 2600, tax: 650, profitAfterTax: 1950, investorProfit: 1365, investorCumulative: 7336, companyProfit: 585, reinvestment: 520, retained: 290 },
  { year: 13, revenue: 23500, profitBeforeTax: 3000, tax: 750, profitAfterTax: 2250, investorProfit: 1575, investorCumulative: 8911, companyProfit: 675, reinvestment: 600, retained: 370 },
  { year: 14, revenue: 26000, profitBeforeTax: 3500, tax: 875, profitAfterTax: 2625, investorProfit: 1838, investorCumulative: 10749, companyProfit: 788, reinvestment: 700, retained: 470 },
  { year: 15, revenue: 29000, profitBeforeTax: 4000, tax: 1000, profitAfterTax: 3000, investorProfit: 2100, investorCumulative: 12849, companyProfit: 900, reinvestment: 800, retained: 570 },
  { year: 16, revenue: 32000, profitBeforeTax: 4500, tax: 1125, profitAfterTax: 3375, investorProfit: 2363, investorCumulative: 15212, companyProfit: 1013, reinvestment: 900, retained: 678 },
  { year: 17, revenue: 35000, profitBeforeTax: 5000, tax: 1250, profitAfterTax: 3750, investorProfit: 2625, investorCumulative: 17837, companyProfit: 1125, reinvestment: 1000, retained: 795 },
  { year: 18, revenue: 38000, profitBeforeTax: 5500, tax: 1375, profitAfterTax: 4125, investorProfit: 2888, investorCumulative: 20725, companyProfit: 1238, reinvestment: 1100, retained: 915 },
  { year: 19, revenue: 41000, profitBeforeTax: 6000, tax: 1500, profitAfterTax: 4500, investorProfit: 3150, investorCumulative: 23875, companyProfit: 1350, reinvestment: 1200, retained: 1035 },
  { year: 20, revenue: 42000, profitBeforeTax: 6500, tax: 1625, profitAfterTax: 4875, investorProfit: 3413, investorCumulative: 27288, companyProfit: 1463, reinvestment: 1300, retained: 1163 },
  { year: 21, revenue: 45000, profitBeforeTax: 7000, tax: 1750, profitAfterTax: 5250, investorProfit: 3675, investorCumulative: 30963, companyProfit: 1575, reinvestment: 1400, retained: 1295 },
  { year: 22, revenue: 48000, profitBeforeTax: 7500, tax: 1875, profitAfterTax: 5625, investorProfit: 3938, investorCumulative: 34901, companyProfit: 1688, reinvestment: 1500, retained: 1428 },
  { year: 23, revenue: 51000, profitBeforeTax: 8000, tax: 2000, profitAfterTax: 6000, investorProfit: 4200, investorCumulative: 39101, companyProfit: 1800, reinvestment: 1600, retained: 1560 },
  { year: 24, revenue: 55000, profitBeforeTax: 8500, tax: 2125, profitAfterTax: 6375, investorProfit: 4463, investorCumulative: 43564, companyProfit: 1913, reinvestment: 1700, retained: 1693 },
  { year: 25, revenue: 60000, profitBeforeTax: 9000, tax: 2250, profitAfterTax: 6750, investorProfit: 4725, investorCumulative: 48289, companyProfit: 2025, reinvestment: 1800, retained: 1825 }
];

const formatNumber = (num: number) => {
  if (num === 0) return "0";
  return num.toLocaleString('en-IN');
};

const FinancialTable = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleYears, setVisibleYears] = useState<string>("all");
  
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

  const filteredData = () => {
    if (visibleYears === "all") return financialData;
    if (visibleYears === "1-5") return financialData.slice(0, 5);
    if (visibleYears === "6-10") return financialData.slice(5, 10);
    if (visibleYears === "11-15") return financialData.slice(10, 15);
    if (visibleYears === "16-20") return financialData.slice(15, 20);
    if (visibleYears === "21-25") return financialData.slice(20, 25);
    return financialData;
  };

  const handleYearFilter = (filter: string) => {
    setVisibleYears(filter);
  };

  return (
    <section id="financial-breakdown" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block">
            <span className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 inline-block px-3 py-1 text-xs font-medium text-accepl-teal bg-accepl-teal-light/20 rounded-full">
              SECTION 3
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 mt-4 text-3xl font-bold text-gray-900">
            Detailed 25-Year Financial Breakdown
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 w-16 h-1 bg-accepl-amber mx-auto my-6"></div>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-gray-600 max-w-2xl mx-auto">
            Realistic growth projections with reinvestment & tax inclusion
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 mb-12 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 max-w-4xl mx-auto">
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-accepl-teal-light/20 to-accepl-teal/10 p-4 rounded-lg border border-accepl-teal/20">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Internal Rate of Return (IRR)</h3>
              <p className="text-3xl font-bold text-accepl-teal">27.51%</p>
              <p className="text-xs text-gray-500 mt-1">Exceptional return rate</p>
            </div>
            <div className="bg-gradient-to-br from-accepl-amber-light/20 to-accepl-amber/10 p-4 rounded-lg border border-accepl-amber/20">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Return on Investment (ROI)</h3>
              <p className="text-3xl font-bold text-accepl-amber">3257.14%</p>
              <p className="text-xs text-gray-500 mt-1">Multiplied investment value</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Net Present Value (NPV)</h3>
              <p className="text-3xl font-bold text-gray-900">₹13,423.43 Cr</p>
              <p className="text-xs text-gray-500 mt-1">At 9% discount rate</p>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
            <div className="p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Year-wise Breakdown</h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <button 
                  onClick={() => handleYearFilter("all")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${visibleYears === "all" ? "bg-accepl-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  All Years
                </button>
                <button 
                  onClick={() => handleYearFilter("1-5")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${visibleYears === "1-5" ? "bg-accepl-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Years 1-5
                </button>
                <button 
                  onClick={() => handleYearFilter("6-10")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${visibleYears === "6-10" ? "bg-accepl-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Years 6-10
                </button>
                <button 
                  onClick={() => handleYearFilter("11-15")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${visibleYears === "11-15" ? "bg-accepl-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Years 11-15
                </button>
                <button 
                  onClick={() => handleYearFilter("16-20")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${visibleYears === "16-20" ? "bg-accepl-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Years 16-20
                </button>
                <button 
                  onClick={() => handleYearFilter("21-25")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${visibleYears === "21-25" ? "bg-accepl-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Years 21-25
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto table-scroll">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 shadow-sm">
                      Year
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Revenue<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Profit Before Tax<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Tax (25%)<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Profit After Tax<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Investor Profit<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-accepl-teal uppercase tracking-wider">
                      Investor Cumulative<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Company Profit<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Reinvestment<br/>(₹ Cr)
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Retained Earnings<br/>(₹ Cr)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredData().map((row, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-gray-50 transition-colors ${row.year % 5 === 0 ? "bg-gray-50/50" : ""}`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-inherit">
                        Year {row.year}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.revenue)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.profitBeforeTax)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.tax)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.profitAfterTax)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.investorProfit)}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-accepl-teal text-right">
                        {formatNumber(row.investorCumulative)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.companyProfit)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.reinvestment)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">
                        {formatNumber(row.retained)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <ProfitSharingModel />
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-accepl-teal-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M12 2v20M2 5h20M8 21H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">Year 5 Revenue</h3>
              </div>
              <p className="text-2xl font-bold text-accepl-teal">₹7,000 Cr</p>
              <p className="text-sm text-gray-500 mt-1">End of initial recovery phase</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-accepl-amber-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">Year 10 Profit</h3>
              </div>
              <p className="text-2xl font-bold text-accepl-amber">₹1,425 Cr</p>
              <p className="text-sm text-gray-500 mt-1">After tax annual profit</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-accepl-teal-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-teal">
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.94 1.94 0 0 0-.2 3.31l12.35 6.61c.5.26 1.1.26 1.6 0l3.65-1.9a1.94 1.94 0 0 0 .2-3.31Z"/>
                    <path d="M3.09 8.84v12.85a1.94 1.94 0 0 0 1.81 1.94l7.88-4.13V14.7"/>
                    <path d="M20.91 8.84v12.85a1.94 1.94 0 0 1-1.81 1.94l-7.88-4.13V14.7"/>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">Year 15 Reinvestment</h3>
              </div>
              <p className="text-2xl font-bold text-accepl-teal">₹800 Cr</p>
              <p className="text-sm text-gray-500 mt-1">Capital for expansion</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-accepl-amber-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accepl-amber">
                    <path d="M18 6 7 17l-5-5"/>
                    <path d="m22 10-7.5 7.5L13 16"/>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">Year 25 Return</h3>
              </div>
              <p className="text-2xl font-bold text-accepl-amber">₹48,289 Cr</p>
              <p className="text-sm text-gray-500 mt-1">Cumulative investor return</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTable;

