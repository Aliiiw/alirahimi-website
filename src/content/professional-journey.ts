export interface ProfessionalMilestone {
    id: string;
    date: string;
    role: string;
    company: string;
    description: string;
    achievement: string;
}

export const professionalMilestones: ProfessionalMilestone[] = [
  {
    id: "1",
    date: "Apr 2026 – Present",
    role: "Senior Android Software Engineer",
    company: "Hamsaia",
    description:
      "Independently built Hamsaia's Android application from scratch and launched it on Google Play within the first four months, creating a cross-border commerce experience for customers abroad.",
    achievement:
      "Defined a modular Kotlin Multiplatform codebase with Kotlin, Jetpack Compose, Clean Architecture, and MVVM/MVI; delivered 10+ production screens and improved build performance by about 10%.",
  },
  {
    id: "2",
    date: "Sep 2023 – Dec 2025",
    role: "Android Software Engineer",
    company: "Gandom Company",
    description:
      "Developed and modernized four production Android applications for a high-volume brokerage ecosystem serving about 5 million users and handling 4-6 million daily financial transactions, API requests, and market-data operations.",
    achievement:
      "Migrated legacy Java/XML and MVP codebases to Kotlin, Jetpack Compose, MVVM/MVI, Clean Architecture, Retrofit, Coroutines, and Flow, reaching about 2x faster performance, 40% fewer crashes, and 20% smaller app size.",
  },
  {
    id: "3",
    date: "Mar 2023 – Aug 2023",
    role: "Android Developer Intern (Full-time)",
    company: "TrueLearn",
    description:
      "Designed and built an end-to-end e-commerce Android application with Jetpack Compose, including product discovery, categories, shopping cart, checkout, address, authentication, profile, theming, RTL, and localization flows.",
    achievement:
      "Integrated 15 REST endpoints with Retrofit and OkHttp, structured repository-based MVVM with Hilt, Coroutines, StateFlow, Compose Navigation, Room, and encrypted DataStore session storage.",
  },
  {
    id: "4",
    date: "Sep 2022 – Mar 2023",
    role: "Android & iOS Developer",
    company: "Tagfaa",
    description:
      "Designed and developed a private Android and iOS enterprise application for a customer-service portal supporting a customer base of 300,000+ users.",
    achievement:
      "Delivered secure account management, real-time shipment tracking, push notifications, multimedia playback, WebView flows, SVG rendering, and consistent Android/iOS functionality.",
  },
  {
    id: "5",
    date: "Mar 2022 – Sep 2022",
    role: "Software Engineer Intern",
    company: "uMind",
    description:
      "Contributed full-time to an AI-assisted mental-health platform serving about 500 users, developing mood- and habit-tracking workflows in Flutter.",
    achievement:
      "Integrated mobile workflows with a trained conversational model, then transitioned to backend engineering with Django REST Framework, PostgreSQL, MongoDB, authentication, and admin workflows.",
  },
  {
    id: "6",
    date: "Sep 2021 – Sep 2025",
    role: "Teaching Assistant & Android Workshop Instructor",
    company: "Shiraz University",
    description:
      "Served as Teaching Assistant and Head Teaching Assistant across Android Programming, Software Design, HCI, OOP, and foundational programming courses, mentoring 100+ students through labs and project reviews.",
    achievement:
      "Led TA teams, coordinated assignments and exams, and delivered two Android and Kotlin workshops, including a 12-hour workshop for about 70 participants.",
  },
  {
    id: "7",
    date: "Nov 2020 – Jan 2025",
    role: "B.S. Computer Science & Engineering",
    company: "Shiraz University",
    description:
      "Completed a Bachelor of Science in Computer Science and Engineering at Shiraz University.",
    achievement:
      "Built a strong foundation across programming, software design, computer architecture, systems, and applied mobile development.",
  }
];
