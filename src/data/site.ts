export interface SiteConfig {
  name: string;
  urduName: string;
  tagline: string;
  taglineUrdu: string;
  englishSubline: string;
  bio: string;
  coreValues: string[];
  centralOffice: {
    address: string;
    landmark: string;
    road: string;
    city: string;
    district: string;
    province: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    email: string;
  };
  social: {
    facebook: string;
    tiktok: string;
  };
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Taga Ittehad Pakistan",
  urduName: "تگہ اتحاد پاکستان",
  tagline: "Qaum Ka Sahara, Ittehad Hamara",
  taglineUrdu: "قوم کا سہارا، اتحاد ہمارا",
  englishSubline: "The Nation's Support, Unity Is Our Strength",
  bio: "Taga Ittehad Pakistan is a welfare organization committed to humanitarian service. We work for education, healthcare, disaster relief & social welfare, building a society of unity, compassion & hope.",
  coreValues: ["Unity", "Love", "Service", "Brotherhood"],
  centralOffice: {
    address: "Near Rescue Office, Patan Road, Shorkot City, District Jhang, Punjab, Pakistan – 35050",
    landmark: "Near Rescue Office",
    road: "Patan Road",
    city: "Shorkot City",
    district: "District Jhang",
    province: "Punjab",
    postalCode: "35050",
    country: "Pakistan",
  },
  contact: {
    phone: "+923017696784",
    displayPhone: "0301-7696784",
    whatsapp: "https://wa.me/923017696784",
    email: "contact@tagaittehad.org.pk", // TODO: confirm official domain email
  },
  social: {
    facebook: "https://www.facebook.com/tehreekeithad12",
    tiktok: "https://www.tiktok.com/@tagaitehadpak",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Chairman", href: "/chairman" },
    { label: "Leadership", href: "/leadership" },
    { label: "Areas & Towns", href: "/areas" },
    { label: "Welfare Work", href: "/welfare" },
    { label: "Progress", href: "/progress" },
    { label: "News", href: "/news" },
    { label: "Notifications", href: "/notifications" },
    { label: "Contact", href: "/contact" },
  ],
};
