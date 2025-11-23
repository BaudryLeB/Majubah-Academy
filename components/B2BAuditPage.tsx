
import React from 'react';
import { Check, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';

interface B2BAuditPageProps {
  onNavigate: (page: string) => void;
}

export const B2BAuditPage: React.FC<B2BAuditPageProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      onNavigate('thank-you-audit');
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans animate-fade-in">
      {/* LEFT COLUMN (Value & Assurance) */}
      <div className="w-full md:w-5/12 bg-petrol text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between order-1 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div>
           {/* Logo */}
           <div className="text-xl font-bold tracking-tight mb-12 cursor-default">
             MAJUBAH <span className="font-light">ACADEMY</span>
           </div>

           <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
             Parlons de vos enjeux de performance.
           </h1>
           
           <p className="text-gray-300 text-lg mb-12 leading-relaxed">
             Remplissez ce formulaire pour qu'un de nos directeurs pédagogiques prépare votre audit personnalisé. Réponse sous 24h ouvrées.
           </p>

           <div className="space-y-8">
             <div className="flex items-start gap-4">
               <div className="bg-accent/20 p-1.5 rounded-lg text-accent mt-0.5 flex-shrink-0">
                 <Briefcase size={20} strokeWidth={2} />
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Expertise Terrain</h3>
                 <p className="text-gray-400 text-sm">Nous mobilisons l'expert exact de notre réseau pour votre secteur.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="bg-accent/20 p-1.5 rounded-lg text-accent mt-0.5 flex-shrink-0">
                 <ShieldCheck size={20} strokeWidth={2} />
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Conformité Totale</h3>
                 <p className="text-gray-400 text-sm">Organisme Qualiopi. Financements OPCO sécurisés.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="bg-accent/20 p-1.5 rounded-lg text-accent mt-0.5 flex-shrink-0">
                 <Check size={20} strokeWidth={3} />
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Déploiement Agile</h3>
                 <p className="text-gray-400 text-sm">Formation présentielle, distancielle ou hybride, de 5 à 500 collaborateurs.</p>
               </div>
             </div>
           </div>
        </div>

        <div className="mt-12 md:mt-0 pt-12 border-t border-white/10 flex items-center gap-4">
          <div className="bg-white/10 px-3 py-2 rounded border border-white/10">
             <span className="block text-xs font-bold text-white uppercase tracking-wider">Qualiopi</span>
          </div>
          <span className="text-xs text-gray-400 font-medium">Partenaire des Écoles de Commerce & Entreprises</span>
        </div>
      </div>

      {/* RIGHT COLUMN (Form) */}
      <div className="w-full md:w-7/12 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 overflow-y-auto">
        <div className="max-w-xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-petrol mb-8">Demande d'Audit Gratuit</h2>

          {/* <!-- FORM HANDLER: INTEGRATE TYPEFORM, TALLY OR BACKEND ENDPOINT HERE --> */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Section: Coordonnées */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2 mb-4">Vos Coordonnées</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="firstname" className="text-sm font-medium text-gray-700">Prénom</label>
                  <input 
                    type="text" 
                    id="firstname" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                    placeholder="Sophie"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastname" className="text-sm font-medium text-gray-700">Nom</label>
                  <input 
                    type="text" 
                    id="lastname" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                    placeholder="Martin"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Professionnel <span className="text-accent">*</span></label>
                    <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                    placeholder="s.martin@entreprise.com"
                    required
                    />
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Téléphone Direct</label>
                    <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                    placeholder="01 23 45 67 89"
                    required
                    />
                </div>
              </div>
              
              <div className="space-y-1.5">
                  <label htmlFor="jobtitle" className="text-sm font-medium text-gray-700">Poste / Fonction</label>
                  <input 
                  type="text" 
                  id="jobtitle" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                  placeholder="DRH, CEO, Responsable Formation..."
                  required
                  />
              </div>
            </div>

            {/* Section: Entreprise */}
            <div className="space-y-4 pt-4">
               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2 mb-4">Votre Entreprise</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Nom de l'entreprise</label>
                        <input 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-300"
                        placeholder="Tech Solutions SAS"
                        required
                        />
                    </div>
                     <div className="space-y-1.5">
                        <label htmlFor="employees" className="text-sm font-medium text-gray-700">Effectif à former</label>
                        <div className="relative">
                            <select 
                            id="employees" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white text-gray-700"
                            defaultValue=""
                            required
                            >
                            <option value="" disabled>Sélectionnez une taille</option>
                            <option value="<10">&lt; 10 collaborateurs</option>
                            <option value="10-50">10 - 50 collaborateurs</option>
                            <option value="50-250">50 - 250 collaborateurs</option>
                            <option value=">250">&gt; 250 collaborateurs</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
               </div>

                <div className="space-y-1.5">
                    <label htmlFor="needs" className="text-sm font-medium text-gray-700">Votre Besoin Principal</label>
                    <div className="relative">
                        <select 
                        id="needs" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white text-gray-700"
                        defaultValue=""
                        required
                        >
                        <option value="" disabled>Type de formation recherchée</option>
                        <option value="reglementaire">Formation Réglementaire / Métier</option>
                        <option value="softskills">Soft Skills & Management</option>
                        <option value="digital">Digitalisation & IA</option>
                        <option value="conference">Conférence / Keynote</option>
                        <option value="autre">Autre / Plan de formation complet</option>
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                 <div className="space-y-1.5">
                    <label htmlFor="timing" className="text-sm font-medium text-gray-700">Délai souhaité</label>
                    <div className="relative">
                        <select 
                        id="timing" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white text-gray-700"
                        defaultValue=""
                        required
                        >
                        <option value="" disabled>Quand souhaitez-vous démarrer ?</option>
                        <option value="urgent">Urgent (&lt; 1 mois)</option>
                        <option value="trimestre">Ce trimestre</option>
                        <option value="moyen_terme">Projet à moyen terme</option>
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-accent text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mt-8"
            >
              SOUMETTRE MA DEMANDE D'AUDIT <ArrowRight size={20} />
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4 leading-normal">
              En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe B2B. <br/> Vos données sont confidentielles.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
