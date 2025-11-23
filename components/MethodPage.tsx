import React from 'react';
import { Brain, Cpu, TrendingUp, Monitor, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface MethodPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const MethodPage: React.FC<MethodPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-surface to-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-petrol mb-8 leading-tight">
            Notre Méthode : L'Alliance de <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-accent">
              l'Expertise, de la Science et de la Technologie.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nous ne formons pas comme hier. Découvrez l'ingénierie pédagogique qui permet à des experts débordés de devenir des formateurs impactants en 3 mois.
          </p>
        </div>
      </section>

      {/* 2. LES 3 PILIERS (Triangle de la Performance) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">Le Triangle de la Performance Pédagogique</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1: NEUROPÉDAGOGIE */}
            <div className="group p-10 rounded-3xl bg-surface border border-transparent hover:border-gray-100 hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold text-petrol mb-4">NEUROPÉDAGOGIE (La Science)</h3>
              <p className="text-gray-600 leading-relaxed">
                Fini les formations ennuyeuses. Nous utilisons les neurosciences pour capter l'attention, susciter l'émotion et ancrer les apprentissages durablement. Vos élèves ne décrocheront pas.
              </p>
            </div>

            {/* Carte 2: INTELLIGENCE ARTIFICIELLE */}
            <div className="group p-10 rounded-3xl bg-petrol text-white shadow-xl transform md:-translate-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">INTELLIGENCE ARTIFICIELLE (L'Accélérateur)</h3>
              <p className="text-gray-300 leading-relaxed">
                Gagnez 70% de temps sur la conception. Nous vous apprenons à utiliser l'IA pour structurer vos plans de cours, générer des quiz et créer des supports visuels en un temps record.
              </p>
            </div>

            {/* Carte 3: BUSINESS MODEL */}
            <div className="group p-10 rounded-3xl bg-surface border border-transparent hover:border-gray-100 hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-petrol mb-4">BUSINESS MODEL (La Rentabilité)</h3>
              <p className="text-gray-600 leading-relaxed">
                Un bon formateur doit savoir vivre de son art. Nous vous enseignons comment packager votre offre, fixer vos prix et vendre votre expertise à haut tarif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LE PARCOURS EN 5 ÉTAPES */}
      <section className="py-24 bg-surface px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">Votre feuille de route vers la certification</h2>
            <p className="text-gray-600">Un programme intensif de 3 mois pour passer d'expert à formateur d'élite.</p>
          </div>

          <div className="relative">
            {/* Ligne verticale centrale (desktop) / gauche (mobile) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-petrol/20 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                { step: "01", title: "FONDATIONS", desc: "Extraire votre 'Zone de Génie' et définir votre positionnement unique." },
                { step: "02", title: "CONCEPTION (IA)", desc: "Structurer votre programme et vos scénarios pédagogiques avec l'aide de l'IA." },
                { step: "03", title: "ANIMATION (Neuro)", desc: "Maîtriser l'art de transmettre en présentiel et à distance (Zoom) avec impact." },
                { step: "04", title: "LÉGAL & QUALITÉ", desc: "Comprendre le cadre Qualiopi et préparer votre certification RS6977." },
                { step: "05", title: "LANCEMENT & MEUTE", desc: "Créer votre offre commerciale et accéder aux opportunités du réseau Majubah." }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Point central */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-accent rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="inline-block text-4xl font-black text-petrol/5 mb-2">{item.step}</span>
                      <h3 className="text-lg font-bold text-petrol mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. L'EXPÉRIENCE BLENDED */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-6">Le meilleur des deux mondes.</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Un format <strong>Blended Learning</strong> pensé pour les actifs. Nous savons que votre temps est précieux. C'est pourquoi nous avons conçu une expérience flexible mais rigoureuse.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Monitor className="text-accent mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-petrol">Campus Numérique 24/7</h4>
                    <p className="text-sm text-gray-500">Accès illimité aux modules vidéos, templates Notion et prompts IA.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="text-accent mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-petrol">Coaching Live Hebdomadaire</h4>
                    <p className="text-sm text-gray-500">Séances Zoom en groupe pour pratiquer, recevoir du feedback et débloquer vos points durs.</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('apply')}
                  className="bg-petrol text-white px-8 py-3 rounded-lg font-bold hover:bg-petrol/90 transition-colors"
                >
                  Candidater à la prochaine promo
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-3"></div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-video">
                <img 
                  src="https://picsum.photos/seed/tech_meeting/800/600" 
                  alt="Digital Learning Experience" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-petrol">LIVE REPLAY DISPONIBLE</span>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};