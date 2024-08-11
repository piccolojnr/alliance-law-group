// LAW FIRM DATA

export interface Social {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
}

export interface LawFirm {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    website: string;
    social: Social;
}

// NAVIGATION LINKS

export interface NavLink {
    name: string;
    href: string;
}

// SERVICES

export interface Service {
    title: string;
    description: string;
    image: string;
}

// TESTIMONIALS

export interface Testimonial {
    name: string;
    title: string;
    quote: string;
}

// HOME

export interface Home {
    brand: string;
    tagline: string;
    slogan: string;
}

export interface About {
    title: string;
    description: string;
}