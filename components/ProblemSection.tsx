import React from 'react';
import { AlertCircle, FileText, Ghost } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle size={32} />,
      title: "La Pression du Temps",
      desc: "Votre revenu dépend à 100% de votre présence physique. Si vous arrêtez, l'argent s'arrête. Le plafond de verre financier est atteint, le burn-out est proche."
    },
    {
      icon: <FileText size={32} />,
      title: "Le Mur Administratif",
      desc: "Vous avez l'envie de transmettre, mais la phobie de Qualiopi, des BPF et des audits vous bloque. Vous perdez des clients car vous n'êtes pas finançable."
    },
    {
      icon: <Ghost size={32} />,
      title: "L'Expert Invisible",
      desc: "Vous êtes une référence technique dans votre métier, mais un débutant invisible dans le monde de la formation. Personne ne sait comment acheter votre savoir."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-petrol mb-4">
            L'Expertise est là. <br/>
            Mais le modèle actuel vous épuise.
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-surface hover:bg-white hover:shadow-soft border border-transparent hover:border-gray-100 transition-all duration-300 group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-petrol mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};