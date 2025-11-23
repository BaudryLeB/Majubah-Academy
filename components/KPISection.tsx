
import React from 'react';

export const KPISection: React.FC = () => {
  return (
    <section className="bg-petrol text-white py-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">
          Indicateurs de performance 2024 (Conformité Qualiopi)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-accent mb-2">100%</span>
            <span className="text-sm font-medium text-white/90">Taux de Satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-accent mb-2">26</span>
            <span className="text-sm font-medium text-white/90">Apprenants Formés</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-accent mb-2">8</span>
            <span className="text-sm font-medium text-white/90">Actions de Formation Entreprise</span>
          </div>
        </div>
      </div>
    </section>
  );
};
