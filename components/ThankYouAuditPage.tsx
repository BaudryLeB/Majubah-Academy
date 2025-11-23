
import React from 'react';
import { CheckCircle, FileText, Phone, Mail } from 'lucide-react';

export const ThankYouAuditPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 animate-fade-in font-sans">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-sm border border-gray-200 p-10 md:p-14 text-center">
        
        {/* Corporate Header / Icon */}
        <div className="mb-8 flex flex-col items-center">
          <div className="text-xl font-bold tracking-tight text-petrol mb-6">
             MAJUBAH <span className="font-light">ACADEMY</span>
          </div>
          <div className="w-16 h-16 bg-petrol/5 rounded-full flex items-center justify-center">
            <CheckCircle className="text-petrol w-8 h-8" strokeWidth={2} />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-petrol mb-3">
          Demande d'Audit reçue avec succès.
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Merci de votre intérêt pour les solutions de formation Majubah Academy.
        </p>

        {/* Process Steps (Corporate Style) */}
        <div className="bg-surface/50 rounded-xl p-8 mb-10 text-left border border-gray-100">
          <h2 className="text-xs font-bold text-petrol uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
            Prochaines étapes
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-petrol">
                <FileText size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-petrol text-sm mb-1">Analyse du besoin</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Notre équipe "Grands Comptes & Entreprises" analyse votre demande et vos besoins spécifiques.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-petrol">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-petrol text-sm mb-1">Prise de contact (24h ouvrées)</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Un de nos directeurs pédagogiques vous recontactera pour un premier échange de cadrage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Footer */}
        <div className="text-sm text-gray-500 border-t border-gray-100 pt-8">
          <p className="mb-2">
            Pour toute demande urgente ou complément d'information :
          </p>
          <a href="mailto:entreprises@majubah.com" className="inline-flex items-center gap-2 text-petrol font-bold hover:text-accent transition-colors">
            <Mail size={14} /> entreprises@majubah.com
          </a>
          
          <p className="mt-8 font-medium text-petrol">L'équipe Majubah Academy.</p>
        </div>

      </div>
    </div>
  );
};
