
import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

interface ContactSectionProps {
  onNavigate?: (page: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigate) {
      // Simulate API call
      setTimeout(() => {
        onNavigate('thank-you-contact');
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Text & Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-6">
              Besoin de renseignements ?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Pour tous renseignements ou réclamations, n'hésitez pas à nous écrire en remplissant le formulaire ci-dessous. Notre équipe s'engage à vous répondre sous 48h ouvrées.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-petrol">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-accent">
                  <Mail size={20} />
                </div>
                <span className="font-medium">contact@majubah.com</span>
              </div>
              <div className="flex items-center gap-4 text-petrol">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-accent">
                  <Phone size={20} />
                </div>
                <span className="font-medium">06 89 51 30 03</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-soft border border-gray-100">
            {/* <!-- FORM HANDLER: INTEGRATE BACKEND OR FORM SERVICE HERE --> */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="fullname" className="text-sm font-bold text-petrol">Nom complet <span className="text-accent">*</span></label>
                <input 
                  type="text" 
                  id="fullname" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all placeholder:text-gray-300"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-bold text-petrol">Email <span className="text-accent">*</span></label>
                <input 
                  type="email" 
                  id="contact-email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all placeholder:text-gray-300"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-petrol">Objet de la demande <span className="text-accent">*</span></label>
                <div className="relative">
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all appearance-none bg-white text-gray-700"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Sélectionnez un objet</option>
                    <option value="info">Demande d'information</option>
                    <option value="partenariat">Partenariat / Presse</option>
                    <option value="reclamation">Réclamation / Qualité</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-petrol">Message <span className="text-accent">*</span></label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all placeholder:text-gray-300"
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                ENVOYER MA DEMANDE <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
