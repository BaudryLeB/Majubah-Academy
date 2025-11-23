
import React, { useState } from 'react';
import { Check, ArrowRight, ChevronDown, ChevronUp, FileCheck, FileText, Download } from 'lucide-react';

interface BecomeTrainerPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export const BecomeTrainerPage: React.FC<BecomeTrainerPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isCertOpen, setIsCertOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Faut-il être un expert technique pour postuler ?",
      a: "Oui. Nous vous apprenons la pédagogie, la neuropédagogie et le business de la formation, mais nous ne vous apprenons pas votre métier de base. Vous devez avoir une expertise avérée (5 ans d'expérience minimum recommandés) à transmettre."
    },
    {
      q: "Combien de temps par semaine cela demande-t-il ?",
      a: "Le programme est conçu pour des professionnels en activité. Comptez environ 3 à 5 heures par semaine, réparties entre le visionnage des modules sur le campus (à votre rythme) et la séance de coaching live (1h15)."
    },
    {
      q: "Suis-je sûr d'avoir des clients après ?",
      a: "Nous vous donnons tous les outils business (offres, pricing, vente) et l'accès à notre réseau via L'Agence pour les meilleurs profils. Cependant, comme toute activité entrepreneuriale, votre succès dépendra in fine de votre engagement et de votre travail."
    }
  ];

  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* 1. HERO */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-surface to-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Le Programme Certifiant pour <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-accent">
              Sécuriser votre Avenir Professionnel.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Obtenez la certification "Créer et développer une activité de formation" (RS6977), financez-la avec votre CPF, et générez un revenu complémentaire ou principal en 90 jours.
          </p>
          <button 
            onClick={() => onNavigate('apply')}
            className="bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
          >
            VÉRIFIER MON ÉLIGIBILITÉ AU CPF
          </button>
        </div>
      </section>

      {/* 2. POUR QUI ? */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce programme est conçu pour vous si...</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface rounded-2xl border border-transparent hover:border-petrol/10 transition-colors">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">L'Expert Métier</h3>
              <p className="text-gray-600">Vous êtes un professionnel (Finance, Immo, RH, Tech...) avec plus de 5 ans d'expérience et une envie viscérale de transmettre votre savoir.</p>
            </div>
            <div className="p-8 bg-surface rounded-2xl border border-transparent hover:border-petrol/10 transition-colors">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">La Sécurité</h3>
              <p className="text-gray-600">Vous cherchez à diversifier vos sources de revenus pour ne plus dépendre d'un seul employeur ou client. Vous voulez une "assurance-chômage" que vous contrôlez.</p>
            </div>
            <div className="p-8 bg-surface rounded-2xl border border-transparent hover:border-petrol/10 transition-colors">
              <div className="w-12 h-12 bg-petrol/5 rounded-lg flex items-center justify-center text-petrol font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">La Liberté</h3>
              <p className="text-gray-600">Vous voulez une activité intellectuellement stimulante, flexible géographiquement, mais sans la lourdeur administrative habituelle (grâce à notre portage).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. L'OFFRE COMPLÈTE */}
      <section className="py-24 bg-petrol text-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-8">Tout ce qui est inclus dans votre investissement.</h2>
             <p className="text-gray-300 mb-8 text-lg">
               Une formation n'est pas une dépense, c'est un actif qui doit vous rapporter. Nous avons conçu ce pack pour maximiser votre ROI.
             </p>
             <div className="space-y-6">
                {[
                  "Accès à vie au Campus Numérique Majubah (+50h de modules vidéo IA, Neuro, Business).",
                  "12 Séances de Coaching Collectif en direct (1h15 par semaine sur Zoom) avec Baudry et les experts.",
                  "La préparation et le passage de la Certification Officielle RS6977 (reconnue par l'État).",
                  "Accès à la communauté privée (La Meute) pour échanger entre pairs.",
                  "BONUS EXCLUSIF : Le 'Pack de Démarrage Rapide' (Tous nos templates : conventions, feuilles d'émargement, supports types)."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-8 flex items-center justify-center">
             {/* Abstract representation of the pack */}
             <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
             <div className="relative z-10 text-center">
                <span className="block text-6xl mb-4">📦</span>
                <p className="font-bold text-2xl">Pack Formateur d'Élite</p>
                <p className="text-sm text-gray-400 mt-2">Édition 2025</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: PDF DOWNLOAD LEAD MAGNET */}
      <section className="py-12 bg-white px-6 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-petrol rounded-2xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-petrol to-petrol/90"></div>
             
             {/* Left: Icon & Text */}
             <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left relative z-10 w-full md:w-2/3">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                   <FileText size={32} className="text-accent" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">Vous voulez tous les détails ?</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Téléchargez le programme de formation complet (PDF) : objectifs détaillés, déroulé module par module, modalités d'évaluation et prérequis techniques. Idéal pour présenter votre projet à un financeur.
                   </p>
                </div>
             </div>

             {/* Right: Button */}
             <div className="relative z-10 flex-shrink-0 w-full md:w-auto flex justify-center">
                <a 
                  href="assets/programme-majubah-rs6977.pdf" 
                  target="_blank" 
                  download
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 border border-white/10 w-full md:w-auto text-sm"
                >
                  TÉLÉCHARGER LE PROGRAMME (PDF) <Download size={18} />
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING & FINANCING */}
      <section className="py-24 bg-surface px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un investissement rentabilisé en 2 missions.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Block: Price */}
            <div className="bg-petrol text-white p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-medium text-gray-300 mb-2 relative z-10">Tarif Unique</h3>
               <div className="text-5xl md:text-6xl font-bold mb-4 relative z-10">2 500 € <span className="text-xl font-normal text-gray-400">Net</span></div>
               <p className="text-sm text-gray-400 relative z-10">Net de taxe (TVA non applicable)</p>
            </div>

            {/* Right Block: Financing */}
            <div className="bg-white p-10 rounded-3xl border-2 border-accent/20 flex flex-col justify-center shadow-sm relative">
               <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAIRE</div>
               <h3 className="text-xl font-bold text-petrol mb-6">Solutions de Financement</h3>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-700 p-1 rounded flex-shrink-0">
                        <Check size={14} />
                    </div>
                    <div>
                      <span className="font-bold block text-petrol">100% Finançable par votre CPF</span>
                      <span className="text-sm text-gray-600">Si vous avez le solde nécessaire, reste à charge = 0€.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 p-1 rounded flex-shrink-0">
                        <Check size={14} />
                    </div>
                    <div>
                      <span className="font-bold block text-petrol">OPCO / FAF (Entreprise)</span>
                      <span className="text-sm text-gray-600">Prise en charge pour salariés ou indépendants.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-100 text-gray-700 p-1 rounded flex-shrink-0">
                        <Check size={14} />
                    </div>
                    <div>
                      <span className="font-bold block text-petrol">Fonds Propres (Facilités)</span>
                      <span className="text-sm text-gray-600">Paiement possible en 3 fois sans frais (3 x 833€).</span>
                    </div>
                  </li>
               </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('apply')}
              className="bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto gap-2"
            >
              JE FAIS LE POINT SUR MES FINANCEMENTS AVEC UN EXPERT <ArrowRight size={20} />
            </button>
            <p className="mt-4 text-sm text-gray-500">Appel gratuit de 15 min, sans engagement.</p>
          </div>
        </div>
      </section>

      {/* 6. GARANTIE */}
      <section className="py-20 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-2xl font-bold text-petrol mb-6">Notre engagement à vos côtés.</h2>
           <div className="bg-surface p-8 rounded-2xl border border-gray-100">
               <p className="text-lg text-gray-600 leading-relaxed italic">
                 "Nous ne vous lâchons pas après la certification. Nos diplômés accèdent à notre programme de <strong>Portage Qualiopi</strong> pour pouvoir facturer leurs premiers clients immédiatement, sans attendre leur propre audit."
               </p>
           </div>
        </div>
      </section>

      {/* 7. DÉTAILS OFFICIELS RS6977 (Accordion) */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-petrol/20 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setIsCertOpen(!isCertOpen)}
              className="w-full flex items-center justify-between p-6 bg-surface hover:bg-gray-100 transition-colors text-left group"
            >
              <div className="flex items-center gap-4">
                  <div className="bg-petrol text-white p-2 rounded-full shadow-sm group-hover:bg-accent transition-colors">
                      <FileCheck size={20} strokeWidth={2} />
                  </div>
                  <span className="font-bold text-petrol text-lg group-hover:text-accent transition-colors">
                      Détails Officiels de la Certification & Référentiel de Compétences (RS6977)
                  </span>
              </div>
              {isCertOpen ? <ChevronUp className="text-petrol" /> : <ChevronDown className="text-petrol" />}
            </button>

            {isCertOpen && (
              <div className="p-8 bg-white border-t border-gray-100 animate-fade-in text-gray-700 leading-relaxed space-y-8">
                  
                  {/* SOUS-TITRE 1 */}
                  <div>
                      <h4 className="font-bold text-petrol uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 text-sm">1. Identité de la certification</h4>
                      <ul className="space-y-2 text-sm">
                          <li><span className="font-bold text-petrol">Intitulé officiel :</span> Créer et développer une activité de formation professionnelle.</li>
                          <li><span className="font-bold text-petrol">Code France Compétences :</span> RS6977.</li>
                          <li><span className="font-bold text-petrol">Certificateur :</span> [NOM DU CERTIFICATEUR EXACT À VÉRIFIER SUR TA FICHE]</li>
                          <li><span className="font-bold text-petrol">Niveau et/ou domaine d'activité :</span> (Voir fiche France Compétences).</li>
                      </ul>
                      <a href="https://www.francecompetences.fr/recherche/rs/6977/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-accent font-bold hover:underline text-sm">
                          Voir la fiche officielle sur France Compétences <ArrowRight size={14} />
                      </a>
                  </div>

                  {/* SOUS-TITRE 2 */}
                  <div>
                      <h4 className="font-bold text-petrol uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 text-sm">2. Public & Prérequis</h4>
                      <div className="space-y-4 text-sm">
                          <p>
                              <span className="font-bold text-petrol">Public visé :</span> Tout professionnel souhaitant acquérir les compétences nécessaires pour créer et pérenniser une activité de formation, en tant qu'indépendant ou dirigeant d'organisme.
                          </p>
                          <p>
                              <span className="font-bold text-petrol">Prérequis :</span> Disposer d'une expertise métier avérée dans son domaine d'intervention. Avoir un projet de création ou de développement d'activité de formation. Maîtriser les outils numériques de base et disposer d'un ordinateur avec connexion internet et webcam.
                          </p>
                      </div>
                  </div>

                  {/* SOUS-TITRE 3 */}
                  <div>
                      <h4 className="font-bold text-petrol uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 text-sm">3. Compétences attestées (Référentiel)</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Concevoir et structurer une offre de formation adaptée aux besoins du marché et des apprenants.</li>
                          <li>Préparer et animer des actions de formation en utilisant des méthodes pédagogiques actives et adaptées aux modalités (présentiel, distanciel).</li>
                          <li>Gérer l'activité de formation sur les plans administratif, financier, commercial et qualité (notamment Qualiopi).</li>
                      </ul>
                  </div>

                  {/* SOUS-TITRE 4 */}
                  <div>
                      <h4 className="font-bold text-petrol uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 text-sm">4. Modalités d'évaluation</h4>
                      <p className="text-sm mb-2">La certification est délivrée à l'issue d'un parcours d'évaluation mixte :</p>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Contrôle continu durant le parcours de formation (cas pratiques, quizz).</li>
                          <li>Épreuve finale : Production d'un dossier professionnel écrit et soutenance orale de 45 minutes devant un jury de professionnels habilités.</li>
                      </ul>
                  </div>

                  {/* SOUS-TITRE 5 */}
                  <div>
                      <h4 className="font-bold text-petrol uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 text-sm">5. Accessibilité (PSH)</h4>
                      <p className="text-sm">
                          Formation accessible aux personnes en situation de handicap. Des aménagements sont possibles. Contactez notre Référent Handicap (voir page Accessibilité).
                      </p>
                  </div>

              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Vos questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-petrol">{item.q}</span>
                  {openFaq === index ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0 animate-fade-in border-t border-gray-100 mt-2">
                    <p className="text-gray-600 leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
