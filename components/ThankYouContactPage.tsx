
import React from 'react';
import { CheckCircle, Clock, Phone } from 'lucide-react';

export const ThankYouContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 animate-fade-in font-sans">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-sm border border-gray-200 p-10 md:p-14 text-center">
        
        {/* Corporate Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-petrol/5 rounded-full flex items-center justify-center">
            <CheckCircle className="text-petrol w-10 h-10" strokeWidth={2} />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl font-bold text-petrol mb-4">
          Message bien reçu.
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Merci de nous avoir contactés. Votre demande a bien été enregistrée par nos services.
        </p>

        {/* Service Engagement Block - Crucial for Qualiopi */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10 text-left border border-gray-100 relative">
          <div className="flex items-center gap-2 mb-4">
             <Clock size={18} className="text-petrol" />
             <h2 className="text-sm font-bold text-petrol uppercase tracking-wider">
              Notre engagement
            </h2>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            Que votre demande concerne une information générale ou une réclamation, notre équipe s'engage à l'analyser et à vous apporter une première réponse sous un délai maximum de <strong>48 heures ouvrées</strong>.
          </p>
        </div>

        {/* Additional Info */}
        <div className="text-sm text-gray-500 border-t border-gray-100 pt-8">
          <p className="mb-2 flex items-center justify-center gap-2">
            <Phone size={14} /> Si votre demande nécessite une attention immédiate :
          </p>
          <p className="font-bold text-petrol text-lg">06 89 51 30 03</p>
          
          <p className="mt-8 font-medium text-petrol">L'équipe Majubah Academy.</p>
        </div>

      </div>
    </div>
  );
};
