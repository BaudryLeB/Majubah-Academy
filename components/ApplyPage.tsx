import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface ApplyPageProps {
  onNavigate: (page: string) => void;
}

export const ApplyPage: React.FC<ApplyPageProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      onNavigate('thank-you');
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans animate-fade-in">
      {/* LEFT COLUMN (Value & Assurance) */}
      <div className="w-full md:w-1/2 bg-petrol text-white p-8 md:p-12 lg:p-20 flex flex-col justify-between order-1">
        <div>
           {/* Logo */}
           <div className="text-xl font-bold tracking-tight mb-12 md:mb-20">
             MAJUBAH <span className="font-light">ACADEMY</span>
           </div>

           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
             Dernière étape avant de rejoindre l'élite.
           </h1>
           
           <p className="text-gray-300 text-lg mb-12 leading-relaxed">
             Vérifions ensemble votre éligibilité au programme, au financement CPF et aux opportunités de la Meute.
           </p>

           <ul className="space-y-6">
             {[
               "Audit gratuit de votre profil expert par notre équipe.",
               "Accès prioritaire aux financements (CPF, OPCO).",
               "Opportunité d'intégrer notre réseau de sous-traitance."
             ].map((item, idx) => (
               <li key={idx} className="flex items-start gap-4">
                 <div className="bg-accent/20 p-1 rounded-full text-accent mt-0.5 flex-shrink-0">
                   <Check size={16} strokeWidth={3} />
                 </div>
                 <span className="text-lg leading-snug">{item}</span>
               </li>
             ))}
           </ul>
        </div>

        <div className="mt-12 md:mt-0 pt-12 border-t border-white/10">
          <p className="italic text-lg text-gray-300 mb-4 leading-relaxed">
            "L'entretien de positionnement a tout changé. J'ai compris comment valoriser mes 15 ans d'expérience."
          </p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-sm">L</div>
            <div>
              <p className="font-bold text-white text-sm">Laurent</p>
              <p className="text-xs text-gray-400">Expert Crédit & Membre de la Meute</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (Form) */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-center order-2">
        <div className="max-w-lg mx-auto w-full">
          <h2 className="text-3xl font-bold text-petrol mb-8">Déposer ma candidature</h2>

          {/* <!-- FORM HANDLER: INTEGRATE TYPEFORM, TALLY OR BACKEND ENDPOINT HERE --> */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm font-medium text-gray-700">Prénom</label>
                <input 
                  type="text" 
                  id="firstname" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                  placeholder="Jean"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastname" className="text-sm font-medium text-gray-700">Nom</label>
                <input 
                  type="text" 
                  id="lastname" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                  placeholder="Dupont"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Professionnel</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                placeholder="jean.dupont@entreprise.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Téléphone mobile</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                placeholder="06 12 34 56 78"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="situation" className="text-sm font-medium text-gray-700">Situation actuelle</label>
              <div className="relative">
                <select 
                  id="situation" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white text-gray-700"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Sélectionnez votre situation</option>
                  <option value="salarie">Salarié</option>
                  <option value="independant">Indépendant / Freelance</option>
                  <option value="demandeur">Demandeur d'emploi</option>
                  <option value="autre">Autre</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-medium text-gray-700">Lien profil LinkedIn <span className="text-gray-400 font-normal">(Optionnel)</span></label>
              <input 
                type="url" 
                id="linkedin" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                placeholder="https://linkedin.com/in/jeandupont"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-accent text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mt-6"
            >
              VÉRIFIER MON ÉLIGIBILITÉ <ArrowRight size={20} />
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Vos données sont confidentielles. Traitement sous 24h ouvrées.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};