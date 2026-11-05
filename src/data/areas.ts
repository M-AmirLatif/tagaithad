export interface AreaMember {
  id: string;
  name: string;
  urduName?: string;
  role: string;
  area: string;
  regionCategory: 'Shorkot City' | 'Islamabad' | 'Karachi' | 'Others';
  image: string;
  contact?: string;
  businessOrProfession?: string;
  isConfirmed: boolean;
  memberCountPlaceholder?: number;
  description: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  category: 'Shorkot City' | 'Islamabad' | 'Karachi' | 'Others';
  district: string;
  leadPerson: string;
  contactNumber: string;
  officeLocation: string;
  focusInitiatives: string[];
  overview: string;
}

export const areasList: { name: string; category: 'Shorkot City' | 'Islamabad' | 'Karachi' | 'Others' }[] = [
  { name: "All Areas", category: "Others" },
  { name: "Shorkot City", category: "Shorkot City" },
  { name: "Islamabad", category: "Islamabad" },
  { name: "Karachi", category: "Karachi" },
  { name: "Others", category: "Others" },
];

export const areaMembers: AreaMember[] = [
  {
    id: "tahir-taga-shorkot",
    name: "Chaudhry Muhammad Tahir Taga",
    urduName: "چوہدری محمد طاہر تگہ",
    role: "President – Shorkot City",
    area: "Shorkot City (Usmania Bazar)",
    regionCategory: "Shorkot City",
    image: "/images/members/ch-muhammad-tahir-taga.jpg",
    contact: "0300-6508964",
    businessOrProfession: "Tahir General Store, Usmania Bazar, Shorkot City",
    isConfirmed: true,
    description: "Leading all urban community welfare programs, shopkeeper mutual support funds, and civic facilitation within Shorkot City proper.",
  },
  {
    id: "saleem-taga-south",
    name: "Chaudhry Muhammad Saleem Taga",
    urduName: "چوہدری محمد سلیم تگہ",
    role: "President – Union South",
    area: "Union South (Lari Adda Shorkot)",
    regionCategory: "Shorkot City",
    image: "/images/members/ch-muhammad-saleem-taga.jpg",
    contact: "0342-0200013",
    businessOrProfession: "Bismillah Auto Spare Parts, Lari Adda Shorkot City",
    isConfirmed: true,
    description: "Spearheading grassroots social support, emergency transport facilitation, and community elder care in the southern union perimeter.",
  },
  {
    id: "yameen-taga-chak-1",
    name: "Chaudhry Muhammad Yameen Taga",
    urduName: "چوہدری محمد یامین تگہ",
    role: "President – Union Chak Awwal (Chak 1)",
    area: "Union Chak Awwal, Tehsil Shorkot",
    regionCategory: "Shorkot City",
    image: "/images/members/ch-muhammad-yameen-taga.jpg",
    isConfirmed: true,
    description: "Overseeing rural agrarian welfare, farmer educational support, and basic healthcare camps across Chak No. 1 and adjacent villages.",
  },
  {
    id: "haneef-taga-chak-3",
    name: "Chaudhry Muhammad Haneef Taga",
    urduName: "چوہدری محمد حنیف تگہ",
    role: "President – Union Chak Soem (Chak 3)",
    area: "Union Chak Soem, Tehsil Shorkot",
    regionCategory: "Shorkot City",
    image: "/images/members/ch-muhammad-haneef-taga.jpg",
    isConfirmed: true,
    description: "Elected to foster agrarian unity, resolve local civil disputes by consensus, and identify deserving candidates for student stipends.",
  },
  {
    id: "asif-mahmood-kaki-nau-dom",
    name: "Chaudhry Asif Mahmood",
    urduName: "چوہدری آصف محمود",
    role: "President – Kaki Nau Dom Chapter",
    area: "Kaki Nau Dom, Tehsil Shorkot",
    regionCategory: "Shorkot City",
    image: "/images/members/distinguished-leader-tbc.jpg", // TODO: confirm specific portrait
    contact: "0300-7056301",
    isConfirmed: true,
    description: "Organized the milestone Free Medical Camp in active collaboration with Alkhidmat Foundation and WHO, delivering free diagnoses and medicines.",
  },
  {
    id: "islamabad-coordinator-tbc",
    name: "Islamabad Representative – To Be Confirmed", // TODO: confirm
    role: "Regional Coordinator – Federal Capital",
    area: "Islamabad & Rawalpindi",
    regionCategory: "Islamabad",
    image: "/images/members/member-hall-gathering-tbc.jpg",
    isConfirmed: false,
    description: "Coordinating higher-education linkages with universities in Islamabad and engaging federal civil servants from the Taga diaspora.",
  },
  {
    id: "karachi-coordinator-tbc",
    name: "Karachi Representative – To Be Confirmed", // TODO: confirm
    role: "Regional Coordinator – Sindh Chapter",
    area: "Karachi (Metropolitan & Port Region)",
    regionCategory: "Karachi",
    image: "/images/members/member-hall-gathering-tbc.jpg",
    isConfirmed: false,
    description: "Mobilizing philanthropic traders, logistics professionals, and youth associations residing across the Karachi metropolitan region.",
  },
  {
    id: "faisalabad-coordinator-tbc",
    name: "Faisalabad Liaison – To Be Confirmed", // TODO: confirm
    role: "District Liaison Officer",
    area: "Faisalabad Division",
    regionCategory: "Others",
    image: "/images/members/member-hall-gathering-tbc.jpg",
    isConfirmed: false,
    description: "Facilitating healthcare referrals to major tertiary hospitals and managing trade apprentice placements for rural youth.",
  },
];

