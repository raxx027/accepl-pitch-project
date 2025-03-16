
import { useEffect, useRef } from 'react';

const phases = [
  {
    number: "Phase 1",
    title: "Initial Setup & Market Entry",
    steel: "Production of TMT bars, beams, channels, angles, and ERW pipes.",
    solar: "Production of mono PERC solar cells and DCR-compliant solar modules.",
    focus: "Establish stable production, ensure product quality, and secure government and private contracts.",
    reinvestment: "Focus on supply chain strengthening, workforce training, and initial R&D setup."
  },
  {
    number: "Phase 2",
    title: "Expansion & Diversification",
    steel: "Add galvanized steel structures, pre-engineered buildings (PEB), and coated steel.",
    solar: "Introduce bifacial panels and lithium-ion battery integration.",
    focus: "Increase factory automation and optimize logistics.",
    reinvestment: "Expand production lines, acquire advanced machinery, invest in automation and quality control."
  },
  {
    number: "Phase 3",
    title: "Scaling for International Markets",
    steel: "Add high-grade alloy steel for automotive & defense industries.",
    solar: "Develop HJT (Heterojunction Technology) solar cells for higher efficiency.",
    focus: "Strengthen exports and establish overseas supply chains.",
    reinvestment: "Develop R&D labs for high-strength steel and next-gen solar cells, expand international trade partnerships."
  },
  {
    number: "Phase 4",
    title: "AI Integration & Smart Factory Development",
    steel: "AI-driven steel production and trials for hydrogen-based steel manufacturing.",
    solar: "AI-integrated smart solar grids and perovskite tandem solar cell R&D.",
    focus: "Advanced technology integration and automation.",
    reinvestment: "AI-driven automation, predictive maintenance, and efficiency improvement."
  },
  {
    number: "Phase 5",
    title: "Green Manufacturing & Global Expansion",
    steel: "Development of green steel technology using hydrogen-based manufacturing.",
    solar: "Mass production of ultra-high-efficiency solar panels and battery solutions.",
    focus: "Strategic global partnerships and expansion into emerging markets.",
    reinvestment: "Sustainable energy integration, full-scale AI-driven automation, and global expansion."
  }
];

const ProjectPhases = () => {
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
    <section id="project-phases" className="py-20 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-accepl-teal opacity-5 blur-3xl" />
        <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full bg-accepl-amber opacity-5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block">
            <span className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 inline-block px-3 py-1 text-xs font-medium text-accepl-teal bg-accepl-teal-light/20 rounded-full">
              SECTION 2
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 mt-4 text-3xl font-bold text-gray-900">
            Project Phases and Expansion Strategy
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 w-16 h-1 bg-accepl-amber mx-auto my-6"></div>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-gray-600 max-w-2xl mx-auto">
            Our strategic 25-year expansion plan is designed to maximize returns while maintaining sustainable growth.
          </p>
        </div>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${300 + (index * 100)} phase-card`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="inline-block px-3 py-1 text-xs font-semibold bg-accepl-teal text-white rounded-full mb-2">
                    {phase.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-2">Steel Manufacturing</h4>
                    <p className="text-gray-700">{phase.steel}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-2">Solar Manufacturing</h4>
                    <p className="text-gray-700">{phase.solar}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-2">Primary Focus</h4>
                    <p className="text-gray-700">{phase.focus}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 font-semibold tracking-wider mb-2">Reinvestment</h4>
                    <p className="text-gray-700">{phase.reinvestment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPhases;
