import type { NavLink, HeroSlide, NewsArticle, Product } from './types';

export type Language = 'fr' | 'es';

export interface Translations {
  header: {
    announcement: string;
    discover: string;
  };
  navLinks: NavLink[];
  heroSlides: HeroSlide[];
  newsArticles: NewsArticle[];
  featuredProducts: Product[];
  home: {
    heroButton: string;
    deliveryMethods: {
      chronofresh: string;
      clickCollect: string;
      delivery: string;
      freeShipping: string;
    };
    newsletter: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
    };
    categories: {
      signature: string;
      boxes: string;
      custom: string;
    };
    featuredTitle: string;
    addButton: string;
    newsTitle: string;
    readMore: string;
    parallax1: {
      title: string;
      subtitle: string;
      button: string;
    };
    parallax2: {
      title: string;
      subtitle: string;
      button: string;
    };
    info: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      announcement: 'LIVRAISON EN FRANCE MÉTROPOLITAINE OFFERTE DÈS 70€ D\'ACHAT • CLICK & COLLECT DISPONIBLE',
      discover: 'Découvrir',
    },
    navLinks: [
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
    ],
    heroSlides: [
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
    ],
    newsArticles: [
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
    ],
    featuredProducts: [
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
    ],
    home: {
      heroButton: 'Découvrir',
      deliveryMethods: {
        chronofresh: 'Livraison Chronofresh',
        clickCollect: 'Click & Collect',
        delivery: 'Livraison Domicile',
        freeShipping: 'Livraison France & Monaco offerte dès 70€ d\'achats',
      },
      newsletter: {
        title: 'Newsletter',
        subtitle: 'Restez informé de nos dernières créations gourmandes.',
        placeholder: 'votre@email.com',
        button: 'OK',
      },
      categories: {
        signature: 'Les Choux Signature',
        boxes: 'Nos Coffrets',
        custom: 'Sur-Mesure',
      },
      featuredTitle: 'Nos Incontournables',
      addButton: 'Ajouter',
      newsTitle: 'Nos Actualités',
      readMore: 'Lire plus',
      parallax1: {
        title: 'Les Secrets de la Recette',
        subtitle: 'L\'art de la pâte à choux parfaite, le secret d\'une crème onctueuse... Notre savoir-faire est un héritage précieux que nous cultivons chaque jour.',
        button: 'Découvrir notre Savoir-Faire',
      },
      parallax2: {
        title: 'Notre Histoire',
        subtitle: 'Depuis sa création, Le Chou Céleste est une histoire de passion, d\'artisanat et de rencontres gourmandes qui ont forgé notre légende.',
        button: 'Découvrir l\'Histoire',
      },
      info: {
        title: 'La Quintessence du Goût',
        description: 'Le Chou Céleste est le fruit d\'une passion pour l\'excellence. Chaque création est un hommage à la pâtisserie française, un mélange subtil de textures et de saveurs, élaboré à partir d\'ingrédients d\'exception rigoureusement sélectionnés.',
      },
    },
  },
  es: {
    header: {
      announcement: 'ENVÍO GRATIS A FRANCIA METROPOLITANA DESDE 70€ DE COMPRA • CLICK & COLLECT DISPONIBLE',
      discover: 'Descubrir',
    },
    navLinks: [
      {
        id: 1,
        title: "Nuestros Choux de Crema",
        href: "/collections/all",
        submenu: {
          title: "Colecciones Gourmet",
          links: [
            { title: "Los Choux Signature", href: "#" },
            { title: "La Pastelería Complementaria", href: "#" },
            { title: "Los Cofres Regalo", href: "#" },
            { title: "Ediciones Limitadas", href: "#" },
          ],
          image: "https://picsum.photos/id/431/300/400"
        }
      },
      {
        id: 2,
        title: "Nuestros Productos",
        href: "/produits",
        submenu: {
          title: "Todas nuestras delicias",
          links: [
            { title: "Bollería y Pan", href: "#" },
            { title: "Comestibles Finos", href: "#" },
            { title: "Bebidas Artesanales", href: "#" },
            { title: "Accesorios y Libros", href: "#" },
          ],
          image: "https://picsum.photos/id/1060/300/400"
        }
      },
      {
        id: 3,
        title: "Entrega",
        href: "/livraison",
      },
      {
        id: 4,
        title: "Nuestra Casa",
        href: "/notre-maison",
        submenu: {
          title: "La Casa del Chou Céleste",
          links: [
            { title: "Nuestra Historia", href: "#" },
            { title: "Los Secretos de la Receta", href: "#" },
            { title: "Nuestras Tiendas", href: "#" },
            { title: "Noticias / Blog", href: "#" },
            { title: "Reclutamiento", href: "#" },
          ],
          image: "https://picsum.photos/id/1078/300/400"
        }
      },
      {
        id: 5,
        title: "A Medida",
        href: "/sur-mesure",
      },
      {
        id: 6,
        title: "Franquicia",
        href: "/franchise",
      },
    ],
    heroSlides: [
      {
        image: 'https://picsum.photos/seed/chou1/1600/900',
        title: "El Chou Signature",
        subtitle: "El equilibrio perfecto entre una masa choux aérea y una crema pastelera de suavidad incomparable.",
        href: "#"
      },
      {
        image: 'https://picsum.photos/seed/chou2/1600/900',
        title: "Colección Estival",
        subtitle: "Sucumbe a nuestras creaciones efímeras con sabores frescos y afrutados de temporada.",
        href: "#"
      },
      {
        image: 'https://picsum.photos/seed/chou3/1600/900',
        title: "El Cofre Degustación",
        subtitle: "Compón tu surtido de mini-choux y comparte un momento gourmet inolvidable.",
        href: "#"
      },
      {
        image: 'https://picsum.photos/seed/chou4/1600/900',
        title: "Edición Limitada Chocolate Gran Cru",
        subtitle: "Una experiencia intensa para los amantes del cacao, disponible por tiempo limitado.",
        href: "#"
      },
      {
        image: 'https://picsum.photos/seed/chou5/1600/900',
        title: "Placer a Medida",
        subtitle: "Para tus eventos, crea choux personalizados que marcarán las mentes.",
        href: "#"
      },
      {
        image: 'https://picsum.photos/seed/chou6/1600/900',
        title: "Click & Collect",
        subtitle: "Pide en línea y recoge tus dulces en la tienda de tu elección.",
        href: "#"
      }
    ],
    newsArticles: [
      {
        id: 1,
        image: 'https://picsum.photos/seed/news1/600/400',
        title: "Nuestra nueva tienda en Lyon",
        date: "Publicado el 15 de Julio de 2025",
        excerpt: "Le Chou Céleste se instala en el corazón de la capital de la gastronomía. ¡Ven a conocernos!"
      },
      {
        id: 2,
        image: 'https://picsum.photos/seed/news2/600/400',
        title: "El Chou del Mes: Frambuesa-Rosa",
        date: "Publicado el 01 de Julio de 2025",
        excerpt: "Una asociación floral y ácida que celebra la llegada de los días hermosos. Una pura maravilla."
      },
      {
        id: 3,
        image: 'https://picsum.photos/seed/news3/600/400',
        title: "Entre bastidores de nuestro laboratorio",
        date: "Publicado el 20 de Junio de 2025",
        excerpt: "Nuestro Chef Pastelero te abre las puertas de su universo y comparte algunos secretos de fabricación."
      }
    ],
    featuredProducts: [
      {
        id: 1,
        name: "El Chou Vainilla-Caramelo",
        description: "Crema pastelera de vainilla de Madagascar y corazón fundente de caramelo con mantequilla salada.",
        price: "6,50€",
        image: "https://picsum.photos/seed/prod1/500/500"
      },
      {
        id: 2,
        name: "El Chou Chocolate Intenso",
        description: "Mousse de chocolate negro gran cru 70% y trozos de habas de cacao tostadas.",
        price: "7,00€",
        image: "https://picsum.photos/seed/prod2/500/500"
      },
      {
        id: 3,
        name: "El Chou Praliné Avellana",
        description: "Crema ligera de praliné tradicional y avellanas del Piamonte caramelizadas.",
        price: "6,80€",
        image: "https://picsum.photos/seed/prod3/500/500"
      },
      {
        id: 4,
        name: "Cofre 'Las Signatures'",
        description: "Un surtido de 6 mini-choux para descubrir nuestros sabores imprescindibles.",
        price: "24,00€",
        image: "https://picsum.photos/seed/prod4/500/500"
      }
    ],
    home: {
      heroButton: 'Descubrir',
      deliveryMethods: {
        chronofresh: 'Entrega Chronofresh',
        clickCollect: 'Click & Collect',
        delivery: 'Entrega a Domicilio',
        freeShipping: 'Envío gratis a Francia y Mónaco desde 70€ de compra',
      },
      newsletter: {
        title: 'Boletín',
        subtitle: 'Mantente informado de nuestras últimas creaciones gourmet.',
        placeholder: 'tu@email.com',
        button: 'OK',
      },
      categories: {
        signature: 'Los Choux Signature',
        boxes: 'Nuestros Cofres',
        custom: 'A Medida',
      },
      featuredTitle: 'Nuestros Imprescindibles',
      addButton: 'Añadir',
      newsTitle: 'Nuestras Noticias',
      readMore: 'Leer más',
      parallax1: {
        title: 'Los Secretos de la Receta',
        subtitle: 'El arte de la masa choux perfecta, el secreto de una crema suave... Nuestro saber hacer es un legado precioso que cultivamos cada día.',
        button: 'Descubrir nuestro Saber Hacer',
      },
      parallax2: {
        title: 'Nuestra Historia',
        subtitle: 'Desde su creación, Le Chou Céleste es una historia de pasión, artesanía y encuentros gourmet que han forjado nuestra leyenda.',
        button: 'Descubrir la Historia',
      },
      info: {
        title: 'La Quintaesencia del Sabor',
        description: 'Le Chou Céleste es el fruto de una pasión por la excelencia. Cada creación es un homenaje a la pastelería francesa, una mezcla sutil de texturas y sabores, elaborada a partir de ingredientes excepcionales rigurosamente seleccionados.',
      },
    },
  },
};
