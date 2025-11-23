import React from 'react';
import { CheckCircle, Clock, Phone, FileText, ArrowRight } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 animate-fade-in font-sans">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-soft p-10 md:p-16 text-center border border-gray-100 relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-petrol to-accent"></div>
        
        {/* Icon Animation */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center animate-bounce-soft">
            <CheckCircle className="text-accent w-10 h-10" strokeWidth={3} />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-petrol mb-4 leading-tight">
          Félicitations ! <br /> Votre candidature est entre nos mains.
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Nous avons bien reçu vos informations. Vous venez de faire le premier pas vers votre nouvelle vie de formateur d'élite.
        </p>

        {/* Process Steps */}
        <div className="bg-surface rounded-2xl p-8 mb-10 text-left">
          <h2 className="text-sm font-bold text-petrol uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">
            Voici ce qui va se passer maintenant :
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm text-accent">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-bold text-petrol text-sm">Analyse (24h - 48h)</p>
                <p className="text-sm text-gray-500">Notre équipe analyse votre profil et votre éligibilité aux financements (CPF/OPCO).</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm text-accent">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold text-petrol text-sm">Entretien de Positionnement</p>
                <p className="text-sm text-gray-500">Si votre profil correspond, Baudry ou un membre de l'équipe vous contactera personnellement pour fixer un RDV.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
             <p className="text-xs text-gray-400 italic">
               ℹ️ Surveillez vos emails (y compris les spams) et préparez vos questions pour l'entretien.
             </p>
          </div>
        </div>

        {/* Bonus / Waiting Content */}
        <div className="mb-10">
          <p className="text-petrol font-medium mb-4">En attendant notre appel...</p>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 group">
            <FileText size={18} />
            DÉCOUVRIR LE PROGRAMME DÉTAILLÉ
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Signature */}
        <div className="text-petrol">
          <p className="font-bold text-lg">À très vite dans la Meute.</p>
          <p className="text-sm text-gray-500 mt-1">— Baudry Bahuna, Fondateur.</p>
        </div>

      </div>
    </div>
  );
};