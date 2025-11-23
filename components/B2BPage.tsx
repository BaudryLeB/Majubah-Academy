
import React from 'react';
import { Building2, TrendingUp, FileCheck, Brain, Users, Mic, ArrowRight, CheckCircle, Target } from 'lucide-react';

interface B2BPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const B2BPage: React.FC<B2BPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-surface to-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol/5 text-petrol text-xs font-bold uppercase tracking-wider mb-6">
              <Building2 size={14} />
              <span>Solution Entreprise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-petrol">
              Ne formez plus vos équipes pour rien. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-accent">
                Déployez l'expertise d'élite.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Accédez à notre réseau de formateurs-experts certifiés. Nous allions leur expérience terrain à notre méthode neuropédagogique pour des résultats mesurables. Conformité Qualiopi garantie.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button 
                onClick={() => onNavigate('b2b-audit')}
                className="bg-accent text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                DEMANDER UN AUDIT DE VOS BESOINS
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <CheckCircle size={14} className="text-green-600" />
              Finançable OPCO / Budget Formation
            </p>
          </div>

          <div className="order-1 lg:order-2 relative h-full min-h-[400px]">
             {/* Abstract Corporate Visualization */}
             <div className="absolute top-0 right-0 w-3/4 h-full bg-petrol/5 rounded-3xl -z-10 transform rotate-3"></div>
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3]">
               <img 
                 src="https://picsum.photos/seed/corporate_meeting/800/600" 
                 alt="Corporate Training" 
                 className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur border-t border-gray-100 p-6 flex justify-between items-center">
                 <div>
                   <p className="text-2xl font-bold text-petrol">+92%</p>
                   <p className="text-xs text-gray-500 uppercase">Taux de rétention</p>
                 </div>
                 <div className="h-8 w-px bg-gray-200"></div>
                 <div>
                   <p className="text-2xl font-bold text-petrol">450+</p>
                   <p className="text-xs text-gray-500 uppercase">Experts Certifiés</p>
                 </div>
                 <div className="h-8 w-px bg-gray-200"></div>
                 <div>
                   <p className="text-2xl font-bold text-petrol">100%</p>
                   <p className="text-xs text-gray-500 uppercase">Qualiopi</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. LE CONSTAT (Problem) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-6">
              Le problème des formations classiques.
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vos collaborateurs s'ennuient devant des slides datés. Les taux de complétion sont faibles, et l'impact sur le business est nul.
            </p>
            <p className="text-xl font-medium text-petrol">
              Vous dépensez votre budget formation à perte.
            </p>
          </div>
          <div className="bg-surface rounded-3xl p-10 flex items-center justify-center relative overflow-hidden">
             {/* Abstract chart going down */}
             <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 L100 0 L100 100 Z" fill="#eb5436" />
                </svg>
             </div>
             <div className="relative z-10 text-center">
               <TrendingUp size={64} className="text-gray-400 mx-auto mb-4 transform rotate-180" />
               <p className="text-gray-500 font-medium">ROI Inexistant</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. LA SOLUTION MAJUBAH (3 Piliers) */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">
              L'Alliance de l'Expertise Terrain et de la Science Pédagogique.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-petrol/20 transition-all duration-300">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-petrol mb-3 uppercase tracking-wide">Des Experts, pas des théoriciens</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nos intervenants (La Meute) sont des professionnels en activité (Banque, Immo, Tech, Retail...). Ils enseignent le réel, pas ce qu'on lit dans les livres.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-petrol/20 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-lg font-bold text-petrol mb-3 uppercase tracking-wide">Neuropédagogie & IA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous utilisons les neurosciences pour captiver l'attention et l'IA pour personnaliser les parcours. Vos équipes retiennent vraiment, et appliquent dès le lendemain.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-petrol/20 transition-all duration-300">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol mb-6">
                <FileCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-petrol mb-3 uppercase tracking-wide">Sérénité Administrative</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous sommes un organisme certifié Qualiopi. Nous gérons toute la paperasse (conventions, émargements, OPCO). Zéro charge mentale pour vos équipes RH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATALOGUE (Bento Box) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">
              Des solutions sur-mesure pour vos enjeux.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            
            {/* Box 1 - Regulatory (Big) */}
            <div className="md:col-span-2 bg-petrol text-white rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10">
                 <div className="bg-white/10 w-fit p-2 rounded-lg mb-4">
                   <Target size={24} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">FORMATIONS RÉGLEMENTAIRES & MÉTIER</h3>
                 <p className="text-gray-300 max-w-lg">
                   DDA, IOBSP, Crédit, Immobilier, BTP... Des parcours clés en main animés par nos spécialistes pour assurer votre conformité légale et opérationnelle.
                 </p>
               </div>
               <div className="relative z-10 flex gap-2 mt-4">
                 <span className="text-xs border border-white/20 px-2 py-1 rounded hover:bg-white/10 transition">Finance</span>
                 <span className="text-xs border border-white/20 px-2 py-1 rounded hover:bg-white/10 transition">Immobilier</span>
                 <span className="text-xs border border-white/20 px-2 py-1 rounded hover:bg-white/10 transition">Assurance</span>
               </div>
            </div>

            {/* Box 2 - Skills (Accent) */}
            <div className="bg-accent text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-glow transition-all">
               <div className="relative z-10">
                 <div className="bg-white/20 w-fit p-2 rounded-lg mb-4">
                   <TrendingUp size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-3">SKILLS & DIGITALISATION</h3>
                 <p className="text-white/90 text-sm">
                   LinkedIn Selling, Intégration de l'IA, Management d'équipe, QVT. Boostez la productivité.
                 </p>
               </div>
               <ArrowRight className="self-end group-hover:translate-x-2 transition-transform" />
            </div>

            {/* Box 3 - Conferences (Light) */}
            <div className="md:col-span-3 lg:col-span-1 bg-surface border border-gray-100 rounded-3xl p-8 flex flex-col justify-between group hover:border-petrol/20 transition-colors">
               <div>
                 <div className="bg-petrol/5 w-fit p-2 rounded-lg mb-4 text-petrol">
                   <Mic size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-petrol mb-3">CONFÉRENCES & KEYNOTES VIP</h3>
                 <p className="text-gray-600 text-sm">
                   Inspirez vos équipes avec nos speakers de haut vol (Résilience, Gestion de crise, Leadership) pour vos séminaires.
                 </p>
               </div>
               <div className="mt-4">
                 <button 
                    onClick={() => onNavigate('speaker')}
                    className="text-xs font-bold text-petrol border-b border-petrol/20 pb-0.5 group-hover:border-petrol transition-all cursor-pointer focus:outline-none"
                 >
                   Voir les thématiques →
                 </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LE PROCESSUS */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">Un déploiement simple en 3 étapes.</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0 transform translate-y-4"></div>

            {/* Step 1 */}
            <div className="relative z-10 bg-surface md:bg-transparent text-center md:text-left">
              <div className="w-16 h-16 mx-auto md:mx-0 bg-white border-4 border-surface shadow-sm rounded-full flex items-center justify-center text-xl font-bold text-petrol mb-6 relative">
                1
                <div className="absolute inset-0 border-2 border-petrol rounded-full opacity-10"></div>
              </div>
              <h3 className="text-xl font-bold text-petrol mb-2">Cadrage</h3>
              <p className="text-gray-600 text-sm">
                RDV avec notre direction pédagogique pour définir vos objectifs stratégiques et opérationnels.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-surface md:bg-transparent text-center md:text-left">
              <div className="w-16 h-16 mx-auto md:mx-0 bg-white border-4 border-surface shadow-sm rounded-full flex items-center justify-center text-xl font-bold text-accent mb-6 relative">
                2
                <div className="absolute inset-0 border-2 border-accent rounded-full opacity-20"></div>
              </div>
              <h3 className="text-xl font-bold text-petrol mb-2">Sélection</h3>
              <p className="text-gray-600 text-sm">
                Nous missionnons l'expert idéal de notre "Meute" pour votre besoin spécifique parmi nos 450+ profils.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-surface md:bg-transparent text-center md:text-left">
              <div className="w-16 h-16 mx-auto md:mx-0 bg-white border-4 border-surface shadow-sm rounded-full flex items-center justify-center text-xl font-bold text-petrol mb-6 relative">
                3
                <div className="absolute inset-0 border-2 border-petrol rounded-full opacity-10"></div>
              </div>
              <h3 className="text-xl font-bold text-petrol mb-2">Déploiement</h3>
              <p className="text-gray-600 text-sm">
                Formation (présentiel ou distanciel) et gestion administrative complète par Majubah (Conventions, BPF...).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-24 bg-petrol text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à élever le niveau de vos équipes ?</h2>
          <p className="text-gray-300 text-lg mb-10">
            Parlons de vos objectifs de formation lors d'une consultation gratuite.
          </p>
          <button 
            onClick={() => onNavigate('b2b-audit')}
            className="bg-accent text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            PRENDRE RDV AVEC UN CONSEILLER ENTREPRISE <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};
