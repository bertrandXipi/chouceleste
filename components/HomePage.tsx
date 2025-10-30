import React, { useState, useEffect } from 'react';
import { heroSlides, newsArticles, featuredProducts } from '../constants';
import type { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const ChronoFreshIcon = () => <svg className="w-12 h-12 mx-auto mb-2 text-[#3A3A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M12 2v2M12 20v2M4.929 4.929l1.414 1.414M17.657 17.657l1.414 1.414M2 12h2M20 12h2M4.929 19.071l1.414-1.414M17.657 6.343l1.414-1.414" /></svg>;
const ClickCollectIcon = () => <svg className="w-12 h-12 mx-auto mb-2 text-[#3A3A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
const ChronoPostIcon = () => <svg className="w-12 h-12 mx-auto mb-2 text-[#3A3A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h2a1 1 0 001-1V7.414a1 1 0 00-.293-.707l-2-2A1 1 0 0013 .293V4a1 1 0 00-1 1v11z" /></svg>;

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useLanguage();

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white p-4 max-w-4xl">
                            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg tracking-tighter">{slide.title}</h2>
                            <p className="text-lg md:text-xl mb-6 drop-shadow-md">{slide.subtitle}</p>
                            <a href={slide.href} className="bg-[#E4002B] text-white font-bold py-3 px-8 rounded-full hover:bg-[#c30024] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                                {t.home.heroButton}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors">
                <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors">
                <ChevronRight />
            </button>
        </div>
    );
};

const Mosaic: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-white p-6 shadow-lg rounded-lg flex-1 flex flex-col justify-center items-center text-center">
                        <div className="grid grid-cols-3 gap-4 w-full">
                            <a href="#" className="block p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                <ChronoFreshIcon />
                                <span className="font-semibold text-sm">{t.home.deliveryMethods.chronofresh}</span>
                            </a>
                            <a href="#" className="block p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                <ClickCollectIcon />
                                <span className="font-semibold text-sm">{t.home.deliveryMethods.clickCollect}</span>
                            </a>
                            <a href="#" className="block p-2 rounded-lg hover:bg-gray-50 transition-colors">
                               <ChronoPostIcon />
                                <span className="font-semibold text-sm">{t.home.deliveryMethods.delivery}</span>
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">{t.home.deliveryMethods.freeShipping}</p>
                    </div>
                     <div className="bg-white p-6 shadow-lg rounded-lg flex-1 flex flex-col justify-center text-center">
                        <h3 className="font-serif text-2xl font-bold mb-2 tracking-tighter">{t.home.newsletter.title}</h3>
                        <p className="mb-4 text-gray-600 text-sm">{t.home.newsletter.subtitle}</p>
                        <form className="flex">
                            <input type="email" placeholder={t.home.newsletter.placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#E4002B]" />
                            <button type="submit" className="bg-[#E4002B] text-white px-6 py-2 rounded-r-md font-semibold hover:bg-[#c30024] transition-colors">{t.home.newsletter.button}</button>
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 gap-6">
                     <div className="col-span-2 sm:col-span-1 bg-cover bg-center rounded-lg shadow-lg group relative overflow-hidden min-h-[300px]" style={{ backgroundImage: 'url(https://picsum.photos/id/305/600/700)' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <a href="#" className="text-white font-serif text-3xl font-bold transform transition-transform group-hover:-translate-y-1 tracking-tighter">{t.home.categories.signature}</a>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 grid grid-rows-2 gap-6">
                         <div className="bg-cover bg-center rounded-lg shadow-lg group relative overflow-hidden" style={{ backgroundImage: 'url(https://picsum.photos/id/431/500/400)' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <a href="#" className="text-white font-serif text-2xl font-bold transform transition-transform group-hover:-translate-y-1 tracking-tighter">{t.home.categories.boxes}</a>
                            </div>
                        </div>
                        <div className="bg-cover bg-center rounded-lg shadow-lg group relative overflow-hidden" style={{ backgroundImage: 'url(https://picsum.photos/id/225/500/400)' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <a href="#" className="text-white font-serif text-2xl font-bold transform transition-transform group-hover:-translate-y-1 tracking-tighter">{t.home.categories.custom}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturedProducts: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-4xl font-bold text-center mb-10 tracking-tighter">{t.home.featuredTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product: Product) => (
                        <div key={product.id} className="group text-center">
                            <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                                <img src={product.image} alt={product.name} className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a href="#" className="bg-[#E4002B] text-white font-bold py-2 px-6 rounded-full">
                                        {t.home.addButton}
                                    </a>
                                </div>
                            </div>
                            <h3 className="font-serif text-xl font-bold tracking-tighter">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                            <p className="font-bold text-lg">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const NewsSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-4xl font-bold text-center mb-10 tracking-tighter">{t.home.newsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <div key={article.id} className="group">
                            <a href="#" className="block overflow-hidden rounded-lg shadow-lg">
                                <img src={article.image} alt={article.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </a>
                            <div className="p-4">
                                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-[#E4002B] transition-colors tracking-tighter"><a href="#">{article.title}</a></h3>
                                <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                                <a href="#" className="font-bold text-[#3A3A3A] hover:underline">{t.home.readMore} →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ParallaxSection: React.FC<{image: string; title: string; subtitle?: string; buttonText: string; buttonLink: string}> = ({ image, title, subtitle, buttonText, buttonLink }) => (
    <div className="h-[500px] bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="font-serif text-5xl font-bold mb-4 drop-shadow-lg tracking-tighter">{title}</h2>
            {subtitle && <p className="text-lg max-w-2xl mb-6 drop-shadow-md">{subtitle}</p>}
            <a href={buttonLink} className="bg-[#E4002B] text-white font-bold py-3 px-8 rounded-full hover:bg-[#c30024] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                {buttonText}
            </a>
        </div>
    </div>
);

const InfoSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-lg shadow-lg">
                <div className="md:w-1/2">
                    <img src="https://picsum.photos/seed/info/600/400" alt="Pâtissier" className="rounded-lg w-full h-auto" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="font-serif text-4xl font-bold text-[#3A3A3A] mb-4 tracking-tighter">{t.home.info.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t.home.info.description}
                    </p>
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div>
            <HeroSlider />
            <Mosaic />
            <FeaturedProducts />
            <ParallaxSection
                image="https://picsum.photos/id/119/1200/800"
                title={t.home.parallax1.title}
                subtitle={t.home.parallax1.subtitle}
                buttonText={t.home.parallax1.button}
                buttonLink="#"
            />
            <NewsSection />
             <ParallaxSection
                image="https://picsum.photos/id/22/1200/800"
                title={t.home.parallax2.title}
                subtitle={t.home.parallax2.subtitle}
                buttonText={t.home.parallax2.button}
                buttonLink="#"
            />
            <InfoSection />
        </div>
    );
};

export default HomePage;