
import React from 'react';
import { UserCheck, Eye, Monitor, Headphones, Mic, Accessibility, FileText, ExternalLink, Ear, MessageSquare, CheckCircle } from 'lucide-react';

export const AccessibilityPage: React.FC = () => {
  return (
    <div className="animate-fade-in font-sans text-petrol selection:bg-accent selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 bg-white px-6 text-center" role="banner">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-petrol">
            Accessibilité et inclusion des publics.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chez Majubah Academy, nous croyons que la formation doit être accessible à tous. Nous nous engageons à adapter nos parcours aux besoins spécifiques de chacun.
          </p>
        </div>
      </section>

      {/* 2. REFERENT HANDICAP SECTION */}
      <section className="py-20 bg-surface px-6" aria-labelledby="referent-title">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-soft">
                <img 
                  src="https://picsum.photos/seed/man_portrait/600/600" 
                  alt="Portrait de Baudry Bahuna, Référent Handicap" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-4 right-0 bg-petrol text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <UserCheck size={16} />
                Référent Handicap
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:col-span-7">
            <h2 id="referent-title" className="text-3xl font-bold text-petrol mb-6">
              Un interlocuteur dédié pour vous accompagner.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Afin de garantir le meilleur accueil, nous avons nommé un Référent Handicap au sein de notre équipe : <strong>Monsieur Baudry Bahuna</strong>.
              </p>
              <p>
                Son rôle est d'étudier votre situation en toute confidentialité, de définir avec vous les aménagements nécessaires et de faire le lien avec l'équipe pédagogique et les organismes partenaires (AGEFIPH, etc.).
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="mailto:accessibilite@majubah.com"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30"
                aria-label="Envoyer un email au référent handicap"
              >
                <MessageSquare size={20} />
                CONTACTER LE RÉFÉRENT HANDICAP
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Email : <a href="mailto:accessibilite@majubah.com" className="underline hover:text-petrol">accessibilite@majubah.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOS AMÉNAGEMENTS */}
      <section className="py-24 bg-white px-6" aria-labelledby="solutions-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="solutions-title" className="text-3xl md:text-4xl font-bold text-petrol mb-4">
              Comment nous adaptons nos formations.
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <article className="bg-surface p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
              <div className="flex gap-3 mb-6 text-petrol">
                <div className="bg-white p-3 rounded-lg shadow-sm"><Eye size={24} /></div>
                <div className="bg-white p-3 rounded-lg shadow-sm"><Ear size={24} /></div>
                <div className="bg-white p-3 rounded-lg shadow-sm"><Monitor size={24} /></div>
              </div>
              <h3 className="text-xl font-bold text-petrol mb-4">ACCÈS AUX CONTENUS DIGITAUX</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos supports de cours e-learning (SchoolMaker) sont conçus pour être compatibles avec la plupart des lecteurs d'écran. Nous pouvons fournir des supports transcrits ou sous-titrés sur demande.
              </p>
            </article>

            {/* Carte 2 */}
            <article className="bg-surface p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
              <div className="flex gap-3 mb-6 text-petrol">
                <div className="bg-white p-3 rounded-lg shadow-sm"><Headphones size={24} /></div>
                <div className="bg-white p-3 rounded-lg shadow-sm"><Mic size={24} /></div>
              </div>
              <h3 className="text-xl font-bold text-petrol mb-4">CLASSES VIRTUELLES (ZOOM)</h3>
              <p className="text-gray-600 leading-relaxed">
                Possibilité d'enregistrer les sessions pour relecture, d'activer le sous-titrage automatique (captioning), ou d'adapter le rythme des pauses pour les personnes fatigables.
              </p>
            </article>

            {/* Carte 3 */}
            <article className="bg-surface p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
              <div className="flex gap-3 mb-6 text-petrol">
                <div className="bg-white p-3 rounded-lg shadow-sm"><Accessibility size={24} /></div>
              </div>
              <h3 className="text-xl font-bold text-petrol mb-4">ACCESSIBILITÉ DES LIEUX</h3>
              <p className="text-gray-600 leading-relaxed">
                Pour nos séminaires physiques et événements présentiels, nous sélectionnons exclusivement des lieux (ERP) conformes aux normes d'accessibilité PMR (Personnes à Mobilité Réduite).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. PROCESSUS */}
      <section className="py-24 bg-petrol text-white px-6" aria-labelledby="process-title">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold mb-6">
              Une démarche simple en 4 étapes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Signalement", desc: "Vous nous informez de votre situation lors de l'inscription ou via le formulaire." },
              { title: "Entretien", desc: "Notre Référent Handicap échange avec vous en toute confidentialité pour comprendre vos besoins." },
              { title: "Proposition", desc: "Nous définissons ensemble les compensations possibles (techniques, humaines)." },
              { title: "Suivi", desc: "Nous nous assurons tout au long du parcours que les solutions mises en place sont efficaces." }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line (Desktop only) */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-white/20 z-0"></div>
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESSOURCES & REGISTRE */}
      <section className="py-20 bg-white px-6 border-t border-gray-100" aria-labelledby="resources-title">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-surface rounded-xl text-petrol mb-6">
            <FileText size={32} />
          </div>
          <h2 id="resources-title" className="text-2xl font-bold text-petrol mb-4">Ressources utiles</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre <strong>Registre Public d'Accessibilité</strong> détaillant les spécificités de nos locaux et services est consultable sur simple demande auprès du référent.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <a 
               href="https://www.agefiph.fr/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-petrol hover:text-petrol transition-colors"
             >
               Site de l'AGEFIPH <ExternalLink size={16} />
             </a>
             <a 
               href="https://www.fiphfp.fr/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-petrol hover:text-petrol transition-colors"
             >
               Site du FIPHFP <ExternalLink size={16} />
             </a>
             <a 
               href="https://travail-emploi.gouv.fr/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-petrol hover:text-petrol transition-colors"
             >
               Ministère du Travail <ExternalLink size={16} />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};
