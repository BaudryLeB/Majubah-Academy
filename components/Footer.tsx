
import React from 'react';
import { Mail, MapPin, FileCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-petrol text-white pt-20 pb-10 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : L'IDENTITÉ */}
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6 cursor-pointer tracking-tight" onClick={() => onNavigate('home')}>
              MAJUBAH <span className="font-light">ACADEMY</span>
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              L'école des formateurs d'élite. Nous transformons votre expertise terrain en une activité rentable et sécurisée.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="bg-white text-petrol p-1 rounded font-bold text-xs">Q</div>
                   <span className="font-bold text-sm">Qualiopi</span>
                 </div>
                 <p className="text-[10px] text-gray-400 leading-tight">
                   La certification qualité a été délivrée au titre de la catégorie d'action suivante : Actions de formation.
                 </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                 <div className="bg-white text-petrol p-1 rounded font-bold text-xs">FC</div>
                 <div>
                   <span className="block font-bold text-sm">France Compétences</span>
                   <span className="text-[10px] text-gray-400">Certification RS6977</span>
                 </div>
              </div>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION RAPIDE */}
          <div>
            <h4 className="font-bold text-white mb-6 text-base">Explorer</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('method')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  La Méthode (IA & Neuro)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('become-trainer')} className="hover:text-accent transition-colors text-left focus:outline-none leading-snug block">
                  Formation Certifiante : Créer et développer une activité de formation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('meute')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  La Meute (Réseau & Portage)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('opportunities')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Opportunités & Missions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  À Propos du Fondateur
                </button>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : OFFRES & ENTREPRISES */}
          <div>
            <h4 className="font-bold text-white mb-6 text-base">Nos Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <button onClick={() => onNavigate('become-trainer')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Devenir Formateur (Candidats)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Solutions Entreprises (B2B)
                </button>
              </li>
              <li>
                <a 
                  href="https://www.digiforma.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors text-left flex items-center gap-2 group"
                >
                  Catalogue des Formations 
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('speaker')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Speaker Bureau (Conférences)
                </button>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : INFORMATIONS LÉGALES & CONTACT */}
          <div>
            <h4 className="font-bold text-white mb-6 text-base">Légal & Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              <li>
                <button onClick={() => onNavigate('legal')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Mentions Légales & RGPD
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cgv')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Conditions Générales de Ventes (CGV)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('accessibility')} className="hover:text-accent transition-colors text-left focus:outline-none">
                  Accessibilité & Handicap
                </button>
              </li>
            </ul>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@majubah.com" className="hover:text-white transition-colors">contact@majubah.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>149 avenue du Maine, 75014 Paris</span>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>NDA : 11756813975 (Île-de-France)</span>
              </div>
            </div>
          </div>

        </div>

        {/* BAS DE FOOTER */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 MAJUBAH CONSULTING SASU. Tous droits réservés. Site propulsé par Majubah Consulting.
          </p>
        </div>
      </div>
    </footer>
  );
};
