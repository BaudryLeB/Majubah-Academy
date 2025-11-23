import React from 'react';
import { Quote } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="authority" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="md:col-span-5 relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-petrol/10 rounded-2xl transform translate-x-2 translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
              {/* Grayscale filter for "Sage Timonier" look */}
              <img 
                src="https://picsum.photos/seed/man_portrait/600/800" 
                alt="Baudry Bahuna" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">Baudry Bahuna</p>
                <p className="text-white/70 text-sm">Fondateur, Majubah Academy</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:col-span-7 md:pl-12">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Le mot du fondateur
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-petrol mb-8">
              "La résilience n'est pas un concept. C'est une méthode."
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Ex-Banquier d'affaires, ex-dirigeant de 4 agences, j'ai connu le sommet, puis j'ai tout perdu. Une chute brutale qui m'a appris une chose essentielle : <strong>votre seule vraie sécurité, c'est votre capacité à transmettre ce que vous savez.</strong>
              </p>
              <p>
                J'ai écrit <em>Rebondir après la chute</em> non pas pour me plaindre, mais pour coder la méthode de la remontée. Majubah Academy est la concrétisation de cette méthode.
              </p>
            </div>

            <div className="mt-10 p-8 bg-surface rounded-2xl border-l-4 border-accent relative">
              <Quote className="absolute top-6 left-6 text-petrol/10 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2" />
              <p className="text-petrol font-medium italic text-xl relative z-10 pl-4">
                "J'ai construit l'infrastructure que j'aurais aimé avoir pour sécuriser mon avenir. Une école pour l'excellence, une meute pour la sécurité."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};