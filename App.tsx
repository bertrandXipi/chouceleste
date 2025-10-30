import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-gray-50 text-[#3A3A3A]">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;