export interface ProfessionalMilestone {
    id: string;
    date: string;
    role: string;
    company: string;
    description: string;
    highlights?: string[];
    achievement: string;
}

export const professionalMilestones: ProfessionalMilestone[] = [
  {
    id: "1",
    date: "Apr 2026 – Present",
    role: "Android Software Engineer",
    company: "Hamsaia",
    description:
      "Cross-border e-commerce platform helping customers abroad purchase and deliver everyday essentials to their families.",
    highlights: [
      "Owned end-to-end Android delivery from initial architecture and development to a Google Play launch within four months.",
      "Defined the technology stack and built a modular Kotlin Multiplatform codebase with Kotlin, Jetpack Compose, Clean Architecture, and MVVM/MVI.",
      "Strengthened production readiness by refactoring the beta codebase and introducing structured logging and crash monitoring."
    ],
    achievement:
      "Delivered 10+ production screens across product discovery, cart, checkout, and payments; reduced build time by about 10% and observed crash rate by about 5%.",
  },
  {
    id: "2",
    date: "Sep 2023 – Dec 2025",
    role: "Android Software Engineer",
    company: "Gandom Company",
    description:
      "Fintech company operating brokerage, investment, and financial-content platforms serving approximately 5 million users.",
    highlights: [
      "Developed and modernized four production Android applications in a high-volume financial ecosystem handling 4-6 million daily transactions, API requests, and market-data operations.",
      "Modernized two legacy Java/XML applications by migrating MVP and outdated networking implementations to Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Coroutines, and Flow.",
      "Independently designed and delivered an investment-fund analytics application within four months, including 20+ feature areas, six interactive financial chart types, and a configurable market treemap."
    ],
    achievement:
      "Approximately doubled application performance, reduced crashes by 40%, and decreased application size by 20%.",
  },
  {
    id: "3",
    date: "Mar 2023 – Aug 2023",
    role: "Android Engineer",
    company: "TrueLearn",
    description:
      "EdTech company developing digital learning products across professional and technical fields.",
    highlights: [
      "Contributed to the architecture and delivery of multiple Android products, from project setup and technical design through feature implementation.",
      "Applied Kotlin, Jetpack Compose, modular MVVM, Clean Architecture, Coroutines, Flow, Hilt, Room, Retrofit, and OkHttp across maintainable product codebases.",
      "Delivered end-to-end user flows covering REST API integration, authentication, local data handling, navigation, localization, and responsive UI."
    ],
    achievement:
      "Contributed to architecture decisions, code reviews, reusable components, and shared engineering standards.",
  },
  {
    id: "4",
    date: "Sep 2022 – Mar 2023",
    role: "Mobile Software Engineer",
    company: "Tagfaa",
    description:
      "Software development company delivering mobile, web, automation, and integrated solutions for business clients.",
    highlights: [
      "Developed native Android and iOS applications for an enterprise customer-service platform supporting a logistics client with 300,000+ customers.",
      "Delivered secure account management and shipment-tracking workflows, including authentication, session management, paginated service history, search and filtering, status timelines, and financial visualizations.",
      "Built notification and multimedia functionality with Firebase Cloud Messaging, ExoPlayer, AVKit, WebView, SVG rendering, SwiftUI, and async/await."
    ],
    achievement:
      "Delivered consistent Android and iOS functionality using MVVM/Repository architecture, Kotlin, Swift, Retrofit, and Paging 3.",
  },
  {
    id: "5",
    date: "Mar 2022 – Sep 2022",
    role: "Software Engineer Intern",
    company: "uMind",
    description:
      "AI-assisted mental-health platform providing personalized mood and habit support to approximately 500 users.",
    highlights: [
      "Developed mood- and habit-tracking features in Flutter and integrated them with a trained conversational model.",
      "Contributed to the Django REST backend by implementing APIs, authentication, database models, business logic, and administrative functionality."
    ],
    achievement:
      "Worked across mobile, backend, and AI teams using Django, PostgreSQL, and MongoDB.",
  },
  {
    id: "6",
    date: "Sep 2021 – Sep 2025",
    role: "Head Teaching Assistant & Android Workshop Instructor",
    company: "Shiraz University",
    description:
      "Teaching and leadership experience across Android Programming, Software Design, HCI, OOP, and Programming Fundamentals.",
    highlights: [
      "Mentored 100+ students through technical labs, coding sessions, and project reviews while leading teaching-assistant teams.",
      "Coordinated assignments, course projects, and examinations across multiple appointments."
    ],
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
