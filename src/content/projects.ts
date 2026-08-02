export interface Project {
    title: string;
    description: string;
    technologies: string[];
}

export interface ProjectsContent {
    featured: Project[];
}

export const projectsContent: ProjectsContent = {
    featured: [
        {
            title: "Hamsaia Android Commerce App",
            description: "Cross-border commerce Android app built independently from scratch and launched on Google Play within four months. Delivered shopping cart, deeply nested product categories, WebView checkout, payment integration, logging, crash monitoring, and release readiness.",
            technologies: ["Kotlin", "Jetpack Compose", "KMP", "Clean Architecture", "MVVM/MVI"]
        },
        {
            title: "Gandom Brokerage Android Ecosystem",
            description: "Modernized four production Android applications for a brokerage ecosystem serving about 5 million users and 4-6 million daily financial transactions, API requests, and market-data operations. Migrated legacy Java/XML and MVP codebases to modern Android architecture.",
            technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Coroutines", "Flow"]
        },
        {
            title: "Investment Fund Analytics App",
            description: "Production-grade investment-fund analytics app designed and built from scratch, delivering 20+ feature areas within four months with advanced market search, filtering, watchlists, bookmarks, exact-time note reminders, Room caching, and paginated content.",
            technologies: ["Kotlin", "XML/ViewBinding", "Room", "Paging 3", "Retrofit"]
        },
        {
            title: "Financial Charting & Market Treemap",
            description: "Built six interactive financial chart types and a configurable market treemap for fund, index, and instrument comparison workflows, using MPAndroidChart and AnyChart inside production fintech products.",
            technologies: ["Kotlin", "MPAndroidChart", "AnyChart", "Market Data"]
        },
        {
            title: "Jahat",
            description: "Complex insurance-linked investment platform built from scratch with modern Android components. Implemented architecture and financial workflows for seller-side policy management, order tracking, personalized plan selection, archiving, charting, and dashboard experiences.",
            technologies: ["Kotlin", "Jetpack Compose", "Modular MVVM", "Clean Architecture"]
        },
        {
            title: "Legacy Video Streaming Modernization",
            description: "Stabilized a production video-streaming Android application by fixing critical defects that caused downloaded content to be lost and streaming sessions to crash. Redesigned caching and download handling while refactoring legacy modules with modern Android technologies.",
            technologies: ["Kotlin", "XML", "MVVM", "Caching", "Downloads"]
        },
        {
            title: "TrueLearn E-commerce App",
            description: "End-to-end e-commerce Android application with product discovery, category browsing, shopping cart, checkout, address management, authentication, profile, theming, RTL, localization, 15 REST endpoints, Room cart persistence, and encrypted DataStore session storage.",
            technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "DataStore"]
        },
        {
            title: "Tagfaa Customer Service Portal",
            description: "Private Android and iOS enterprise customer-service portal supporting 300,000+ customers. Delivered secure account management, real-time shipment tracking, paginated shipment history, filtering, detailed status timelines, financial visualizations, push notifications, and multimedia flows.",
            technologies: ["Kotlin", "XML/ViewBinding", "Swift", "SwiftUI", "Firebase"]
        },
        {
            title: "uMind AI Mental Health Platform",
            description: "AI-assisted mental-health platform serving about 500 users. Built mood and habit tracking workflows in Flutter, integrated mobile flows with a trained conversational model, and contributed backend APIs, authentication, database models, business logic, and admin workflows.",
            technologies: ["Flutter", "Django REST", "PostgreSQL", "MongoDB"]
        }
    ]
};
