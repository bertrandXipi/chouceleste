import React, { useState } from 'react';
import { navLinks } from '../constants';
import type { NavLink } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

  return (
    <header className="relative z-50">
      <div className="bg-[#E4002B] text-white text-center p-2 text-sm font-light tracking-wider">
        {t.header.announcement}
      </div>
      <div className="bg-white/80 backdrop-blur-md shadow-md sticky top-0">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-[#3A3A3A]">
                        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
                    <a href="/" className="font-serif text-2xl font-bold text-[#3A3A3A] tracking-tighter">
                        Le Chou Céleste
                    </a>
                </div>

                <nav className="hidden lg:flex flex-grow justify-center items-center space-x-8 text-md font-semibold tracking-wide">
                    {navLinks.map((link) => (
                        <div key={link.id} className="group relative">
                            <a href={link.href} className="text-[#3A3A3A] hover:text-[#E4002B] transition-colors duration-300 pb-4">
                                {link.title} {link.submenu && <ChevronDownIcon />}
                            </a>
                            {link.submenu && (
                                <div className="absolute top-full -left-1/2 transform translate-x-1/4 w-auto min-w-[500px] bg-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible rounded-b-lg p-6">
                                    <div className="flex gap-8">
                                        <div className="flex-1">
                                            <h3 className="font-serif text-lg font-bold mb-4 text-[#3A3A3A] tracking-tighter">{link.submenu.title}</h3>
                                            <ul className="space-y-2">
                                                {link.submenu.links.map((sublink, index) => (
                                                    <li key={index}><a href={sublink.href} className="block hover:text-[#E4002B] transition-colors duration-200">{sublink.title}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        {link.submenu.image && (
                                            <div className="flex-1">
                                                <img src={link.submenu.image} alt="Promotion" className="rounded-md object-cover w-full h-full" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center space-x-4 text-[#3A3A3A]">
                    <button
                        onClick={() => setLanguage(language === 'fr' ? 'es' : 'fr')}
                        className="px-3 py-1 rounded-md border-2 border-[#3A3A3A] hover:bg-[#E4002B] hover:text-white hover:border-[#E4002B] transition-colors duration-300 font-semibold text-sm"
                    >
                        {language === 'fr' ? 'ES' : 'FR'}
                    </button>
                    <a href="#" className="hover:text-[#E4002B] transition-colors duration-300"><UserIcon /></a>
                    <a href="#" className="hover:text-[#E4002B] transition-colors duration-300 flex items-center">
                        <CartIcon />
                        <span className="ml-1 text-sm">(0)</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
       {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full w-full bg-white shadow-lg">
              <nav className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                      <div key={link.id}>
                          <a href={link.href} className="block py-2 font-semibold text-[#3A3A3A] hover:text-[#E4002B]">
                              {link.title}
                          </a>
                          {link.submenu && (
                              <div className="pl-4 pt-2 space-y-2">
                                  {link.submenu.links.map((sublink, index) => (
                                      <a key={index} href={sublink.href} className="block py-1 text-sm text-gray-700 hover:text-[#E4002B]">{sublink.title}</a>
                                  ))}
                              </div>
                          )}
                      </div>
                  ))}
              </nav>
          </div>
      )}
    </header>
  );
};

export default Header;