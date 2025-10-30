import React from 'react';

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 3.834a.973.973 0 01-.972.972.973.973 0 01-.972-.972.973.973 0 01.972-.972.973.973 0 01.972.972zm2.188 1.125a3.81 3.81 0 11-7.62 0 3.81 3.81 0 017.62 0zM12 16a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd"></path></svg>
);

const LinkedinIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 tracking-tighter">Informations</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#E4002B]">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Nos Boutiques</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Recrutement</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Conditions Générales de Vente</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Livraison & Retours</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 tracking-tighter">E-Shop</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#E4002B]">Tous nos choux</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Coffrets Cadeaux</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Épicerie Fine</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Mon Compte</a></li>
              <li><a href="#" className="hover:text-[#E4002B]">Suivre ma commande</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 tracking-tighter">Newsletter</h4>
            <p className="text-gray-600 mb-4">Inscrivez-vous pour recevoir nos offres exclusives.</p>
            <form className="flex">
              <input type="email" placeholder="Votre email" className="w-full px-4 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#E4002B]" />
              <button type="submit" className="bg-[#E4002B] text-white px-4 py-2 rounded-r-md font-semibold hover:bg-[#c30024] transition-colors">OK</button>
            </form>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 tracking-tighter">Suivez-nous</h4>
            <div className="flex space-x-4 text-[#3A3A3A]">
              <a href="#" className="hover:text-[#E4002B] transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-[#E4002B] transition-colors"><InstagramIcon /></a>
              <a href="#" className="hover:text-[#E4002B] transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p className="font-serif text-2xl font-bold text-[#3A3A3A] tracking-tighter mb-4">Le Chou Céleste</p>
          <p>&copy; {new Date().getFullYear()} Le Chou Céleste. Tous droits réservés. Pâtisserie d'exception.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;