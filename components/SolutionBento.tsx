
import React from 'react';
import { GraduationCap, Users, Mic } from 'lucide-react';

interface SolutionBentoProps {
  onNavigate?: (page: string) => void;
}

export const SolutionBento: React.FC<SolutionBentoProps> = ({ onNavigate }) => {
  return (
    <section id="solution" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">
            Plus qu'une formation. Un Écosystème.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous avons déconstruit le modèle traditionnel pour créer un parcours hybride : Apprenez, Pratiquez, Scalez.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-[300px]">
          
          {/* Main Box - Left (Academy) */}
          <div className="lg:col-span-2 lg:row-span-2 bg-petrol rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-6 backdrop-blur-sm">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">L'ACADÉMIE</h3>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Le parcours certifiant (RS6977) pour structurer votre savoir. Apprenez à concevoir des programmes pédagogiques impactants, maîtrisez l'IA pour créer vos supports en un éclair, et captivez votre audience.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Ingénierie Pédagogique
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Neuromarketing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 100% Finançable CPF
                </li>
              </ul>
            </div>
            
            {/* Subtle background image overlay */}
            <img 
              src="https://picsum.photos/seed/code/800/600" 
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500" 
              alt="Academy"
            />
          </div>

          {/* Top Right Box - Meute (Portage) */}
          <div className="bg-accent rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
             <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-white">
                  <Users size={20} />
                </div>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Killer Feature
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">LA MEUTE</h3>
              <p className="text-white/90 text-sm mb-6">
                Utilisez notre label Qualiopi pour facturer immédiatement. Nous gérons l'admin, les contrats et la facturation. Vous animez, point barre.
              </p>
              
              <button 
                onClick={() => onNavigate && onNavigate('meute')}
                className="px-5 py-2.5 rounded-lg border border-white text-white text-xs font-bold hover:bg-white hover:text-accent transition-all duration-300"
              >
                DÉCOUVRIR LE PORTAGE →
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          {/* Bottom Right Box - Agence (Scale) */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between group hover:border-petrol/20 transition-colors duration-300">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-petrol/5 text-petrol mb-4">
                <Mic size={20} />
              </div>
              <h3 className="text-2xl font-bold text-petrol mb-2">L'AGENCE (Scaler)</h3>
              <p className="text-gray-500 text-sm">
                Accédez à notre catalogue de missions et à nos scènes de conférence.
              </p>
            </div>
            <div className="mt-4">
               <button 
                 onClick={() => onNavigate && onNavigate('opportunities')}
                 className="text-xs font-bold text-petrol border-b border-petrol/20 pb-0.5 group-hover:border-petrol transition-all cursor-pointer focus:outline-none"
               >
                 Voir les opportunités →
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
