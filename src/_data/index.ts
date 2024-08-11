import { NavLink } from "../types";


export const partners = [
    {
        name: 'Jane Doe',
        title: 'Attorney',
        image: '/images/jane-doe.jpg',
        email: 'johndoe@exampl.com',
    },
    {
        name: 'John Smith',
        title: 'Attorney',
        image: '/images/john-smith.jpg',
        email: ''
    },
];

export const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
];




export const home = {
    brand: 'Alliance Law Group',
    tagline: 'Serving clients with excellence and dedication across various legal fields.',
    slogan: 'Providing Expert Legal Services with Integrity and Compassion',
    attorneys: {
        thomas: {
            school: 'Harvard Law School',
            experience: 15,
        },
        darren: {
            school: 'Yale Law School',
            experience: 12,
        },
    },
};



export const attorneys = [
    {
        name: "Thomas L’Palmer",
        email: "Tpalmer.ALG@gmail.com",
        image: "/images/placeholder1.jpg", // Replace with actual image paths
        school: "Harvard Law School",
        experience: "15 years",
    },
    {
        name: "Darren L’Morrison",
        email: "Dmorrison.LP@gmail.com",
        image: "/images/placeholder2.jpg", // Replace with actual image paths
        school: "Yale Law School",
        experience: "12 years",
    },
];


export const lawFirmData = {
    name: "Alliance Law Group",
    address: "123 Main St.",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    iframesrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.800592169468!2d-0.18798048943593293!3d5.596455394360929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b61b22ee967%3A0x7c2272f7b3acd683!2sCSIR%20HEAD%20OFFICE!5e0!3m2!1sen!2sgh!4v1723402488613!5m2!1sen!2sgh",
    phone: "555-555-5555",
    email: "johndoe@exampl.com",
    website: "www.johndoe.com",
    image: "/images/law-firm.jpg",
    social: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com",
        instagram: "https://www.instagram.com",
    },
};
