
import React from 'react';
import { Mic, Zap, Users, TrendingUp, Smartphone, ArrowRight, Star } from 'lucide-react';

interface SpeakerPageProps {
  onNavigate: (page: string) => void;
}

export const SpeakerPage: React.FC<SpeakerPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* 1. HERO SECTION (Stage & Impact) */}
      <section className="relative pt-40 pb-24 overflow-hidden text-center px-6">
        {/* Background Image with Strong Dark Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
            <img 
                src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2070&auto=format&fit=crop" 
                alt="Stage Spotlight" 
                className="w-full h-full object-cover"
            />
            {/* MISSION 1 : CORRECTION DU HERO (Overlay Sombre) */}
            <div className="absolute inset-0 bg-gray-900/85 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/70 to-gray-900"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8 border border-white/20 backdrop-blur-md">
            <Mic size={14} className="text-accent" />
            <span>Majubah Speaker Bureau</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white tracking-tight drop-shadow-xl">
            Électrisez vos audiences. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">
              Faites entrer le réel sur scène.
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md">
            Majubah Speaker Bureau représente des entrepreneurs et experts de terrain. Fini la théorie. Nos keynotes sont des retours d'expérience bruts, conçus pour inspirer vos équipes et étudiants, du CODIR à la Gen Z.
          </p>
          
          <button 
            onClick={() => onNavigate('b2b-audit')}
            className="bg-accent text-white px-10 py-5 rounded-xl text-lg font-bold shadow-glow hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto border border-white/10"
          >
            BOUQUER UN SPEAKER <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 2. NOS DEUX TERRAINS DE JEU */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Column 1: Entreprises */}
        <div className="bg-white p-12 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
          <div className="w-14 h-14 bg-petrol/5 rounded-2xl flex items-center justify-center text-petrol mb-6">
            <TrendingUp size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-petrol mb-4">Séminaires & CODIR</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Boostez la résilience, le leadership et la vision stratégique. Des interventions axées sur le ROI, la croissance et l'adaptation au changement. Idéal pour secouer les certitudes et aligner les équipes.
          </p>
        </div>

        {/* Column 2: Grandes Écoles */}
        <div className="bg-surface p-12 lg:p-20 flex flex-col justify-center">
          <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
            <Users size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-petrol mb-4">Programmes Master & Amphis</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Connectez vos étudiants à la réalité du marché. Des rôles modèles accessibles, entrepreneurs avant 30 ans ou dirigeants confirmés, qui inspirent la prochaine génération et comblent le fossé générationnel.
          </p>
        </div>
      </section>

      {/* 3. NOS TÊTES D'AFFICHE (The Roster) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-petrol mb-6">
              Ils ne racontent pas l'histoire, <br />
              <span className="text-accent">ils l'ont vécue.</span>
            </h2>
            <div className="h-1 w-24 bg-petrol mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Speaker 1: Baudry */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg bg-gray-100">
                <img 
                  src="https://picsum.photos/seed/man_portrait/800/1000" 
                  alt="Baudry Bahuna" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                
                {/* MISSION 2 : CORRECTION DES CARTES SPEAKERS (Dégradé Fort) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-2xl font-black uppercase tracking-tight drop-shadow-lg">BAUDRY BAHUNA</h3>
                </div>
              </div>
              <div>
                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Le Résilient</span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fondateur de Majubah Academy, Ex-Banquier, Auteur. L'expert du rebond entrepreneurial et de la finance de terrain. Il transforme l'échec en carburant.
                </p>
              </div>
            </div>

            {/* Speaker 2: Patrice Garande */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg bg-gray-100">
                <img 
                  src="https://picsum.photos/seed/coach_football/800/1000" 
                  alt="Patrice Garande" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                
                 {/* MISSION 2 : CORRECTION DES CARTES SPEAKERS (Dégradé Fort) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60 to-transparent opacity-90"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-2xl font-black uppercase tracking-tight drop-shadow-lg">PATRICE GARANDE</h3>
                </div>
              </div>
              <div>
                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Le Coach & Stratège Sportif</span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ancien buteur de l'équipe de France olympique et entraîneur emblématique de Ligue 1 (SM Caen). Consultant média reconnu. L'expert du management d'équipe sous haute pression et de la performance collective.
                </p>
              </div>
            </div>

            {/* Speaker 3: Clément */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg bg-gray-100">
                <img 
                  src="https://picsum.photos/seed/young_influencer/800/1000" 
                  alt="Clément" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                
                 {/* MISSION 2 : CORRECTION DES CARTES SPEAKERS (Dégradé Fort) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60 to-transparent opacity-90"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-2xl font-black uppercase tracking-tight drop-shadow-lg">CLÉMENT</h3>
                </div>
              </div>
              <div>
                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">L'Expert Viral & Événementiel</span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Entrepreneur avant 30 ans. Organisateur de conventions majeures (+7000 participants). Créateur de contenu suivi par +300k abonnés sur TikTok. Il sait engager les foules.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. POURQUOI MAJUBAH ? (Manifesto) */}
      <section className="py-24 bg-petrol text-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-3 rounded-full bg-white/10 mb-8">
            <Star size={32} className="text-accent" fill="currentColor" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest text-white/50">
            L'authenticité comme seule devise.
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            "Le monde n'a plus besoin de donneurs de leçons théoriques. Il a besoin de praticiens qui parlent avec leurs tripes, leurs chiffres et leurs communautés. <br/>
            <span className="text-accent">Nous garantissons l'impact.</span>"
          </p>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-6">
            Vous cherchez l'intervenant parfait pour votre prochain événement ?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discutons de votre audience (Corporate ou Étudiante) et trouvons le speaker qui fera la différence.
          </p>
          <button 
            onClick={() => onNavigate('b2b-audit')}
            className="bg-accent text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            CONTACTER LE BUREAU DES CONFÉRENCES <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};
