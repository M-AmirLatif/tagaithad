export interface WelfareProgram {
  id: string;
  slug: string;
  title: string;
  urduTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  imageAlt: string;
  beneficiariesCount: string;
  beneficiariesLabel: string;
  isStatDemo: boolean;
  projects: {
    title: string;
    status: 'Active' | 'Ongoing' | 'Upcoming';
    location: string;
    impact: string;
    isDemo: boolean;
  }[];
  fundingGoalDemo: string;
  raisedDemo: string;
}

export const welfarePrograms: WelfareProgram[] = [
  {
    id: "education",
    slug: "education",
    title: "Education Support & Scholarships",
    urduTitle: "تعلیمی تعاون اور وظائف",
    tagline: "Empowering every child with knowledge, dignity, and a pathway out of poverty.",
    description: "Education is the true foundation of communal dignity. Through the Tehreek Ittehad Educational Scholarship Scheme, we distribute monthly educational stipends (ranging from PKR 6,000 to PKR 12,000) to deserving students in secondary schools, colleges, and technical academies across Tehsil Shorkot and surrounding areas.",
    iconName: "GraduationCap",
    image: "/images/gallery/educational-scholarships-announcement.jpg",
    imageAlt: "Educational Scholarship Scheme official banner offering PKR 6,000 to 12,000 monthly stipends",
    beneficiariesCount: "450+", // Demo placeholder
    beneficiariesLabel: "Students Supported (Demo)",
    isStatDemo: true,
    projects: [
      {
        title: "Tehreek Ittehad Student Stipend Scheme",
        status: "Active",
        location: "Tehsil Shorkot (Jhang)",
        impact: "Disbursing PKR 6,000 - 12,000 per term directly to students to prevent dropout due to fee burdens.",
        isDemo: false,
      },
      {
        title: "Star Science College Academic Mentorship",
        status: "Ongoing",
        location: "Shorkot City",
        impact: "Free career counseling and admission test preparation conducted by Principal Hamad Qayyum Taga.",
        isDemo: true,
      },
      {
        title: "School Uniform & Textbook Distribution Drive", // TODO: confirm
        status: "Ongoing",
        location: "Union Chak 1 & Union Chak 3",
        impact: "Annual distribution of school kits and winter uniforms to rural primary schools.",
        isDemo: true,
      },
    ],
    fundingGoalDemo: "PKR 2,500,000",
    raisedDemo: "PKR 1,650,000",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Free Healthcare & Medical Camps",
    urduTitle: "مفت طبی کیمپ اور ادویات",
    tagline: "Quality diagnosis, consultation, and life-saving medicines accessible to all.",
    description: "In underserved agrarian villages where quality medical facilities are distant or expensive, Taga Ittehad Pakistan organizes high-impact multi-specialty medical camps. In collaboration with renowned humanitarian entities like Alkhidmat Foundation and the World Health Organization (WHO), we provide complete doctor consultations, vital screenings, and free medicines.",
    iconName: "HeartPulse",
    image: "/images/gallery/free-medical-camp-poster.jpg",
    imageAlt: "Official banner for the collaborative Free Medical Camp in Kaki Nau Dom",
    beneficiariesCount: "1,850+", // Demo placeholder
    beneficiariesLabel: "Patients Treated (Demo)",
    isStatDemo: true,
    projects: [
      {
        title: "Kaki Nau Dom Multi-Specialty Medical Camp",
        status: "Active",
        location: "Kaki Nau Dom, Tehsil Shorkot",
        impact: "Collaborative clinic providing free physician checkups, blood sugar checks, and medicine to over 600 villagers.",
        isDemo: false,
      },
      {
        title: "Community First Aid & Diagnostic Center (Planned)", // TODO: confirm
        status: "Upcoming",
        location: "Patan Road, Central Office Shorkot",
        impact: "Permanent daily primary healthcare clinic with dedicated maternal health counselors.",
        isDemo: true,
      },
      {
        title: "Emergency Medical Patient Referral Support",
        status: "Ongoing",
        location: "DHQ Jhang & Allied Hospital Faisalabad",
        impact: "Facilitating tertiary hospital admissions and expensive medicine subsidies for critical patients.",
        isDemo: true,
      },
    ],
    fundingGoalDemo: "PKR 3,000,000",
    raisedDemo: "PKR 2,100,000",
  },
  {
    id: "disaster-relief",
    slug: "disaster-relief",
    title: "Disaster Relief & Emergency Aid",
    urduTitle: "ہنگامی امداد اور بحالی",
    tagline: "Rapid response teams standing shoulder-to-shoulder with affected families in crisis.",
    description: "From seasonal river flooding along the Chenab river basin to severe winter cold waves, our emergency response cell mobilizes volunteer rescue units, food packages, clean drinking water, and dry rations within hours of an emergency.",
    iconName: "ShieldAlert",
    image: "/images/office/vice-president-office.jpg",
    imageAlt: "Emergency volunteer team coordination headquarters",
    beneficiariesCount: "3,200+", // Demo placeholder
    beneficiariesLabel: "Families Assisted in Calamities (Demo)",
    isStatDemo: true,
    projects: [
      {
        title: "Chenab River Basin Flood Relief Operations", // TODO: confirm
        status: "Active",
        location: "Low-lying riverine belts of Shorkot & Jhang",
        impact: "Deployment of rescue boats, life jackets, dry food hampers, and temporary tent settlements.",
        isDemo: true,
      },
      {
        title: "Winter Warmth Blankets Distribution", // TODO: confirm
        status: "Ongoing",
        location: "Rural Union Councils",
        impact: "Supplying thermal quilts, shawls, and emergency heaters to vulnerable elder households.",
        isDemo: true,
      },
    ],
    fundingGoalDemo: "PKR 4,000,000",
    raisedDemo: "PKR 2,800,000",
  },
  {
    id: "social-welfare",
    slug: "social-welfare",
    title: "Social Welfare & Community Solidarity",
    urduTitle: "سماجی بہبود اور اخوت",
    tagline: "Restoring dignity through monthly family sustenance and mutual brotherhood.",
    description: "Upholding our motto of 'Unity, Love, and Service', our social welfare wing operates ongoing support programs including Ramadan dry food packages, clean water projects, marriage assistance for deserving brides, and civil reconciliation counseling.",
    iconName: "Users",
    image: "/images/gallery/ramadan-sehri-iftar-calendar-2026.jpg",
    imageAlt: "Community welfare publication showing Ramadan calendar and outreach program",
    beneficiariesCount: "5,400+", // Demo placeholder
    beneficiariesLabel: "Households Impacted (Demo)",
    isStatDemo: true,
    projects: [
      {
        title: "Ramadan Food Basket & Timetable Distribution",
        status: "Active",
        location: "All Union Councils across Tehsil Shorkot",
        impact: "Providing essential staple supplies (flour, oil, pulses, dates, sugar) to deserving families throughout Ramadan.",
        isDemo: false,
      },
      {
        title: "Dowry & Wedding Facilitation for Needy Families", // TODO: confirm
        status: "Ongoing",
        location: "Shorkot City & Rural Areas",
        impact: "Dignified essential household appliances and support for weddings of impoverished daughters.",
        isDemo: true,
      },
      {
        title: "Clean Water Hand Pumps Installation", // TODO: confirm
        status: "Ongoing",
        location: "Chak 1, Chak 3, and remote hamlets",
        impact: "Access to clean underground drinking water reducing waterborne illness in rural schools.",
        isDemo: true,
      },
    ],
    fundingGoalDemo: "PKR 3,500,000",
    raisedDemo: "PKR 2,900,000",
  },
  {
    id: "employment-skills",
    slug: "employment-skills",
    title: "Employment & Vocational Training",
    urduTitle: "روزگار اور فنی تربیت",
    tagline: "Empowering youth with market skills, apprenticeships, and micro-enterprise loans.",
    description: "Bridging the gap between rural youth and productive livelihood by offering electrical, mechanical, agricultural tech, and digital literacy training. We facilitate trade placements and provide interest-free starter toolkits for certified apprentices.",
    iconName: "Briefcase",
    image: "/images/members/ch-faisal-moon-sarohi.jpg",
    imageAlt: "Institutional skills development and leadership desk",
    beneficiariesCount: "380+", // Demo placeholder
    beneficiariesLabel: "Youth Trained & Placed (Demo)",
    isStatDemo: true,
    projects: [
      {
        title: "Agricultural Mechanization & Pesticide Field Training",
        status: "Active",
        location: "Jhang Agrarian Belt",
        impact: "Conducted under the guidance of field officers like Ch. Jahanzaib Taga to modernize crop yields.",
        isDemo: false,
      },
      {
        title: "Apprentice Toolkits for Mechanics & Electricians", // TODO: confirm
        status: "Ongoing",
        location: "Shorkot Cantt & City Markets",
        impact: "Equipping vocational graduates with professional toolkits to establish independent repair workshops.",
        isDemo: true,
      },
      {
        title: "Digital Literacy & Freelance Workshop for College Youth", // TODO: confirm
        status: "Upcoming",
        location: "Star Science College Campus",
        impact: "Teaching remote computer skills, document management, and online trade to college students.",
        isDemo: true,
      },
    ],
    fundingGoalDemo: "PKR 2,000,000",
    raisedDemo: "PKR 1,150,000",
  },
];
