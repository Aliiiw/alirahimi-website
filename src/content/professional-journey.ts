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
    role: "Senior Android Engineer",
    company: "Hamsaia",
    description:
      "Building and scaling the Android application from scratch with Kotlin and Jetpack Compose while establishing a modular MVVM/MVI architecture for long-term growth.",
    achievement:
      "Improved app responsiveness and data flows with Coroutines and Flow; contributed to architecture, code reviews, KMP planning, and release workflows.",
  },
  {
    id: "2",
    date: "Sep 2023 – Dec 2025",
    role: "Android Developer",
    company: "Gandom Company",
    description:
      "Architected and maintained mission-critical fintech Android applications using Kotlin, MVI/MVVM, Clean Architecture, and secure high-performance codebases.",
    achievement:
      "Built reusable Compose components, optimized real-time market data flows, introduced multi-module principles, and strengthened offline-first state handling.",
  },
  {
    id: "3",
    date: "Mar 2023 – Aug 2023",
    role: "Android Developer Intern",
    company: "TrueLearn",
    description:
      "Developed learning-focused Android features using Jetpack Compose and MVVM. Collaborated closely with UX and Product teams to refine user flows and improve maintainability.",
    achievement:
      "Enhanced UI responsiveness and state management while reinforcing clean architecture and test-driven practices.",
  },
  {
    id: "4",
    date: "Sep 2022 – Mar 2023",
    role: "Mobile Application Developer",
    company: "Tagfaa",
    description:
      "Developed Android components for logistics and tracking systems with focus on workflow clarity, reliability, and structured codebase improvements.",
    achievement:
      "Reduced technical debt and improved cross-team delivery consistency; supported iOS parity and product consistency.",
  },
  {
    id: "5",
    date: "Mar 2022 – Sep 2022",
    role: "Software Engineer Intern",
    company: "uMind",
    description:
      "Contributed to AI-powered mental health mobile application, implementing mobile–backend integrations and improving app performance through clean architectural patterns.",
    achievement:
      "Improved data handling and performance while actively participating in agile rituals and technical mentorship sessions.",
  },
  {
    id: "6",
    date: "Nov 2020 – Sep 2025",
    role: "Head Teaching Assistant",
    company: "Shiraz University, CSE & IT",
    description:
      "Led Android Programming and Software Design courses, supervised junior TAs, and mentored 100+ students in professional mobile development practices.",
    achievement:
      "Organized Jetpack Compose and Kotlin workshops and directed sessions on MVVM, MVI, MVP, GoF patterns, Java OOP, C, Verilog, and Linux labs.",
  },
  {
    id: "7",
    date: "Nov 2020 – Jan 2025",
    role: "B.S. Computer Science & Engineering",
    company: "Shiraz University",
    description:
      "Completed a Computer Science and Engineering degree in Shiraz, Iran, with a GPA of 16.27 / 20.",
    achievement:
      "Built a strong foundation across programming, software design, computer architecture, systems, and applied mobile development.",
  }
];
