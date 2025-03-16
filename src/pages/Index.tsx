
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import ProjectPhases from "@/components/ProjectPhases";
import FinancialTable from "@/components/FinancialTable";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <section id="executive-summary" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ExecutiveSummary />
          </div>
        </section>
        <section id="project-phases" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectPhases />
          </div>
        </section>
        <section id="financial-breakdown" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FinancialTable />
          </div>
        </section>
        <section id="conclusion" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Conclusion />
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accepl-amber">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-accepl-teal">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 9219022377</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-accepl-teal">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:info@accepl.com" className="hover:text-accepl-teal-light transition-colors">info@accepl.com</a>
                </li>
                <li className="flex items-start mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-accepl-teal">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>12/66 Indira Nagar, Lucknow, Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accepl-amber">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#executive-summary" className="hover:text-accepl-teal-light transition-colors">Executive Summary</a></li>
                <li><a href="#project-phases" className="hover:text-accepl-teal-light transition-colors">Project Phases</a></li>
                <li><a href="#financial-breakdown" className="hover:text-accepl-teal-light transition-colors">Financial Details</a></li>
                <li><a href="#conclusion" className="hover:text-accepl-teal-light transition-colors">Conclusion</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accepl-amber">About Accredian</h3>
              <p className="text-gray-300">Accredian Engineering Pvt Ltd (ACCEPL) specializes in steel and solar manufacturing, with a vision to create sustainable and innovative infrastructure solutions for a growing India.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Accredian Engineering Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
