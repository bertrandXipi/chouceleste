import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-[#3A3A3A]">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;