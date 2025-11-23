
import React from 'react';
import { ArrowRight, Mic } from 'lucide-react';

interface SpeakerTeaserProps {
  onNavigate: (page: string) => void;
}

export const SpeakerTeaser: React.FC<SpeakerTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-petrol text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Text */}
        <div className="order-2 lg:order-1 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-sm">
            <Mic size={14} className="text-accent" />
            <span>Majubah Speaker Bureau</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ils ne racontent pas l'histoire, <br/>
            <span className="text-accent">ils l'ont vécue.</span>
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
            Découvrez le Majubah Speaker Bureau. Nous représentons des entrepreneurs et experts de terrain aux parcours exceptionnels (Serial entrepreneurs, stars de TikTok, experts de la crise...). Des keynotes impactantes pour inspirer vos équipes et étudiants, loin de la théorie.
          </p>
          
          <button 
            onClick={() => onNavigate('speaker')}
            className="bg-accent text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
          >
            DÉCOUVRIR NOS SPEAKERS & CONFÉRENCES
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: Visual */}
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] w-full">
           {/* Decorative elements */}
           <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-2xl z-0"></div>
           
           <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
                alt="Conférence Majubah Speaker Bureau" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-petrol via-transparent to-transparent opacity-60"></div>
           </div>
        </div>

      </div>
    </section>
  );
};
