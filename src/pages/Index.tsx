
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
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Accredian Engineering Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
