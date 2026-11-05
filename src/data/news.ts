export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: 'Oath & Governance' | 'Education & Appointments' | 'Community Welfare' | 'Headquarters' | 'Press Coverage';
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string[];
  isVerifiedFact: boolean;
  pressOutlets?: string[];
  tags: string[];
}

export const newsArticles: NewsItem[] = [
  {
    slug: "oath-taking-central-president-chaudhry-muhammad-sadiq",
    title: "Solemn Oath-Taking Ceremony of Central President Chaudhry Muhammad Sadiq (Advisor)",
    date: "06 September 2026",
    category: "Oath & Governance",
    image: "/images/members/ch-muhammad-sadiq-taga.jpg",
    imageAlt: "Central President Chaudhry Muhammad Sadiq Taga taking oath of office",
    excerpt: "In a solemn and dignified ceremony attended by community delegates from Shorkot City, Islamabad, Karachi, and across Pakistan, Chaudhry Muhammad Sadiq formally assumed office under the motto 'Unity, Love and Service'.",
    content: [
      "On Sunday, 06 September 2026, a momentous assembly was convened to swear in Chaudhry Muhammad Sadiq Taga Ittehad (Advisor) as the Central President of Taga Ittehad Pakistan.",
      "The ceremony was graced by prominent elders, professionals, and youth delegates who traveled from Tehsil Shorkot City, Islamabad, Karachi, and neighbouring districts to express solidarity with the newly constituted executive leadership.",
      "A collective prayer was offered for the Central President, entreating the Almighty to grant him steadfastness, wisdom, and divine assistance to serve the community across three foundational pillars: quality education for youth, dignified healthcare for families, and sustainable livelihood and employment opportunities.",
      "In his address, President Chaudhry Muhammad Sadiq reaffirmed that the true spirit of Taga Ittehad Pakistan is grounded upon 'Unity, Love, and Service' (Ittehad, Mohabbat, Khidmat), emphasizing that no officer holds a position for personal privilege, but as a sacred trust on behalf of the weakest among us.",
    ],
    isVerifiedFact: true,
    tags: ["Central Cabinet", "Oath Ceremony", "President", "Unity"],
  },
  {
    slug: "ch-faisal-moon-sarohi-appointed-qec-officer-air-university",
    title: "Central Vice President Ch. Faisal Moon Sarohi Appointed QEC Officer at Air University Islamabad",
    date: "28 October 2026", // Recent
    category: "Education & Appointments",
    image: "/images/members/ch-faisal-moon-sarohi.jpg",
    imageAlt: "Central Vice President Chaudhry Faisal Moon Sarohi seated at his academic and executive desk",
    excerpt: "The entire Taga community warmly congratulates Central Vice President Chaudhry Faisal Moon Sarohi on his prestigious appointment as Quality Enhancement Cell (QEC) Officer at Air University Islamabad, Bahu Campus.",
    content: [
      "Taga Ittehad Pakistan proudly extends heartfelt congratulations to our Central Vice President, Chaudhry Faisal Moon Sarohi (Advocate & Principal), on being entrusted with the pivotal responsibility of Quality Enhancement Cell (QEC) Officer at Air University Islamabad, Bahu Campus, Shorkot Cantt.",
      "This esteemed academic appointment is a resounding milestone and an immense source of pride for the entire Taga community across Pakistan. As an advocate and seasoned college administrator, his commitment to higher educational quality and institutional excellence has continually illuminated paths for our youth.",
      "The leadership expressed unwavering confidence that his expertise will elevate academic benchmarks, inspire rising generations toward scholarship and public service, and further solidify Taga Ittehad Pakistan's educational initiatives.",
    ],
    isVerifiedFact: true,
    tags: ["Air University", "Vice President", "Education", "Pride of Community"],
  },
  {
    slug: "oath-taking-central-union-cabinet-office-bearers",
    title: "Central & Union Cabinet Sworn In: 'Our Goal Is Not Positions, But Unity and Brotherhood'",
    date: "14 September 2026", // Recent
    category: "Oath & Governance",
    image: "/images/members/member-hall-gathering-tbc.jpg",
    imageAlt: "Newly elected office-bearers of Central and Union Cabinets participating in oath ceremony",
    excerpt: "In an inspiring joint assembly, newly appointed Central and Union Cabinet members took their oaths with a shared pledge: we do not compete with anyone, but bring the entire community together through mutual love and consensus.",
    content: [
      "Following the elevation of the central presidency, a comprehensive oath-taking ceremony was conducted for the newly appointed central secretariat and union cabinet office-bearers across Shorkot City, Union Chak Awwal, Union South, and regional wings.",
      "The central leadership delivered an unequivocal guiding charter: 'Our purpose is neither titles nor worldly standing. We do not seek to compete with anyone, nor do we intend to prove anyone wrong. Our sole mandate is to bring the entire community together upon one unified platform rooted in love, mutual respect, and consultative consensus.'",
      "Speakers highlighted that every member of the cabinet serves completely free of personal interest. The driving motive is pure humanitarian service, moral elevation, and the restoration of genuine brotherhood across every household.",
    ],
    isVerifiedFact: true,
    tags: ["Cabinet", "Sincerity", "Brotherhood", "Consensus"],
  },
  {
    slug: "central-office-address-established-patan-road-shorkot",
    title: "Official Central Office Announced: Near Rescue Office, Patan Road, Shorkot City",
    date: "06 October 2026",
    category: "Headquarters",
    image: "/images/office/vice-president-office.jpg",
    imageAlt: "Interior view of administrative consultation room at central headquarters",
    excerpt: "Taga Ittehad Pakistan formally establishes its central administrative headquarters on Patan Road, Shorkot City, creating an accessible central hub for community facilitation and public grievances.",
    content: [
      "The Central Executive Council of Taga Ittehad Pakistan is pleased to announce the permanent physical address of the organization's Central Headquarters: Near Rescue Office, Patan Road, Shorkot City, District Jhang, Punjab – 35050.",
      "The premises will house the central secretariat, the student scholarship verification cell, public grievance counseling, and the coordination desk for medical relief initiatives.",
      "All community members, local well-wishers, and partner humanitarian bodies are welcomed to visit between 9:00 AM and 5:00 PM on weekdays.",
    ],
    isVerifiedFact: true,
    tags: ["Headquarters", "Central Office", "Shorkot City", "Facilitation"],
  },
  {
    slug: "announcement-central-education-secretary-portfolio",
    title: "Strategic Resolution: Establishment of Central Education Secretary Portfolio",
    date: "18 October 2026",
    category: "Education & Appointments",
    image: "/images/gallery/educational-scholarships-announcement.jpg",
    imageAlt: "Scholarship announcement banner highlighting educational support initiatives",
    excerpt: "The Shura council has approved the formal establishment of the Central Education Secretary portfolio to oversee university stipends, vocational grants, and digital skill training.",
    content: [
      "Recognizing that educational deprivation is the foremost barrier preventing rural families from achieving socioeconomic stability, the central cabinet convened on 18 October 2026 to charter the dedicated Office of the Central Education Secretary.",
      "The portfolio will spearhead the Tehreek Ittehad Educational Scholarship Scheme, distributing stipends between PKR 6,000 and PKR 12,000 per term to deserving students across high schools and degree colleges.",
      "The formal appointment of the individual entrusted with this noble responsibility will be ratified and announced following the forthcoming consultative review.",
    ],
    isVerifiedFact: true,
    tags: ["Education Secretary", "Scholarships", "Youth", "Notice"],
  },
  {
    slug: "press-coverage-leadership-training-session-dr-najam-sheraz",
    title: "National Press Highlights Leadership Training Workshop Addressed by Dr. Najam Sheraz",
    date: "07 April 2026",
    category: "Press Coverage",
    image: "/images/gallery/press-coverage-training-session.jpg",
    imageAlt: "Newspaper clippings from Daily Ausaf, Daily Dunya, Daily Muashira, and Daily Sarmaya",
    excerpt: "Daily Ausaf, Dunya, Muashira, and Sarmaya extensively reported the reform and intellectual training session of Taga Ittehad leaders, featuring an address on selflessness and civic impact.",
    content: [
      "Major national Urdu newspapers including Daily Ausaf Lahore, Daily Dunya Multan, Daily Muashira Lahore, and Daily Sarmaya published special investigative reports on the leadership training workshop organized by Taga Ittehad Pakistan in Shorkot.",
      "The session was addressed by prominent intellectual speaker Dr. Najam Sheraz, who delivered a comprehensive discourse titled 'Unity, Sincerity, and Selfless Service as the Engine of Societal Renewal'.",
      "Dr. Sheraz urged attendees to recognize that community leadership is an act of spiritual self-refinement rather than political authority. Representatives pledged to expand organizational outreach into disaster mitigation, vocational training, and student mentoring.",
    ],
    isVerifiedFact: true,
    pressOutlets: ["Daily Ausaf Lahore", "Daily Dunya Multan", "Daily Muashira", "Daily Sarmaya"],
    tags: ["Press Coverage", "Dr Najam Sheraz", "Leadership Workshop", "Shorkot"],
  },
  {
    slug: "free-medical-camp-kaki-nau-dom-alkhidmat-who",
    title: "Free Medical Camp Held at Kaki Nau Dom with Alkhidmat Foundation & WHO",
    date: "26 February 2026",
    category: "Community Welfare",
    image: "/images/gallery/free-medical-camp-poster.jpg",
    imageAlt: "Free Medical Camp banner showing doctor examination and medicine distribution",
    excerpt: "Over 600 rural residents received free consultations, diagnostic screenings, and essential prescription medications during a multi-specialty medical camp in Kaki Nau Dom.",
    content: [
      "In a triumphant collaborative effort, Taga Ittehad Pakistan partnered with Alkhidmat Foundation and the World Health Organization (WHO) to host a full-day Free Medical Camp at Kaki Nau Dom, Tehsil Shorkot.",
      "Spearheaded by regional president Chaudhry Asif Mahmood, the medical camp provided complimentary physician consultations, sugar and blood pressure screenings, maternal health advice, and completely free essential medicines to over 600 deserving patients.",
      "Local elders expressed profound gratitude to the volunteer medical staff and organizers, urging the foundation to establish permanent quarterly clinics in underserved union councils.",
    ],
    isVerifiedFact: true,
    tags: ["Free Medical Camp", "Healthcare", "Alkhidmat Foundation", "WHO"],
  },
];
