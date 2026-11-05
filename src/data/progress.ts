export interface Milestone {
  id: string;
  date: string;
  year: string;
  title: string;
  description: string;
  category: 'Milestone' | 'Governance' | 'Healthcare' | 'Education' | 'Infrastructure';
  isVerifiedFact: boolean;
  image?: string;
}

export interface ProgressStat {
  year: string;
  studentsSupported: number;
  patientsTreated: number;
  reliefFamilies: number;
  activeVolunteers: number;
}

export interface StrategicGoal {
  id: string;
  targetYear: '2027';
  title: string;
  category: string;
  description: string;
  targetMetric: string;
  status: 'In Planning' | 'Approved by Shura' | 'Initial Fundraising';
}

export const milestonesTimeline: Milestone[] = [
  {
    id: "m-founding",
    date: "12 January 2025", // TODO: confirm exact initial founding date
    year: "2025",
    title: "Foundational Assembly of Tehreek Ittehad Pakistan",
    description: "Community elders and youth leaders convened in Shorkot to draft the founding declaration of a non-political, brotherhood-driven welfare platform dedicated to humanitarian uplift.",
    category: "Milestone",
    isVerifiedFact: false,
    image: "/images/gallery/calligraphy-alhamdulillah.jpg",
  },
  {
    id: "m-medical-camp",
    date: "26 February 2026",
    year: "2026",
    title: "Collaborative Free Medical Camp at Kaki Nau Dom",
    description: "Organized under the presidency of Chaudhry Asif Mahmood in partnership with Alkhidmat Foundation and WHO, delivering free diagnoses and medicines to over 600 villagers.",
    category: "Healthcare",
    isVerifiedFact: true,
    image: "/images/gallery/free-medical-camp-poster.jpg",
  },
  {
    id: "m-leadership-workshop",
    date: "07 April 2026",
    year: "2026",
    title: "Leadership Reform Session Addressed by Dr. Najam Sheraz",
    description: "Historic training convention covered in Daily Ausaf, Dunya, Muashira, and Sarmaya, establishing the core doctrine that public service must be performed without personal ambition.",
    category: "Governance",
    isVerifiedFact: true,
    image: "/images/gallery/press-coverage-training-session.jpg",
  },
  {
    id: "m-central-presidency",
    date: "06 September 2026",
    year: "2026",
    title: "Oath Ceremony of Central President Chaudhry Muhammad Sadiq",
    description: "Solemn induction ceremony attended by delegates from Shorkot City, Islamabad, Karachi, and other areas, formally ratifying the motto 'Unity, Love and Service'.",
    category: "Governance",
    isVerifiedFact: true,
    image: "/images/members/ch-muhammad-sadiq-taga.jpg",
  },
  {
    id: "m-cabinet-induction",
    date: "14 September 2026",
    year: "2026",
    title: "Oath-Taking of Central & Union Cabinet Office-Bearers",
    description: "Inauguration of regional union presidents and central secretariat secretaries, affirming complete unity, consensus, and zero personal rivalries.",
    category: "Governance",
    isVerifiedFact: true,
    image: "/images/members/ch-jahanzaib-taga.jpg",
  },
  {
    id: "m-central-office",
    date: "06 October 2026",
    year: "2026",
    title: "Establishment of Central Headquarters on Patan Road",
    description: "Official opening of permanent central office near Rescue Office, Patan Road, Shorkot City (Postal Code 35050), centralizing scholarship and public petition cells.",
    category: "Infrastructure",
    isVerifiedFact: true,
    image: "/images/office/vice-president-office.jpg",
  },
  {
    id: "m-education-secretary",
    date: "18 October 2026",
    year: "2026",
    title: "Announcement of Central Education Secretary Portfolio",
    description: "Resolution passed establishing dedicated leadership for student scholarships (PKR 6,000–12,000 stipends) and higher academic mentoring.",
    category: "Education",
    isVerifiedFact: true,
    image: "/images/gallery/educational-scholarships-announcement.jpg",
  },
  {
    id: "m-vp-air-uni",
    date: "28 October 2026",
    year: "2026",
    title: "Central VP Appointed QEC Officer at Air University Islamabad",
    description: "Celebration of Central Vice President Chaudhry Faisal Moon Sarohi's appointment at Air University Bahu Campus Shorkot Cantt, boosting educational partnerships.",
    category: "Education",
    isVerifiedFact: true,
    image: "/images/members/ch-faisal-moon-sarohi.jpg",
  },
];

export const yearlyGrowthStats: ProgressStat[] = [
  {
    year: "2024 (Pre-reg)",
    studentsSupported: 80,
    patientsTreated: 350,
    reliefFamilies: 420,
    activeVolunteers: 45,
  },
  {
    year: "2025 (Founding)",
    studentsSupported: 210,
    patientsTreated: 950,
    reliefFamilies: 1400,
    activeVolunteers: 120,
  },
  {
    year: "2026 (Cabinet Formed)",
    studentsSupported: 450,
    patientsTreated: 1850,
    reliefFamilies: 3200,
    activeVolunteers: 340,
  },
  {
    year: "2027 (Projected)",
    studentsSupported: 1000,
    patientsTreated: 4500,
    reliefFamilies: 6000,
    activeVolunteers: 750,
  },
];

export const strategicGoals2027: StrategicGoal[] = [
  {
    id: "goal-ambulance",
    targetYear: "2027",
    title: "24/7 Community Emergency Ambulance Service",
    category: "Healthcare",
    description: "Procurement of 2 fully equipped life-support ambulances based at the Central Office on Patan Road to transfer emergency patients from rural unions to DHQ Jhang and Allied Hospital.",
    targetMetric: "2 Ambulance Units & 24/7 EMT Dispatch",
    status: "Approved by Shura",
  },
  {
    id: "goal-scholarship-portal",
    targetYear: "2027",
    title: "Digital Scholarship Endowment for 1,000 Students",
    category: "Education",
    description: "Expanding the Tehreek Ittehad student stipend scheme online, enabling paperless merit and need-based applications with automated stipend disbursements.",
    targetMetric: "1,000 Students & PKR 10M Annual Fund",
    status: "In Planning",
  },
  {
    id: "goal-it-vocational-center",
    targetYear: "2027",
    title: "Taga Community IT & Technical Skills Academy",
    category: "Employment & Youth",
    description: "A physical computer laboratory and vocational training workshop in Shorkot City providing accredited courses in programming, electric installation, and motor mechanics.",
    targetMetric: "500 Graduates Annually",
    status: "Initial Fundraising",
  },
  {
    id: "goal-regional-expansion",
    targetYear: "2027",
    title: "Full Chapter Coordination in Islamabad, Karachi & Lahore",
    category: "Organizational Expansion",
    description: "Formal establishment of staffed liaison desks in the federal capital and provincial hubs to coordinate diaspora funding, job placements, and welfare cases.",
    targetMetric: "3 Permanent Regional Liaison Desks",
    status: "Approved by Shura",
  },
];
