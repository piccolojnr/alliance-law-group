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
        experience: "43 years",
    },
];


export const lawFirmData = {
    name: "Alliance Law Group",
    address: "ALG@org.com",
    phone: "555-555-5555",
    email: "johndoe@exampl.com",
    image: "/images/law-firm.jpg",
    social: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com",
        instagram: "https://www.instagram.com",
    },
};
