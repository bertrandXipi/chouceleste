
export interface SubmenuLink {
  title: string;
  href: string;
}

export interface Submenu {
  title: string;
  links: SubmenuLink[];
  image?: string;
}

export interface NavLink {
  id: number;
  title: string;
  href: string;
  submenu?: Submenu;
}

export interface HeroSlide {
    image: string;
    title: string;
    subtitle: string;
    href: string;
}

export interface NewsArticle {
    id: number;
    image: string;
    title: string;
    date: string;
    excerpt: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}
