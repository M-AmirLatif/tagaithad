export interface OfficialNotification {
  id: string;
  refNumber: string;
  title: string;
  date: string;
  year: number;
  category: 'Cabinet & Oath' | 'Headquarters' | 'Education & Welfare' | 'Felicitations' | 'Public Circular';
  summary: string;
  signatory: string;
  pdfFileName: string;
  fileSize: string;
  isVerified: boolean;
}

export const officialNotifications: OfficialNotification[] = [
  {
    id: "notif-01",
    refNumber: "TIP/HQ/2026/OATH-01",
    title: "Solemn Oath & Assumption of Office – Central President Chaudhry Muhammad Sadiq (Advisor)",
    date: "06 September 2026",
    year: 2026,
    category: "Cabinet & Oath",
    summary: "Formal gazette recording the induction of Central President Chaudhry Muhammad Sadiq, ratifying the mandate of Unity, Love, and Service across Shorkot, Islamabad, Karachi, and provincial chapters.",
    signatory: "Central Shura Council & Presidium",
    pdfFileName: "TIP-Gazette-2026-Oath-Central-President.pdf",
    fileSize: "184 KB",
    isVerified: true,
  },
  {
    id: "notif-02",
    refNumber: "TIP/HQ/2026/CAB-02",
    title: "Notification of Appointed Central & Union Cabinet Office-Bearers",
    date: "14 September 2026",
    year: 2026,
    category: "Cabinet & Oath",
    summary: "Affirming that organizational positions are held without personal interest or rivalry, dedicating all cabinet portfolios to communal harmony, legal integrity, and grassroot service.",
    signatory: "Office of the Central President",
    pdfFileName: "TIP-Cabinet-Portfolios-Notification-2026.pdf",
    fileSize: "210 KB",
    isVerified: true,
  },
  {
    id: "notif-03",
    refNumber: "TIP/SEC/2026/HQ-03",
    title: "Establishment of Central Administrative Headquarters – Patan Road, Shorkot City",
    date: "06 October 2026",
    year: 2026,
    category: "Headquarters",
    summary: "Designation of official headquarters Near Rescue Office, Patan Road, Shorkot City (Postal Code 35050) as the primary hub for administrative affairs and public petitions.",
    signatory: "Central General Secretary",
    pdfFileName: "TIP-HQ-Establishment-Order-Patan-Road.pdf",
    fileSize: "145 KB",
    isVerified: true,
  },
  {
    id: "notif-04",
    refNumber: "TIP/EDU/2026/SCH-04",
    title: "Chartering of Central Education Secretary Portfolio & Deserving Student Stipend Scheme",
    date: "18 October 2026",
    year: 2026,
    category: "Education & Welfare",
    summary: "Executive order establishing the specialized education wing to administer student scholarship stipends ranging from PKR 6,000 to PKR 12,000 for deserving students.",
    signatory: "Central Executive Presidium",
    pdfFileName: "TIP-Education-Secretary-Charter-2026.pdf",
    fileSize: "195 KB",
    isVerified: true,
  },
  {
    id: "notif-05",
    refNumber: "TIP/HON/2026/FEL-05",
    title: "Felicitations on Academic Appointment – Central VP Ch. Faisal Moon Sarohi (Air University Islamabad)",
    date: "28 October 2026",
    year: 2026,
    category: "Felicitations",
    summary: "Official resolution congratulating Central Vice President Chaudhry Faisal Moon Sarohi upon appointment as QEC Officer at Air University Islamabad, Bahu Campus, Shorkot Cantt.",
    signatory: "Office of the Central President & Cabinet",
    pdfFileName: "TIP-Felicitation-Ch-Faisal-Moon-Sarohi.pdf",
    fileSize: "160 KB",
    isVerified: true,
  },
  {
    id: "notif-06",
    refNumber: "TIP/WLF/2026/MED-06",
    title: "Executive Approval for Collaborative Free Medical Camp with Alkhidmat Foundation & WHO",
    date: "15 February 2026",
    year: 2026,
    category: "Education & Welfare",
    summary: "Authorizing the field deployment of medical diagnostic teams and complimentary pharmaceuticals at Kaki Nau Dom under the leadership of President Chaudhry Asif Mahmood.",
    signatory: "Welfare & Finance Secretariat",
    pdfFileName: "TIP-Executive-Order-Free-Medical-Camp-2026.pdf",
    fileSize: "172 KB",
    isVerified: true,
  },
  {
    id: "notif-07",
    refNumber: "TIP/PUB/2026/RAM-07",
    title: "Publication of Ramadan 1447 / 2026 Sehri & Iftar Timetable and Welfare Drive",
    date: "01 March 2026",
    year: 2026,
    category: "Public Circular",
    summary: "Release of authentic Ramadan schedule for Tehsil Shorkot along with mobilization directives for Ramadan food ration distribution to needy families.",
    signatory: "Public Relations & Welfare Directorate",
    pdfFileName: "TIP-Ramadan-1447-Calendar-Circular.pdf",
    fileSize: "288 KB",
    isVerified: true,
  },
];
