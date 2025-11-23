
import React, { useEffect, useState } from 'react';
import { Scale, FileText, CreditCard, ShieldAlert, Lock, Gavel, BookOpen, MousePointerClick, AlertTriangle } from 'lucide-react';

export const CGVPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('art1');

  // Simple scroll spy to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['art1', 'art2', 'art3', 'art4', 'art5', 'art6', 'art7', 'art8', 'art9'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const menuItems = [
    { id: 'art1', label: '1. Objet et Champ d\'application' },
    { id: 'art2', label: '2. Commandes et Inscriptions' },
    { id: 'art3', label: '3. Tarifs et Paiement' },
    { id: 'art4', label: '4. Réalisation des formations' },
    { id: 'art5', label: '5. Rétractation et Annulation' },
    { id: 'art6', label: '6. Propriété Intellectuelle' },
    { id: 'art7', label: '7. Responsabilité' },
    { id: 'art8', label: '8. Données Personnelles' },
    { id: 'art9', label: '9. Droit applicable et Litiges' },
  ];

  return (
    <div className="animate-fade-in font-sans text-gray-700">
      {/* 1. HEADER */}
      <section className="pt-40 pb-16 bg-petrol text-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Scale size={18} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Document Juridique</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Conditions Générales de Vente
          </h1>
          <p className="text-gray-300 text-lg mt-4">
            Applicables à compter du 1er Novembre 2025
          </p>
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Les présentes conditions régissent les ventes de formations (présentielles, distancielles, e-learning) conclues entre la société MAJUBAH CONSULTING et ses clients (particuliers ou professionnels).
          </p>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <section className="py-16 bg-white px-6 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN - STICKY SIDEBAR (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-32 p-6 bg-surface rounded-2xl border border-gray-100">
              <h3 className="text-sm font-bold text-petrol uppercase tracking-wider mb-6 flex items-center gap-2">
                <BookOpen size={16} /> Sommaire
              </h3>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-white text-petrol font-bold shadow-sm border-l-4 border-accent'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-petrol'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MOBILE MENU (Mobile only) */}
          <div className="lg:hidden col-span-1 bg-surface p-4 rounded-xl border border-gray-100 mb-8">
            <details className="group">
              <summary className="list-none flex justify-between items-center font-bold text-petrol cursor-pointer">
                <span>Sommaire du contrat</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <nav className="mt-4 space-y-2 border-t border-gray-200 pt-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-sm text-gray-600 py-2 border-b border-gray-100 last:border-0"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </details>
          </div>

          {/* RIGHT COLUMN - CONTENT */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* Article 1 */}
            <article id="art1" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><FileText size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 1. Objet et Champ d'application</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de prestations de formation par la société <strong>MAJUBAH CONSULTING</strong> (ci-après "l'Organisme de Formation") au profit de toute personne physique ou morale (ci-après "le Client").
                </p>
                <p>
                  Elles s'appliquent, sans restriction ni réserve, à l'ensemble des formations proposées par Majubah Academy, qu'elles soient dispensées en présentiel, en classe virtuelle (distanciel synchrone) ou en e-learning (distanciel asynchrone).
                </p>
                <p>
                  Toute commande implique l'acceptation sans réserve par le Client et son adhésion pleine et entière aux présentes CGV, qui prévalent sur tout autre document du Client, et notamment sur toutes conditions générales d'achat.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article id="art2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><MousePointerClick size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 2. Commandes et Inscriptions</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  L'inscription à une formation peut être réalisée via le site internet de Majubah Academy, par la signature d'un devis ou d'une convention de formation professionnelle, ou directement via la plateforme MonCompteFormation (CPF).
                </p>
                <h3 className="text-lg font-bold text-petrol mt-4">Validation de l'inscription</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Pour les financements personnels ou entreprises :</strong> L'inscription n'est validée définitivement qu'à réception de la convention de formation signée et, le cas échéant, du règlement de l'acompte prévu.</li>
                  <li><strong>Pour les financements CPF :</strong> L'inscription est validée selon les modalités et délais imposés par la Caisse des Dépôts et Consignations (CDC) via la plateforme EDOF.</li>
                </ul>
                <p>
                  Majubah Consulting se réserve le droit de refuser une inscription en cas de non-paiement d'une commande précédente ou de litige en cours avec le Client.
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article id="art3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><CreditCard size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 3. Tarifs et Modalités de paiement</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  Les tarifs des formations sont indiqués en euros. S'agissant de formation professionnelle continue, les prix peuvent être nets de taxe (exonération de TVA selon l'article 261-4-4° du CGI) ou Hors Taxe selon le statut de l'organisme au moment de la vente. Le montant total dû est indiqué sur le devis ou la page de commande.
                </p>
                <h3 className="text-lg font-bold text-petrol mt-4">Modalités de règlement</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Paiement comptant :</strong> Par virement bancaire ou carte bancaire avant le début de la formation.</li>
                  <li><strong>Paiement échelonné :</strong> Majubah Consulting peut proposer des facilités de paiement (ex: 3 fois sans frais) via un partenaire financier. Le Client s'engage à honorer l'ensemble des échéances.</li>
                  <li><strong>Financement CPF :</strong> Le règlement est effectué directement par la Caisse des Dépôts selon ses règles de gestion.</li>
                  <li><strong>Financement OPCO :</strong> En cas de subrogation de paiement par un OPCO, il appartient au Client de faire la demande de prise en charge avant le début de la formation. Si l'OPCO ne règle pas tout ou partie de la somme, le Client reste redevable de la totalité du coût de la formation.</li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-accent p-4 mt-4">
                  <p className="text-sm text-orange-800 font-medium">
                    <strong>Pénalités de retard (Professionnels) :</strong> En cas de retard de paiement, des pénalités égales à trois fois le taux d'intérêt légal ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40€ seront exigibles de plein droit.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article id="art4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><BookOpen size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 4. Réalisation des formations</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  <strong>Accès E-learning :</strong> Les codes d'accès à la plateforme de formation (type SchoolMaker) sont personnels, confidentiels et incessibles. Ils sont transmis au Client après validation de l'inscription. L'accès est garanti pour la durée spécifiée dans l'offre (ex: 12 mois ou accès illimité).
                </p>
                <p>
                  <strong>Sessions synchrones (Zoom/Présentiel) :</strong> Le Client s'engage à assister aux sessions prévues. Une feuille d'émargement (numérique ou papier) doit être signée par demi-journée. La délivrance de la certification ou de l'attestation de fin de formation est conditionnée par l'assiduité et la réussite aux évaluations.
                </p>
              </div>
            </article>

             {/* Article 5 */}
             <article id="art5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><AlertTriangle size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 5. Droit de rétractation et Annulation</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <h3 className="text-lg font-bold text-petrol mt-4">Pour les Clients Particuliers (Hors CPF)</h3>
                <p>
                  Le Client dispose d'un délai de rétractation de 14 jours à compter de la conclusion du contrat. Cependant, conformément à l'article L221-28 du Code de la consommation :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700 font-bold mb-2">⚠️ Clause spécifique Contenu Numérique :</p>
                  <p className="text-sm text-gray-600">
                    Si le Client souhaite accéder au contenu numérique (plateforme e-learning) avant la fin du délai de 14 jours, il doit donner son accord préalable exprès et renoncer expressément à son droit de rétractation. <strong>Toute connexion à la plateforme vaut renoncement au droit de rétractation.</strong>
                  </p>
                </div>

                <h3 className="text-lg font-bold text-petrol mt-6">Pour les financements CPF</h3>
                <p>
                  Les conditions d'annulation et de rétractation sont régies exclusivement par les Conditions Générales d'Utilisation (CGU) de la plateforme MonCompteFormation, auxquelles le Client a adhéré lors de son achat.
                </p>

                <h3 className="text-lg font-bold text-petrol mt-6">Annulation</h3>
                <p>
                  Majubah Consulting se réserve le droit de reporter ou d'annuler une session en cas de force majeure ou si le nombre de participants est insuffisant. Dans ce cas, le Client peut choisir un report ou le remboursement intégral des sommes versées, sans indemnité supplémentaire.
                </p>
              </div>
            </article>

            {/* Article 6 - CRUCIAL */}
            <article id="art6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><Lock size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 6. Propriété Intellectuelle</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed border-l-4 border-petrol pl-6 bg-surface p-6 rounded-r-xl">
                <p className="font-bold text-petrol">Ceci est une clause essentielle du contrat.</p>
                <p>
                  L'ensemble des contenus pédagogiques (vidéos, supports PDF, modèles de documents, méthodes, quiz) mis à disposition par Majubah Academy constituent des œuvres originales protégées par le Code de la propriété intellectuelle.
                </p>
                <p>
                  <strong>MAJUBAH CONSULTING demeure seul titulaire des droits de propriété intellectuelle sur ces éléments.</strong> Le Client ne dispose que d'un droit d'usage personnel et incessible.
                </p>
                <p className="font-bold text-red-600">
                  Il est formellement interdit au Client de :
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Copier, reproduire, modifier ou adapter les contenus.</li>
                  <li>Diffuser, vendre ou partager ses codes d'accès à des tiers.</li>
                  <li>Utiliser les contenus pour créer une formation concurrente.</li>
                </ul>
                <p>
                  Toute violation de cette clause exposera le Client à des poursuites judiciaires civiles et pénales pour contrefaçon.
                </p>
              </div>
            </article>

            {/* Article 7 */}
            <article id="art7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><ShieldAlert size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 7. Responsabilité</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  Majubah Consulting est tenu à une obligation de moyens dans le cadre de ses prestations de formation. Bien que les formations visent à développer les compétences et le chiffre d'affaires des Clients, Majubah Consulting ne saurait être tenu responsable de l'absence de résultats commerciaux ou financiers du Client suite à la formation, ces résultats dépendant de facteurs indépendants de la formation (conjoncture, travail personnel, etc.).
                </p>
                <p>
                  La responsabilité de Majubah Consulting ne pourra être engagée en cas de force majeure telle que définie par la jurisprudence française.
                </p>
              </div>
            </article>

             {/* Article 8 */}
             <article id="art8" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><Lock size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 8. Données Personnelles</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  Dans le cadre de l'exécution des formations, Majubah Consulting est amené à collecter des données personnelles du Client. Ces données sont nécessaires à la gestion de la commande, au suivi pédagogique et à l'établissement des attestations.
                </p>
                <p>
                  Pour plus d'informations sur la gestion de vos données et vos droits, veuillez consulter notre <button className="text-accent font-bold hover:underline">Politique de Confidentialité</button>.
                </p>
              </div>
            </article>

            {/* Article 9 */}
            <article id="art9" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-petrol/5 p-2 rounded-lg text-petrol"><Gavel size={24} /></div>
                <h2 className="text-2xl font-bold text-petrol">Article 9. Droit applicable et Litiges</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4 text-justify leading-relaxed">
                <p>
                  Les présentes CGV sont soumises au droit français.
                </p>
                <p>
                  En cas de litige, les parties s'efforceront de trouver une solution amiable. Le Client particulier a la possibilité de recourir gratuitement à un médiateur de la consommation.
                </p>
                <p>
                  À défaut d'accord amiable, tout litige relatif à l'interprétation ou à l'exécution des présentes CGV sera de la compétence exclusive :
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Des tribunaux du lieu de résidence du Client pour les consommateurs (B2C).</li>
                  <li>Du <strong>Tribunal de Commerce de Paris</strong> pour les professionnels (B2B), nonobstant pluralité de défendeurs ou appel en garantie.</li>
                </ul>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
};
