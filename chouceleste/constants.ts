
import type { NavLink, HeroSlide, NewsArticle, Product } from './types';

export const navLinks: NavLink[] = [
    {
        id: 1,
        title: "Nos Choux à la Crème",
        href: "/collections/all",
        submenu: {
            title: "Collections Gourmandes",
            links: [
                { title: "Les Choux Signature", href: "#" },
                { title: "Les Pâtisseries Complémentaires", href: "#" },
                { title: "Les Coffrets Cadeaux", href: "#" },
                { title: "Éditions Limitées", href: "#" },
            ],
            image: "https://picsum.photos/id/431/300/400"
        }
    },
    {
        id: 2,
        title: "Nos Produits",
        href: "/produits",
        submenu: {
            title: "Toutes nos gourmandises",
            links: [
                { title: "Viennoiseries et Pain", href: "#" },
                { title: "Épicerie Fine", href: "#" },
                { title: "Boissons Artisanales", href: "#" },
                { title: "Accessoires & Livres", href: "#" },
            ],
            image: "https://picsum.photos/id/1060/300/400"
        }
    },
    {
        id: 3,
        title: "Livraison",
        href: "/livraison",
    },
     {
        id: 4,
        title: "Notre Maison",
        href: "/notre-maison",
        submenu: {
            title: "La Maison du Chou Céleste",
            links: [
                { title: "Notre Histoire", href: "#" },
                { title: "Les Secrets de la Recette", href: "#" },
                { title: "Nos Boutiques", href: "#" },
                { title: "Actualités / Blog", href: "#" },
                { title: "Recrutement", href: "#" },
            ],
            image: "https://picsum.photos/id/1078/300/400"
        }
    },
    {
        id: 5,
        title: "Sur-Mesure",
        href: "/sur-mesure",
    },
    {
        id: 6,
        title: "Franchise",
        href: "/franchise",
    },
];

export const heroSlides: HeroSlide[] = [
    {
        image: 'https://picsum.photos/seed/chou1/1600/900',
        title: "Le Chou Signature",
        subtitle: "L'équilibre parfait entre une pâte à choux aérienne et une crème pâtissière d'une onctuosité incomparable.",
        href: "#"
    },
    {
        image: 'https://picsum.photos/seed/chou2/1600/900',
        title: "Collection Estivale",
        subtitle: "Succombez à nos créations éphémères aux saveurs fraîches et fruitées de saison.",
        href: "#"
    },
    {
        image: 'https://picsum.photos/seed/chou3/1600/900',
        title: "Le Coffret Dégustation",
        subtitle: "Composez votre assortiment de mini-choux et partagez un instant gourmand inoubliable.",
        href: "#"
    },
    {
        image: 'https://picsum.photos/seed/chou4/1600/900',
        title: "Édition Limitée Chocolat Grand Cru",
        subtitle: "Une expérience intense pour les amateurs de cacao, disponible pour une durée limitée.",
        href: "#"
    },
    {
        image: 'https://picsum.photos/seed/chou5/1600/900',
        title: "Plaisir Sur-Mesure",
        subtitle: "Pour vos événements, créez des choux personnalisés qui marqueront les esprits.",
        href: "#"
    },
    {
        image: 'https://picsum.photos/seed/chou6/1600/900',
        title: "Click & Collect",
        subtitle: "Commandez en ligne et récupérez vos douceurs dans la boutique de votre choix.",
        href: "#"
    }
];

export const newsArticles: NewsArticle[] = [
    {
        id: 1,
        image: 'https://picsum.photos/seed/news1/600/400',
        title: "Notre nouvelle boutique à Lyon",
        date: "Publié le 15 Juillet 2025",
        excerpt: "Le Chou Céleste pose ses valises au cœur de la capitale de la gastronomie. Venez nous rencontrer !"
    },
    {
        id: 2,
        image: 'https://picsum.photos/seed/news2/600/400',
        title: "Le Chou du Mois : Framboise-Rose",
        date: "Publié le 01 Juillet 2025",
        excerpt: "Une association florale et acidulée qui célèbre l'arrivée des beaux jours. Une pure merveille."
    },
    {
        id: 3,
        image: 'https://picsum.photos/seed/news3/600/400',
        title: "Dans les coulisses de notre laboratoire",
        date: "Publié le 20 Juin 2025",
        excerpt: "Notre Chef Pâtissier vous ouvre les portes de son univers et partage quelques secrets de fabrication."
    }
];

export const featuredProducts: Product[] = [
    {
        id: 1,
        name: "Le Chou Vanille-Caramel",
        description: "Crème pâtissière à la vanille de Madagascar et cœur coulant au caramel beurre salé.",
        price: "6,50€",
        image: "https://picsum.photos/seed/prod1/500/500"
    },
    {
        id: 2,
        name: "Le Chou Chocolat Intense",
        description: "Mousse au chocolat noir grand cru 70% et éclats de fèves de cacao torréfiées.",
        price: "7,00€",
        image: "https://picsum.photos/seed/prod2/500/500"
    },
    {
        id: 3,
        name: "Le Chou Praliné Noisette",
        description: "Crème légère au praliné à l'ancienne et noisettes du Piémont caramélisées.",
        price: "6,80€",
        image: "https://picsum.photos/seed/prod3/500/500"
    },
    {
        id: 4,
        name: "Coffret 'Les Signatures'",
        description: "Un assortiment de 6 mini-choux pour découvrir nos saveurs incontournables.",
        price: "24,00€",
        image: "https://picsum.photos/seed/prod4/500/500"
    }
];
