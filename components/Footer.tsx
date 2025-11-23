
import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-petrol text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-bold mb-6 cursor-pointer" onClick={() => onNavigate('home')}>MAJUBAH ACADEMY</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Le hub stratégique pour les formateurs d'élite. Formation, Portage, Agence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Navigation</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><button onClick={() => onNavigate('method')} className="hover:text-accent transition-colors text-left">La Méthode</button></li>
              <li><button onClick={() => onNavigate('become-trainer')} className="hover:text-accent transition-colors text-left">Devenir Formateur</button></li>
              <li><button onClick={() => onNavigate('meute')} className="hover:text-accent transition-colors text-left">Portage Qualiopi</button></li>
              <li><button onClick={() => onNavigate('meute')} className="hover:text-accent transition-colors text-left">L'Agence</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Légal</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><button onClick={() => onNavigate('legal')} className="hover:text-accent transition-colors text-left">Mentions Légales</button></li>
              <li><button onClick={() => onNavigate('cgv')} className="hover:text-accent transition-colors text-left">CGV</button></li>
              <li><button onClick={() => onNavigate('legal')} className="hover:text-accent transition-colors text-left">Politique de confidentialité</button></li>
              <li><button onClick={() => onNavigate('accessibility')} className="hover:text-accent transition-colors text-left">Accessibilité</button></li>
            </ul>
          </div>

           <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Accréditations</h5>
            <div className="flex flex-col gap-4">
               <div className="bg-white/10 p-3 rounded text-center">
                 <span className="block text-xs font-bold text-white">Qualiopi</span>
                 <span className="block text-[10px] text-gray-400">Processus certifié</span>
               </div>
               <div className="bg-white/10 p-3 rounded text-center">
                 <span className="block text-xs font-bold text-white">France Compétences</span>
                 <span className="block text-[10px] text-gray-400">RS6977</span>
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Majubah Academy. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Conçu avec précision à Paris.</p>
        </div>
      </div>
    </footer>
  );
};
