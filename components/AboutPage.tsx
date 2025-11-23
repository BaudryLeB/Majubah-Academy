
import React from 'react';
import { Award, BookOpen, ShieldCheck, Terminal } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in font-sans text-petrol">
      {/* 1. HERO SECTION (Split Screen) */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Portrait */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-petrol/10 rounded-2xl z-0"></div>
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
               <img 
                 src="./baudry.jpg" 
                 alt="Baudry Bahuna Portrait" 
                 className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000"
               />
             </div>
          </div>

          {/* Right: Intro */}
          <div className="lg:col-span-7 lg:pl-10 order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Baudry Bahuna. <br />
              <span className="text-gray-400">De la chute à la transmission.</span>
            </h1>
            <h2 className="text-xl font-bold text-accent mb-8 uppercase tracking-widest">
              Fondateur de Majubah Academy & Auteur
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed border-l-4 border-petrol pl-6">
              <p>
                "Je ne suis pas un théoricien de la formation. Je suis un entrepreneur de terrain qui a connu les sommets, le crash, et la reconstruction. Aujourd'hui, je mets mes cicatrices au service de votre avenir."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. L'ASCENSION (Acte 1) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <span className="block text-9xl font-black text-gray-50 opacity-50 -mb-16 -ml-10 select-none">01</span>
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-8 relative z-10">L'Obsession de la croissance.</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
            <p>
              Mon parcours commence dans les chiffres. Conseiller Pro en banque, j'ai analysé plus de 500 bilans et financé 20M€ de projets. J'ai vu ce qui fait qu'une boîte réussit ou coule.
            </p>
            <p>
              Fort de cette expertise, je me lance. Je bâtis un empire de 4 agences de courtage (Meilleurtaux). Je gère 10 collaborateurs, je réalise 2M€ de CA, je suis dans le Top 3 national. Je pensais être arrivé. La réussite semblait linéaire, inarrêtable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LA RUPTURE (Acte 2 - Dark Section) */}
      <section className="py-32 bg-petrol text-white px-6 relative overflow-hidden">
        {/* Abstract shapes for drama */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="block text-9xl font-black text-white/5 -mb-16 -ml-10 select-none">02</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">2023. L'année où tout a basculé.</h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              La crise des taux d'usure frappe. Mes charges fixes m'étouffent. Malgré 14 ans d'expertise, je dois affronter la liquidation judiciaire. Je perds tout ce que j'ai construit.
            </p>
            <p className="font-medium text-white border-l-2 border-accent pl-6 py-2">
              Dans cette épreuve, j'ai compris une chose : l'expertise technique ne suffit pas si le modèle économique est fragile et si le mental flanche.
            </p>
            <p>
              C'est cette leçon, racontée dans mon livre <em>Rebondir après la chute</em>, qui est le socle de Majubah Academy.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LA RENAISSANCE (Acte 3) */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <span className="block text-9xl font-black text-white opacity-100 -mb-16 -ml-10 select-none text-shadow-sm" style={{color: '#f1f3f5'}}>03</span>
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-8 relative z-10">Transmettre pour sécuriser.</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
            <p>
              Je me suis relevé grâce à la transmission. J'ai découvert le pouvoir d'enseigner (en écoles de commerce, HEC, MBWAY...) et j'ai reconstruit un organisme de formation certifié Qualiopi en 6 mois.
            </p>
            <p>
              J'ai créé Majubah Academy pour une raison simple : <span className="font-bold text-petrol">offrir aux experts le filet de sécurité que je n'ai pas eu.</span>
            </p>
            <p>
              Je veux vous apprendre à structurer votre savoir, à le vendre cher, et à opérer sans la lourdeur administrative qui a failli me couler.
            </p>
          </div>
        </div>
      </section>

      {/* 5. AUTORITÉ (Badges) */}
      <section className="py-20 bg-white px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
            Une expertise validée par les standards les plus hauts
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* Badge 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-petrol mb-4 group-hover:bg-petrol group-hover:text-white transition-colors duration-300">
                <Award size={32} />
              </div>
              <span className="font-bold text-petrol text-lg">HEC Paris</span>
              <span className="text-xs text-gray-500 mt-1">Certifié Stratégie</span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-petrol mb-4 group-hover:bg-petrol group-hover:text-white transition-colors duration-300">
                <Terminal size={32} />
              </div>
              <span className="font-bold text-petrol text-lg">IBM</span>
              <span className="text-xs text-gray-500 mt-1">Certifié IA</span>
            </div>

             {/* Badge 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-petrol mb-4 group-hover:bg-petrol group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={32} />
              </div>
              <span className="font-bold text-petrol text-lg">Qualiopi</span>
              <span className="text-xs text-gray-500 mt-1">Organisme Certifié</span>
            </div>

             {/* Badge 4 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-petrol mb-4 group-hover:bg-petrol group-hover:text-white transition-colors duration-300">
                <BookOpen size={32} />
              </div>
              <span className="font-bold text-petrol text-lg">Auteur Publié</span>
              <span className="text-xs text-gray-500 mt-1">"Rebondir après la chute"</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
