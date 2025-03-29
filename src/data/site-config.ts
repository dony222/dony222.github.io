export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Dony Rivera',
    subtitle: 'Este es mi proyecto personal',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/dony222'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        
          
        
    ],
    socialLinks: [
        {
            text: 'linkedin',
            href: 'www.linkedin.com/in/dony-rivera-salazar'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hola a todos & Bienvenidos a My sitio Web de Proyectos y blogs!',
        text: "I'm **Dony Rivera**, estudiante de desarrollo web autodidacta, Me encuentro aprendiendo sobre programacion diseño y creacion de sitios web. Este es uno de mis primeros proyectos donde aplico lo que voy aprendiendo. Puedes ver mi avanse en <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> o seguirme en <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Pongase en contacto con nosotros',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Suscribete al boletin de Dony',
        text: 'Una actualizacion por semana, todas las actualizaciones mas recientes en tu bandeja de entrada.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
