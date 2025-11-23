
import React from 'react';
import { Shield, FileText, Server, Lock, Eye, AlertTriangle, Building } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* HEADER SECTION */}
      <section className="pt-40 pb-20 bg-petrol text-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Mentions Légales et <br /> Politique de Confidentialité
          </h1>
          <p className="text-gray-300 text-sm uppercase tracking-widest mt-4">
            Dernière mise à jour : Novembre 2025
          </p>
        </div>
      </section>

      {/* SECTION 1: ÉDITEUR */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-petrol/5 p-3 rounded-xl text-petrol">
              <Building size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">1. Identification de l'éditeur</h2>
          </div>
          
          <div className="pl-0 md:pl-20">
            <p className="mb-6 text-gray-600 leading-relaxed">
              Le présent site est édité par la société <strong>MAJUBAH CONSULTING</strong>.
            </p>
            <ul className="space-y-3 text-gray-600 bg-surface p-8 rounded-2xl border border-gray-100">
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">Forme juridique :</span>
                <span>SARL (Société à Responsabilité Limitée)</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">Capital social :</span>
                <span>1 000 €</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">Siège social :</span>
                <span>49 avenue du Maine, 75014 Paris, France</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">Immatriculation :</span>
                <span>Inscrite au RCS de Paris sous le numéro 951 760 834</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">SIRET :</span>
                <span>951 760 834 00014</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">TVA Intracommunautaire :</span>
                <span>FR 53 951760834</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2 border-t border-gray-200 pt-3 mt-3">
                <span className="font-bold text-petrol min-w-[200px]">Directeur de la publication :</span>
                <span>Monsieur Baudry Bahuna, en qualité de Gérant</span>
              </li>
              <li className="flex flex-col md:flex-row md:gap-2">
                <span className="font-bold text-petrol min-w-[200px]">Contact :</span>
                <span>contact@majubah.com | 06 89 51 30 03</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACTIVITÉ DE FORMATION */}
      <section className="py-16 bg-surface px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-3 rounded-xl text-petrol shadow-sm">
              <FileText size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">2. Déclaration d'activité de formation</h2>
          </div>

          <div className="pl-0 md:pl-20 text-gray-600 leading-relaxed space-y-4">
            <p>MAJUBAH CONSULTING est un organisme de formation déclaré.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Numéro de Déclaration d'Activité (NDA) :</strong> 11756813975</li>
              <li>Enregistré auprès du préfet de la région d'Ile-de-France.</li>
            </ul>
            <p className="text-sm italic text-gray-500 bg-white inline-block px-4 py-2 rounded-lg border border-gray-200">
              "Cet enregistrement ne vaut pas agrément de l'État."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HÉBERGEMENT */}
      <section className="py-16 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-petrol/5 p-3 rounded-xl text-petrol">
              <Server size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">3. Hébergeur</h2>
          </div>

          <div className="pl-0 md:pl-20 text-gray-600 leading-relaxed">
            <p className="mb-2">Le site est hébergé par la société <strong>OVH SAS</strong>.</p>
            <p>Adresse : 2 rue Kellermann - 59100 Roubaix - France.</p>
            <p>Téléphone : 1007 ou +33 9 72 10 10 07.</p>
            <p>Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">www.ovhcloud.com</a></p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROPRIÉTÉ INTELLECTUELLE */}
      <section className="py-16 bg-surface px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-3 rounded-xl text-petrol shadow-sm">
              <Shield size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">4. Propriété intellectuelle</h2>
          </div>

          <div className="pl-0 md:pl-20 text-gray-600 leading-relaxed space-y-4">
            <p>
              La structure générale du site, ainsi que le logo "Lion" Majubah Academy, la marque, les textes, les programmes de formation et le savoir-faire sont la propriété exclusive de <strong>MAJUBAH CONSULTING</strong>.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de MAJUBAH CONSULTING.
            </p>
            <p>
              Certaines images ou illustrations utilisées sur le site sont libres de droits et utilisées conformément à leurs licences respectives.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: DONNÉES PERSONNELLES (RGPD) */}
      <section className="py-16 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-petrol/5 p-3 rounded-xl text-petrol">
              <Lock size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">5. Politique de protection des données personnelles (RGPD)</h2>
          </div>

          <div className="pl-0 md:pl-20 text-gray-600 leading-relaxed space-y-6">
            <div>
              <h3 className="font-bold text-petrol text-lg mb-2">Responsable du traitement et DPO</h3>
              <p>
                Le responsable du traitement des données est MAJUBAH CONSULTING. Le Délégué à la Protection des Données (DPO) est Monsieur Baudry Bahuna (<a href="mailto:contact@majubah.com" className="text-accent hover:underline">contact@majubah.com</a>).
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-petrol text-lg mb-2">Finalité des données</h3>
              <p>
                Les informations recueillies via les formulaires (candidature, audit) sont destinées exclusivement à MAJUBAH CONSULTING pour le traitement de vos demandes, la gestion de la relation commerciale et, si vous l'avez accepté, l'envoi d'informations sur nos formations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-petrol text-lg mb-2">Sécurité</h3>
              <p>
                Les données sont traitées via des outils sécurisés et ne sont jamais vendues à des tiers.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-petrol text-lg mb-2">Vos droits</h3>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@majubah.com" className="text-accent hover:underline">contact@majubah.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COOKIES */}
      <section className="py-16 bg-surface px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-3 rounded-xl text-petrol shadow-sm">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">6. Cookies et analyse d'audience</h2>
          </div>

          <div className="pl-0 md:pl-20 text-gray-600 leading-relaxed space-y-4">
            <p>
              Ce site utilise des cookies, notamment Google Analytics, pour analyser l'audience et améliorer l'expérience utilisateur. Ces cookies nous aident à comprendre comment le site est utilisé (pages visitées, temps passé, etc.) de manière anonyme.
            </p>
            <p>
              Vous pouvez à tout moment configurer votre navigateur pour refuser ces cookies ou utiliser le bandeau de gestion des cookies présent sur le site. Le refus des cookies n'empêche pas l'accès au site mais peut limiter certaines fonctionnalités.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: LIMITATION DE RESPONSABILITÉ */}
      <section className="py-16 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-petrol/5 p-3 rounded-xl text-petrol">
              <AlertTriangle size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-petrol">7. Limitation de responsabilité</h2>
          </div>

          <div className="pl-0 md:pl-20 text-gray-600 leading-relaxed">
            <p>
              MAJUBAH CONSULTING s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Les informations sont données à titre indicatif et sont susceptibles d'évoluer.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