export const areaDetails: Record<string, AreaDetail> = {
  "shorkot-city": {
    slug: "shorkot-city",
    name: "Shorkot City & Cantonment",
    category: "Shorkot City",
    district: "Jhang District, Punjab",
    leadPerson: "Chaudhry Muhammad Tahir Taga",
    contactNumber: "0300-6508964",
    officeLocation: "Central Office, Near Rescue Office, Patan Road, Shorkot City",
    focusInitiatives: [
      "Central Welfare Emergency Dispensary",
      "Student Educational Stipend Verification Cell",
      "Trade & Vocational Workshop Coordination",
      "Deserving Family Monthly Ration Assistance",
    ],
    overview: "Shorkot City is the historical epicenter and central administrative seat of Taga Ittehad Pakistan. The city council manages municipal cooperation, public health camps, and student scholarships across both civilian and cantonment zones.",
  },
  "islamabad": {
    slug: "islamabad",
    name: "Islamabad & Rawalpindi Chapter",
    category: "Islamabad",
    district: "Federal Capital Territory",
    leadPerson: "Regional Coordinator [To Be Confirmed]",
    contactNumber: "0301-7696784",
    officeLocation: "Liaison Office, Sector G-11, Islamabad",
    focusInitiatives: [
      "Higher Education University Admissions Guidance",
      "Youth Internship Placements & Career Counseling",
      "Disaster Relief Strategic Coordination",
      "Policy & Legal Advisory Council",
    ],
    overview: "Connecting federal civil servants, scholars, and overseas returnees from the Taga family with local development priorities in central Punjab.",
  },
  "karachi": {
    slug: "karachi",
    name: "Karachi Sindh Chapter",
    category: "Karachi",
    district: "Karachi Division, Sindh",
    leadPerson: "Regional Coordinator [To Be Confirmed]",
    contactNumber: "0301-7696784",
    officeLocation: "Commercial Hub Liaison, Clifton / Saddar, Karachi",
    focusInitiatives: [
      "Industrial & Port Logistics Employment Cell",
      "Medical Emergency Patient Welfare for Specialized Cases",
      "Business Mentorship & Micro-Enterprise Grants",
    ],
    overview: "Bringing together business owners, engineers, and healthcare practitioners across Karachi to fund developmental projects back in rural towns.",
  },
  "others": {
    slug: "others",
    name: "Inter-District & Overseas Chapters",
    category: "Others",
    district: "Punjab, KPK & Overseas Diaspora",
    leadPerson: "Central Secretariat Liaison Desk",
    contactNumber: "0301-7696784",
    officeLocation: "Coordinated via Shorkot Central Secretariat",
    focusInitiatives: [
      "Clean Drinking Water Filtration Plants",
      "Overseas Remittance Welfare Fund",
      "Rural Flood & Rain Emergency Response Units",
    ],
    overview: "Extending solidarity to smaller rural tehsils across Jhang, Toba Tek Singh, Faisalabad, and supporting community members working in the Gulf and Europe.",
  },
};
