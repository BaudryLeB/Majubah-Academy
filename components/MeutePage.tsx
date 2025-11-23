import React from 'react';
import { Shield, Briefcase, Users, Mic, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

interface MeutePageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const MeutePage: React.FC<MeutePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-petrol text-white px-6 overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full border-[40px] border-white/20"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full border-[20px] border-white/20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Ne formez plus jamais seul. <br />
            <span className="text-accent">Rejoignez l'Élite.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            La Meute est le collectif des formateurs certifiés par Majubah Academy. Nous mutualisons nos forces, notre label Qualiopi et nos opportunités d'affaires pour dominer le marché ensemble.
          </p>
          <button 
            onClick={() => onNavigate('apply')}
            className="bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
          >
            CANDIDATER POUR REJOINDRE LE RÉSEAU
          </button>
        </div>
      </section>

      {/* 2. LE BOUCLIER ADMINISTRATIF (Portage) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Le Bouclier Administratif
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-petrol mb-6">
              Votre expertise. Notre infrastructure. <br/>Zéro friction.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              La phobie de l'audit Qualiopi vous paralyse ? Oubliez-la. En rejoignant la Meute, vous intervenez sous le label et le NDA de Majubah Academy. 
            </p>
            <div className="bg-surface p-6 rounded-2xl border border-gray-100 mb-8">
              <p className="text-petrol font-medium">
                "Nous gérons Digiforma, les conventions, les émargements et la conformité légale. Vous n'avez qu'à animer et facturer."
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-petrol rounded-full opacity-5 blur-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                 <Shield size={200} strokeWidth={1} className="text-petrol fill-surface" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-full shadow-lg border border-gray-100">
                      <span className="text-4xl font-black text-accent">Q</span>
                   </div>
                 </div>
                 {/* Floating Badges */}
                 <div className="absolute top-10 right-0 bg-white shadow-soft px-3 py-1 rounded-full text-xs font-bold text-gray-500 border border-gray-100">
                   Digiforma Ready
                 </div>
                 <div className="absolute bottom-10 left-0 bg-white shadow-soft px-3 py-1 rounded-full text-xs font-bold text-gray-500 border border-gray-100">
                   Audit Free
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. L'AGENCE DE TALENTS */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">
              Un accélérateur de business pour votre activité.
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white p-8 rounded-2xl border border-transparent hover:border-petrol/20 hover:shadow-soft transition-all duration-300 group">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol mb-6 group-hover:bg-petrol group-hover:text-white transition-colors">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-petrol mb-3">MISSIONS APPORTÉES</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous signons des contrats cadres avec des grands comptes (Banques, Assurances...). Nous vous envoyons en mission clé en main.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white p-8 rounded-2xl border border-transparent hover:border-petrol/20 hover:shadow-soft transition-all duration-300 group">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol mb-6 group-hover:bg-petrol group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-petrol mb-3">FORCE DE FRAPPE (AO)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous répondons aux gros Appels d'Offres publics et privés en équipe. Accédez à des marchés impossibles à gagner seul.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white p-8 rounded-2xl border border-transparent hover:border-petrol/20 hover:shadow-soft transition-all duration-300 group">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol mb-6 group-hover:bg-petrol group-hover:text-white transition-colors">
                <Mic size={24} />
              </div>
              <h3 className="text-xl font-bold text-petrol mb-3">SPEAKER BUREAU</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vous avez une aura sur scène ? Nous vous représentons pour des conférences et keynotes en entreprises et écoles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LE DEAL */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-petrol mb-12">Un partenariat juste et transparent.</h2>
          
          <div className="bg-surface border-2 border-petrol rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-petrol to-accent"></div>
            
            <h3 className="text-2xl font-bold text-petrol mb-8 flex items-center justify-center gap-3">
              <Handshake className="text-accent" /> Le Modèle "Gagnant-Gagnant"
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <span className="block text-4xl font-bold text-accent mb-2">70%</span>
                <span className="text-sm font-bold text-petrol uppercase tracking-wider">Pour Vous</span>
                <p className="text-xs text-gray-500 mt-2">Vous conservez la majorité du Chiffre d'Affaires de vos interventions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <span className="block text-4xl font-bold text-petrol mb-2">30%</span>
                <span className="text-sm font-bold text-petrol uppercase tracking-wider">Pour Majubah</span>
                <p className="text-xs text-gray-500 mt-2">Couvre les frais de structure (Digiforma, Qualiopi), l'apport d'affaires et le branding.</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-medium">
              Pas de frais d'entrée cachés. Nous gagnons seulement si vous gagnez.
            </p>
          </div>
        </div>
      </section>

      {/* 5. L'ESPRIT DE CORPS */}
      <section className="py-20 bg-petrol text-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Plus qu'un réseau, une famille professionnelle.</h2>
          <p className="text-xl text-gray-300 leading-relaxed italic">
            "Briser la solitude de l'indépendant. Échanger les bonnes pratiques. Se soutenir en cas de coup dur. C'est ça, l'esprit Majubah."
          </p>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">La Meute est sélective. Êtes-vous prêt ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            L'accès est réservé en priorité aux diplômés de l'Académie et sur dossier pour les experts externes.
          </p>
          <button 
            onClick={() => onNavigate('apply')}
            className="bg-accent text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            DÉPOSER MA CANDIDATURE <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};