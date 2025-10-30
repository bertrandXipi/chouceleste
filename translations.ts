export type Language = 'fr' | 'es';

export interface Translations {
  header: {
    announcement: string;
    discover: string;
  };
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
