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
            title: "Jahat",
            description: "Seller-side insurance platform for managing car and life insurance workflows. Built modular policy management, order tracking, personalized plan selection, archiving, charting, and vendor dashboard experiences.",
            technologies: ["Kotlin", "Jetpack Compose", "Modular Architecture"]
        },
        {
            title: "Fundz",
            description: "Market monitoring app for investors to track stock performance, real-time news, market movement alerts, interactive heatmaps, advanced filtering, and multi-chart technical analysis.",
            technologies: ["Kotlin", "XML", "Coroutines", "Flow"]
        },
        {
            title: "Fast Bourse",
            description: "Stock market information and social platform redesigned for better performance, scalability, and user experience. Refactored the app around MVVM and improved data handling to double processing speed.",
            technologies: ["Kotlin", "XML", "MVVM"]
        },
        {
            title: "Agah Educational Platform",
            description: "Video-based stock market learning application. Resolved production issues around caching and downloads, refactored the architecture with MVVM, and improved offline media reliability.",
            technologies: ["Kotlin", "XML", "MVVM", "Caching"]
        },
        {
            title: "CPS",
            description: "Customer service portal delivered for Android and iOS. Built secure account management, real-time service status, shipment and cargo tracking, and centralized access to transactions and service data.",
            technologies: ["Kotlin", "XML", "Swift", "SwiftUI"]
        },
        {
            title: "Digikala Clone",
            description: "Full-featured e-commerce application inspired by Digikala. Implemented shopping flows, scalable architecture, dark and light themes, and bilingual Persian/English support with a modern Compose UI.",
            technologies: ["Kotlin", "Jetpack Compose", "Material Design"]
        },
        {
            title: "Battery Manager",
            description: "Battery monitoring application with device health metrics, usage and power-consumption analysis, intelligent charging notifications, and performance tools for long-term battery efficiency.",
            technologies: ["Kotlin", "XML", "Notifications"]
        }
    ]
};
