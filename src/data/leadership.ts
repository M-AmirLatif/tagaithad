export interface Leader {
  id: string;
  name: string;
  urduName?: string;
  title: string;
  department?: string;
  level: 'central-executive' | 'cabinet' | 'union';
  image: string;
  alt: string;
  isConfirmed: boolean;
  bio: string;
  contact?: string;
  appointedDate?: string;
  affiliations?: string[];
  keyQuote?: string;
}

export const chairmanProfile = {
  name: "Dr. Zafar Iqbal Taga",
  urduName: "ڈاکٹر ظفر اقبال تگہ",
  title: "Chairman, Taga Ittehad Pakistan",
  image: "/images/members/distinguished-leader-tbc.jpg", // TODO: confirm official chairman portrait
  isPortraitConfirmed: false,
  messageStatus: "Draft – to be approved by Chairman",
  message: `Dear brothers and sisters of the Taga community and citizens of Pakistan,\n\nOur journey was born from a timeless realization: when a community stands divided, even abundant resources fail to protect its weak; but when people unite under sincere brotherhood, compassion, and divine guidance, every humble effort becomes an enduring oasis of hope. \n\nTaga Ittehad Pakistan was founded not to chase transient titles, seek political rivalries, or serve individual ambition. We stand firmly for one noble aspiration: to serve our fellow human beings with pristine sincerity (Ikhlas), to provide quality education for children who dream of a brighter dawn, to deliver healthcare to the suffering, and to extend an unyielding hand during calamities.\n\nI call upon every youth, elder, and professional of our community—whether in Shorkot, Islamabad, Karachi, or overseas—to invest your knowledge, energy, and prayers into this sacred mission of uplifting humanity.\n\nMay Allah Almighty bless our unity, guide our steps, and make our collective service a source of lasting peace and prosperity for our nation.`,
  vision: "To cultivate an empowered, educated, and self-sufficient society founded upon mutual love, moral integrity, and social justice—where no deserving individual is left without education, dignity, or compassionate healthcare.",
  mission: "To unite community members across Pakistan, establish sustainable grassroots welfare programmes in education, health, and economic empowerment, and serve all humanity without distinction of creed or background.",
  corePillars: [
    { title: "Unity (Ittehad)", description: "Bridging geographical and social divides to build an unbreakable fraternity." },
    { title: "Sincerity (Ikhlas)", description: "Serving solely for humanitarian impact with zero personal interest or rivalry." },
    { title: "Empowerment (Khidmat)", description: "Equipping young minds and families with education, healthcare, and livelihood." },
    { title: "Accountability (Amanat)", description: "Upholding complete transparency in community welfare and public trust." },
  ],
};

export const executiveLeaders: Leader[] = [
  {
    id: "ch-muhammad-sadiq",
    name: "Chaudhry Muhammad Sadiq Taga Ittehad (Advisor)",
    urduName: "چوہدری محمد صدیق تگہ",
    title: "Central President",
    department: "Executive Leadership & General Oversight",
    level: "central-executive",
    image: "/images/members/ch-muhammad-sadiq-taga.jpg",
    alt: "Portrait of Central President Chaudhry Muhammad Sadiq Taga",
    isConfirmed: true,
    bio: "Took the solemn oath as Central President in a dignified ceremony on 06 September 2026, attended by community representatives from Tehsil Shorkot City, Islamabad, Karachi, and across Pakistan. He champions education, community healthcare, and youth employment with the organizational motto: 'Unity, Love and Service'.",
    contact: "0301-7696784",
    appointedDate: "06 September 2026",
    affiliations: ["Sadiq Traders, Jhang Road", "Taga Shura Council"],
    keyQuote: "Our goal is not positions but unity. We do not aim to compete with or prove anyone wrong, but to bring the entire community together on one platform with love and consensus.",
  },
  {
    id: "ch-faisal-moon-sarohi",
    name: "Chaudhry Faisal Moon Sarohi",
    urduName: "چوہدری فیصل مون سروہی",
    title: "Central Vice President",
    department: "Executive Strategy & Institutional Coordination",
    level: "central-executive",
    image: "/images/members/ch-faisal-moon-sarohi.jpg",
    alt: "Portrait of Central Vice President Chaudhry Faisal Moon Sarohi at his desk",
    isConfirmed: true,
    bio: "Advocate and Principal who has recently been appointed as Quality Enhancement Cell (QEC) Officer at Air University Islamabad, Bahu Campus, Shorkot Cantt. His distinguished academic leadership and legal acumen are a tremendous source of pride and strategic direction for Taga Ittehad Pakistan.",
    contact: "Office of Central Vice President",
    appointedDate: "2026",
    affiliations: ["QEC Officer, Air University Islamabad (Bahu Campus)", "Principal, United College Shorkot City", "High Court Bar Advocate"],
    keyQuote: "True leadership is demonstrated when education unlocks opportunities for those who previously believed doors were shut.",
  },
  {
    id: "central-education-secretary",
    name: "Central Education Secretary [To Be Announced]", // TODO: confirm
    urduName: "مرکزی سیکرٹری تعلیم (زیر اعلان)",
    title: "Central Education Secretary",
    department: "Education Scholarship & Academic Development",
    level: "central-executive",
    image: "/images/members/member-hall-gathering-tbc.jpg",
    alt: "Central Education Secretary placeholder portrait",
    isConfirmed: false,
    bio: "Formal portfolio established on 18 October 2026 to oversee student stipends, school adoption, and higher-education mentorship programmes across Punjab and beyond.",
    appointedDate: "18 October 2026",
    affiliations: ["Higher Education Wing", "Scholarship Committee"],
    keyQuote: "Investing in the mind of a child is the single greatest act of communal welfare.",
  },
];

