import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-surface to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-petrol/5 text-petrol border border-petrol/10">
              <CheckCircle size={12} className="mr-1.5" /> Certifié Qualiopi
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-petrol/5 text-petrol border border-petrol/10">
              <CheckCircle size={12} className="mr-1.5" /> Éligible CPF (RS6977)
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-petrol mb-6 tracking-tight">
            Transformez votre <br />
            Expertise Terrain en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-petrol/70">
              Formation Rentable.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            L'école des formateurs d'élite en Finance & Business. Maîtrisez la neuropédagogie, automatisez avec l'IA, et lancez-vous sans gérer l'administratif.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button 
              onClick={() => onNavigate('become-trainer')}
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              JE VEUX DEVENIR FORMATEUR
            </button>
            <button 
              onClick={() => onNavigate('b2b')}
              className="group flex items-center text-petrol font-medium border-b border-transparent hover:border-petrol transition-all pb-0.5 ml-2 focus:outline-none"
            >
              Je cherche un expert pour mon entreprise 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-8 text-xs text-gray-400 font-medium">
            Fondé par l'auteur de "Rebondir après la chute" • 450+ Formateurs accompagnés
          </p>
        </div>

        {/* Visual Content */}
        <div className="relative hidden lg:block h-full min-h-[500px]">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
           <div className="absolute bottom-0 left-10 w-72 h-72 bg-petrol/5 rounded-full blur-3xl -z-10"></div>
           
           {/* Main Image Container - Abstract Architectural/Tech vibe */}
           <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {/* Nouvelle image Unsplash : Architecture moderne abstraite, tons froids */}
              <img 
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture Moderne et Structure" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-soft border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</span>
                </div>
                <p className="text-sm font-semibold text-petrol">
                  "J'ai généré mes premiers 10k€ en portage 30 jours après l'Académie."
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};