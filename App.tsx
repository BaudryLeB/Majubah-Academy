
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionBento } from './components/SolutionBento';
import { AuthoritySection } from './components/AuthoritySection';
import { Footer } from './components/Footer';
import { MethodPage } from './components/MethodPage';
import { BecomeTrainerPage } from './components/BecomeTrainerPage';
import { MeutePage } from './components/MeutePage';
import { AboutPage } from './components/AboutPage';
import { ApplyPage } from './components/ApplyPage';
import { B2BPage } from './components/B2BPage';
import { B2BAuditPage } from './components/B2BAuditPage';
import { ThankYouPage } from './components/ThankYouPage';
import { ThankYouAuditPage } from './components/ThankYouAuditPage';
import { LegalPage } from './components/LegalPage';
import { CGVPage } from './components/CGVPage';
import { AccessibilityPage } from './components/AccessibilityPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle browser back button (simple implementation)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', `#${page}`);

    if (sectionId) {
      // Use setTimeout to allow DOM to update before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showNavAndFooter = currentPage !== 'apply' && currentPage !== 'b2b-audit' && currentPage !== 'thank-you' && currentPage !== 'thank-you-audit';

  return (
    <div className="min-h-screen bg-white font-sans text-petrol">
      {showNavAndFooter && <Navbar onNavigate={navigateTo} />}
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <ProblemSection />
            <SolutionBento />
            <AuthoritySection />
          </>
        ) : currentPage === 'method' ? (
          <MethodPage onNavigate={navigateTo} />
        ) : currentPage === 'become-trainer' ? (
          <BecomeTrainerPage onNavigate={navigateTo} />
        ) : currentPage === 'meute' ? (
          <MeutePage onNavigate={navigateTo} />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'b2b' ? (
          <B2BPage onNavigate={navigateTo} />
        ) : currentPage === 'apply' ? (
          <ApplyPage onNavigate={navigateTo} />
        ) : currentPage === 'b2b-audit' ? (
          <B2BAuditPage onNavigate={navigateTo} />
        ) : currentPage === 'thank-you' ? (
          <ThankYouPage />
        ) : currentPage === 'thank-you-audit' ? (
          <ThankYouAuditPage />
        ) : currentPage === 'legal' ? (
          <LegalPage />
        ) : currentPage === 'cgv' ? (
          <CGVPage />
        ) : currentPage === 'accessibility' ? (
          <AccessibilityPage />
        ) : null}
      </main>
      {showNavAndFooter && <Footer onNavigate={navigateTo} />}
    </div>
  );
};

export default App;
