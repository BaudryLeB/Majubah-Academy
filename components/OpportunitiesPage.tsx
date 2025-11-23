
import React from 'react';
import { Briefcase, Building, HardHat, Cpu, Mic, Ticket, ArrowRight, CheckCircle, Euro, Star } from 'lucide-react';

interface OpportunitiesPageProps {
  onNavigate: (page: string) => void;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-surface to-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol/5 text-petrol text-xs font-bold uppercase tracking-wider mb-6">
            <Briefcase size={14} />
            <span>L'Agence Majubah</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-petrol">
            Le terrain de jeu de la Meute.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez des exemples concrets de missions confiées à nos formateurs certifiés. Du réglementaire au sur-mesure, nous plaçons votre expertise là où elle a le plus de valeur.
          </p>
        </div>
      </section>

      {/* 2. LE SOCLE RÉGLEMENTAIRE (Missions Récurrentes) */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-petrol mb-4">Les missions standards (Volume & Récurrence).</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border-l-8 border-accent overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-petrol/10 text-petrol text-xs font-bold px-2 py-1 rounded uppercase">Banque & Assurance</span>
                  <span className="bg-petrol/10 text-petrol text-xs font-bold px-2 py-1 rounded uppercase">Réglementaire</span>
                </div>
                <h3 className="text-2xl font-bold text-petrol mb-3">Parcours Certifiants DDA & IOBSP</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Animation de formations obligatoires pour les réseaux de courtiers et assureurs. Formats hybrides (e-learning tutoré + présentiel).
                </p>
                <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><CheckCircle size={16} className="text-accent" /> Contrats Cadres</span>
                  <span className="flex items-center gap-1"><CheckCircle size={16} className="text-accent" /> Supports Fournis</span>
                </div>
              </div>

              <div className="w-full md:w-auto bg-surface p-6 rounded-xl border border-gray-100 text-center min-w-[250px]">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Potentiel Facturation / Jour</p>
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-accent mb-1">
                  <Euro size={28} />
                  <span>800 - 1200</span>
                </div>
                <p className="text-xs text-petrol font-bold bg-white inline-block px-2 py-1 rounded border border-gray-200 mt-2">
                  Votre part : 70%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES EXPERTISES POINTUES (Sur-mesure) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-petrol mb-4">Les missions expertes sur-mesure.</h2>
            <p className="text-gray-600">Quand nos clients ont des problématiques spécifiques, nous chassons l'expert idéal dans la Meute.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Carte 1: Immo */}
            <div className="bg-surface p-8 rounded-2xl border border-transparent hover:border-petrol/20 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-petrol mb-6 group-hover:scale-110 transition-transform">
                <Building size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Immobilier</h4>
              <h3 className="text-xl font-bold text-petrol mb-4">INVESTISSEMENT IMMOBILIER</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Formation "Investissement Locatif Haut Rendement" pour investisseurs privés. Stratégies fiscales et rénovation.
              </p>
              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-petrol/10 rounded-full flex items-center justify-center text-xs font-bold text-petrol">S</div>
                <div>
                  <p className="text-xs font-bold text-petrol">Expert Majubah</p>
                  <p className="text-xs text-gray-500">Animée par Sarah</p>
                </div>
              </div>
            </div>

            {/* Carte 2: BTP */}
            <div className="bg-surface p-8 rounded-2xl border border-transparent hover:border-petrol/20 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-petrol mb-6 group-hover:scale-110 transition-transform">
                <HardHat size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">BTP & Marchés Publics</h4>
              <h3 className="text-xl font-bold text-petrol mb-4">APPELS D'OFFRES</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Formation "Gagner vos marchés publics et structurer vos mémoires techniques" pour PME du bâtiment.
              </p>
              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-petrol/10 rounded-full flex items-center justify-center text-xs font-bold text-petrol">R</div>
                <div>
                  <p className="text-xs font-bold text-petrol">Expert Majubah</p>
                  <p className="text-xs text-gray-500">Animée par Raphaël</p>
                </div>
              </div>
            </div>

            {/* Carte 3: Tech */}
            <div className="bg-surface p-8 rounded-2xl border border-transparent hover:border-petrol/20 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-petrol mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tech / Finance</h4>
              <h3 className="text-xl font-bold text-petrol mb-4">IA & MÉTIERS DU CHIFFRE</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Masterclass "L'IA au service des métiers du chiffre (Experts-comptables, DAF)". Automatisation et analyse.
              </p>
              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-petrol/10 rounded-full flex items-center justify-center text-xs font-bold text-petrol">G</div>
                <div>
                  <p className="text-xs font-bold text-petrol">Expert Majubah</p>
                  <p className="text-xs text-gray-500">Animée par Grégory</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LE SPEAKER BUREAU (Conférences) */}
      <section className="py-24 bg-petrol text-white px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Mic size={14} />
              <span>Prestige</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Le Speaker Bureau. <br />
              <span className="text-gray-400 text-2xl font-normal">Conférences & Keynotes.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Nous propulsons nos meilleurs orateurs sur les scènes des grandes écoles et des séminaires d'entreprises. Une visibilité unique pour votre personal branding.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
               <span className="flex items-center gap-2"><Star size={16} className="text-accent" /> Leadership</span>
               <span className="flex items-center gap-2"><Star size={16} className="text-accent" /> Résilience</span>
               <span className="flex items-center gap-2"><Star size={16} className="text-accent" /> Innovation</span>
            </div>
          </div>

          <div className="relative">
             {/* Ticket / Spotlight Effect */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
             
             <div className="bg-white text-petrol rounded-xl p-1 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 relative">
                   {/* Notch */}
                   <div className="absolute -left-3 top-1/2 w-6 h-6 bg-petrol rounded-full transform -translate-y-1/2"></div>
                   <div className="absolute -right-3 top-1/2 w-6 h-6 bg-petrol rounded-full transform -translate-y-1/2"></div>

                   <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2">
                        <Ticket className="text-accent" />
                        <span className="font-bold uppercase tracking-wider text-sm">Mission Confirmée</span>
                      </div>
                      <span className="text-xs font-bold text-gray-400">REF-SPK-2025</span>
                   </div>

                   <h3 className="text-2xl font-black uppercase italic mb-2">"SCHOOL SPEAKER"</h3>
                   <div className="space-y-4 mb-6">
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                         <span className="text-gray-500 text-sm">Lieu</span>
                         <span className="font-bold">E2SE Business School</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                         <span className="text-gray-500 text-sm">Thème</span>
                         <span className="font-bold text-right text-sm">Retour d'expérience entrepreneurial et Business Model</span>
                      </div>
                   </div>

                   <div className="flex items-center gap-3 bg-surface p-3 rounded-lg">
                      <div className="w-10 h-10 bg-petrol text-white rounded-full flex items-center justify-center font-bold">C</div>
                      <div>
                         <p className="text-xs text-gray-500 uppercase">Intervenant Majubah</p>
                         <p className="font-bold text-sm">Animée par Clément</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-6">Vous avez une expertise unique à proposer ?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Rejoignez l'Académie. Une fois certifié, nous vous aidons à packager votre offre et à la proposer à notre réseau de clients.
          </p>
          <button 
            onClick={() => onNavigate('apply')}
            className="bg-accent text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            POSTULER À L'ACADÉMIE <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};
