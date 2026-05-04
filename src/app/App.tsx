import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePageRevised } from './components/HomePageRevised';
import { AboutPageRevised } from './components/AboutPageRevised';
import { WorkPageEnhanced } from './components/WorkPageEnhanced';
import { BlogPageRevised } from './components/BlogPageRevised';
import { ContactPageRevised } from './components/ContactPageRevised';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePageRevised onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPageRevised />;
      case 'work':
        return <WorkPageEnhanced />;
      case 'blog':
        return <BlogPageRevised />;
      case 'contact':
        return <ContactPageRevised />;
      default:
        return <HomePageRevised onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F2EA]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