export const cabinetMembers: Leader[] = [
  {
    id: "ch-jahanzaib-taga",
    name: "Chaudhry Jahanzaib Taga",
    urduName: "چوہدری جہانزیب تگہ",
    title: "Central General Secretary",
    department: "Central Secretariat & Operations",
    level: "cabinet",
    image: "/images/members/ch-jahanzaib-taga.jpg",
    alt: "Portrait of Central General Secretary Chaudhry Jahanzaib Taga",
    isConfirmed: true,
    bio: "Agricultural Field Officer and dedicated social organizer coordinating inter-district union activities, organizational meetings, and membership outreach.",
    contact: "0303-7775194",
    affiliations: ["Agricultural Field Services", "Central Secretariat"],
  },
  {
    id: "ch-muhammad-sajid-taga",
    name: "Chaudhry Muhammad Sajid Taga",
    urduName: "چوہدری محمد ساجد تگہ",
    title: "Central Deputy Secretary",
    department: "Secretariat & Administrative Support",
    level: "cabinet",
    image: "/images/members/ch-muhammad-sajid-taga.jpg",
    alt: "Portrait of Central Deputy Secretary Chaudhry Muhammad Sajid Taga",
    isConfirmed: true,
    bio: "Elected to manage central cabinet protocols and town liaison. Serves the community with an unblemished dedication to social welfare.",
    contact: "0315-4178843",
    affiliations: ["Rana Property Dealers, Cantt Road Shorkot City"],
  },
  {
    id: "ch-muhammad-ghulam-mustafa",
    name: "Chaudhry Muhammad Ghulam Mustafa Taga",
    urduName: "چوہدری محمد غلام مصطفیٰ تگہ",
    title: "Welfare & Party Fund Secretary",
    department: "Finance, Welfare & Legal Audit",
    level: "cabinet",
    image: "/images/members/ch-muhammad-ghulam-mustafa-taga.jpg",
    alt: "Portrait of Welfare Fund Secretary Chaudhry Muhammad Ghulam Mustafa Taga",
    isConfirmed: true,
    bio: "Legal Assistant at Shorkot City Courts ensuring rigorous transparency, donor accountability, and lawful governance of all welfare disbursements.",
    contact: "0307-0107993",
    affiliations: ["Judicial Complex / Shorkot City Courts"],
  },
  {
    id: "hamad-qayyum-taga",
    name: "Hamad Qayyum Taga",
    urduName: "حمد قیوم تگہ",
    title: "Youth & Educational Affairs Coordinator",
    department: "Youth Mobilization & NA-110 Liaison",
    level: "cabinet",
    image: "/images/members/hamad-qayyum-taga.jpg",
    alt: "Portrait of Youth Leader Hamad Qayyum Taga",
    isConfirmed: true,
    bio: "Principal of Star Science College and appointed Coordinator for the Electricity Consumers Committee in NA-110, actively driving community civic welfare and education initiatives.",
    affiliations: ["Principal, Star Science College", "Electricity Consumers Committee NA-110"],
  },
  {
    id: "cabinet-placeholder-1",
    name: "Union Welfare Coordinator – To Be Confirmed", // TODO: confirm
    title: "Cabinet Joint Secretary (Public Relations)",
    department: "Public Outreach & Media",
    level: "cabinet",
    image: "/images/members/member-hall-gathering-tbc.jpg",
    alt: "Cabinet representative placeholder",
    isConfirmed: false,
    bio: "Coordinates relations with press agencies, social media channels, and partner non-governmental welfare bodies.",
  },
];
