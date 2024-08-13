export const home = {
    brand: 'Alliance Law Group',
    tagline: 'Serving clients with excellence and dedication across various legal fields.',
    slogan: 'Providing Expert Legal Services with Integrity and Compassion',
};
export interface Attorney {
    name: string;
    email: string;
    image: string;
    school: string;
    role: string;
    experience: string;
}



export const attorneys: Attorney[] = [
    {
        name: "Thomas L’Palmer",
        email: "Tpalmer.ALG@gmail.com",
        image: "/images/palmer.jpg",
        school: "Harvard Law School",
        role: "Attorney",
        experience: "40 years",
    },
    {
        name: "Darren L’Morrison",
        email: "Dmorrison.LP@gmail.com",
        image: "/images/morison.jpg",
        school: "Yale Law School",
        role: "Attorney",
        experience: "30 years",
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
