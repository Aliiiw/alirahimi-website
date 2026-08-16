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
            description: "Cross-border e-commerce Android app for customers abroad to purchase and deliver everyday essentials to their families. Owned delivery from initial architecture to Google Play launch within four months, covering product discovery, cart, checkout, payments, logging, crash monitoring, and post-launch support.",
            technologies: ["Kotlin", "Jetpack Compose", "KMP", "Clean Architecture", "MVVM/MVI"]
        },
        {
            title: "Gandom Financial Android Ecosystem",
            description: "Modernized four production Android applications for brokerage, investment, and financial-content platforms serving about 5 million users and handling 4-6 million daily financial transactions, API requests, and market-data operations.",
            technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Coroutines", "Flow"]
        },
        {
            title: "Investment Fund Analytics App",
            description: "Production-grade investment-fund analytics application independently designed and delivered within four months, with 20+ feature areas, advanced market search, filtering, Room-backed local data, Paging 3, and Retrofit integration.",
            technologies: ["Kotlin", "Room", "Paging 3", "Retrofit", "MVVM"]
        },
        {
            title: "Financial Charting & Market Treemap",
            description: "Interactive financial visualization system with six chart types and a configurable market treemap for fund, index, and instrument comparison workflows inside production fintech products.",
            technologies: ["Kotlin", "MPAndroidChart", "AnyChart", "Market Data"]
        },
        {
            title: "TrueLearn Android Product Delivery",
            description: "Multiple EdTech Android product flows delivered from project setup and technical design through feature implementation, including REST API integration, authentication, local data handling, navigation, localization, responsive UI, and shared engineering standards.",
            technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "Retrofit"]
        },
        {
            title: "Tagfaa Enterprise Customer Service Platform",
            description: "Native Android and iOS enterprise customer-service platform for a logistics client with 300,000+ customers. Delivered secure account management, shipment tracking, paginated service history, search and filtering, status timelines, notifications, and multimedia playback.",
            technologies: ["Kotlin", "Swift", "Retrofit", "Paging 3", "Firebase"]
        },
        {
            title: "uMind AI Mental Health Platform",
            description: "AI-assisted mental-health platform providing personalized mood and habit support to about 500 users. Built Flutter tracking flows, integrated a trained conversational model, and contributed Django REST APIs, authentication, database models, business logic, and admin functionality.",
            technologies: ["Flutter", "Django REST", "PostgreSQL", "MongoDB"]
        }
    ]
};
