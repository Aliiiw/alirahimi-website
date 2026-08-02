export interface TechnicalSkill {
    name: string;
    proficiency: number;
    years?: number;
    icon?: string;
}

export interface SkillCategory {
    title: string;
    skills?: TechnicalSkill[];
    others?: Array<{ name: string; icon: string }>;
}

export interface TechnicalExpertiseContent {
    categories: SkillCategory[];
}

export const technicalExpertiseContent: TechnicalExpertiseContent = {
  categories: [
    {
      title: "Languages & Cross-Platform",
      skills: [
        { name: "Kotlin", proficiency: 90, years: 4, icon: "kotlin" },
        { name: "Java", proficiency: 80, years: 4, icon: "java" },
        { name: "Kotlin Multiplatform (KMP)", proficiency: 65, years: 1, icon: "kotlin" },
      ],
    },

    {
      title: "Android & UI",
      skills: [
        { name: "Android SDK", proficiency: 90, years: 4, icon: "android" },
        { name: "Jetpack Compose", proficiency: 90, years: 3, icon: "material" },
        { name: "XML Views", proficiency: 85, years: 4, icon: "android" },
        { name: "Android Jetpack", proficiency: 85, years: 4, icon: "android" },
        { name: "Lifecycle", proficiency: 85, years: 4, icon: "android" },
        { name: "ViewModel", proficiency: 85, years: 4, icon: "android" },
        { name: "LiveData", proficiency: 80, years: 4, icon: "android" },
        { name: "SavedStateHandle", proficiency: 75, years: 3, icon: "android" },
        { name: "ViewBinding/DataBinding", proficiency: 85, years: 4, icon: "android" },
        { name: "Navigation Compose", proficiency: 80, years: 3, icon: "android" },
        { name: "Material 3", proficiency: 80, years: 3, icon: "material" },
        { name: "WorkManager", proficiency: 70, years: 2, icon: "android" },
        { name: "Foreground Services", proficiency: 70, years: 2, icon: "android" },
        { name: "BroadcastReceiver", proficiency: 70, years: 3, icon: "android" },
        { name: "Adaptive UI", proficiency: 75, years: 3, icon: "material" },
        { name: "Accessibility", proficiency: 70, years: 2, icon: "soft-skill" },
      ],
    },

    {
      title: "Architecture",
      skills: [
        { name: "MVVM", proficiency: 85, years: 4, icon: "architecture" },
        { name: "MVI", proficiency: 80, years: 3, icon: "architecture" },
        { name: "MVP", proficiency: 75, years: 3, icon: "architecture" },
        { name: "Clean Architecture", proficiency: 85, years: 4, icon: "architecture" },
        { name: "Modularization", proficiency: 80, years: 3, icon: "architecture" },
        { name: "Multi-module Architecture", proficiency: 75, years: 2, icon: "architecture" },
        { name: "Dependency Injection", proficiency: 80, years: 3, icon: "architecture" },
        { name: "Hilt", proficiency: 80, years: 3, icon: "android" },
        { name: "Koin", proficiency: 75, years: 3, icon: "kotlin" },
      ],
    },

    {
      title: "Concurrency, Networking & Data",
      skills: [
        { name: "Kotlin Coroutines", proficiency: 85, years: 4, icon: "kotlin" },
        { name: "Flow", proficiency: 80, years: 4, icon: "async" },
        { name: "RxJava", proficiency: 60, years: 2, icon: "java" },
        { name: "Retrofit", proficiency: 80, years: 4, icon: "api" },
        { name: "OkHttp", proficiency: 80, years: 4, icon: "api" },
        { name: "Ktor", proficiency: 65, years: 1, icon: "kotlin" },
        { name: "REST APIs", proficiency: 80, years: 4, icon: "api" },
        { name: "GraphQL", proficiency: 65, years: 2, icon: "api" },
        { name: "WebSockets", proficiency: 60, years: 1.5, icon: "api" },
        { name: "Server-Sent Events (SSE)", proficiency: 60, years: 1, icon: "api" },
        { name: "Room", proficiency: 80, years: 4, icon: "android" },
        { name: "DataStore", proficiency: 75, years: 3, icon: "android" },
        { name: "Kotlinx Serialization", proficiency: 70, years: 2, icon: "json-schema" },
        { name: "Moshi", proficiency: 65, years: 2, icon: "json-schema" },
        { name: "Gson", proficiency: 85, years: 4, icon: "json-schema" },
        { name: "Offline-first Architecture", proficiency: 75, years: 3, icon: "architecture" },
      ],
    },

    {
      title: "Testing",
      skills: [
        { name: "Unit Testing", proficiency: 75, years: 2, icon: "testing" },
        { name: "Integration Testing", proficiency: 70, years: 2, icon: "testing" },
        { name: "UI Testing", proficiency: 70, years: 2, icon: "testing" },
        { name: "JUnit", proficiency: 70, years: 2, icon: "testing" },
        { name: "MockK", proficiency: 65, years: 1.5, icon: "testing" },
        { name: "Mockito", proficiency: 65, years: 1.5, icon: "testing" },
        { name: "Espresso", proficiency: 65, years: 1.5, icon: "testing" },
        { name: "Compose UI Testing", proficiency: 70, years: 2, icon: "testing" },
        { name: "TDD", proficiency: 70, years: 2, icon: "testing" },
        { name: "Test Coverage", proficiency: 70, years: 2, icon: "testing" },
      ],
    },

    {
      title: "Build, CI/CD & Release",
      skills: [
        { name: "Gradle Kotlin DSL", proficiency: 80, years: 4, icon: "gradle" },
        { name: "Version Catalogs", proficiency: 75, years: 2, icon: "gradle" },
        { name: "Git", proficiency: 85, years: 3, icon: "git" },
        { name: "GitHub Actions", proficiency: 70, years: 2, icon: "github" },
        { name: "GitLab CI", proficiency: 65, years: 2, icon: "git" },
        { name: "Jenkins", proficiency: 60, years: 1, icon: "soft-skill" },
        { name: "Google Play Console", proficiency: 75, years: 3, icon: "android" },
        { name: "Android App Bundles (AAB)", proficiency: 75, years: 3, icon: "android" },
        { name: "App Signing", proficiency: 70, years: 2, icon: "android" },
        { name: "Build Variants", proficiency: 75, years: 3, icon: "gradle" },
      ],
    },

    {
      title: "Security",
      skills: [
        { name: "Android Keystore", proficiency: 70, years: 2, icon: "android" },
        { name: "EncryptedSharedPreferences", proficiency: 70, years: 2, icon: "android" },
        { name: "Secure Storage", proficiency: 70, years: 2, icon: "android" },
        { name: "SSL Pinning", proficiency: 65, years: 1.5, icon: "api" },
        { name: "OAuth 2.0", proficiency: 65, years: 2, icon: "api" },
        { name: "JWT", proficiency: 70, years: 2, icon: "json-schema" },
        { name: "Biometric Authentication", proficiency: 65, years: 1.5, icon: "android" },
        { name: "ProGuard/R8", proficiency: 75, years: 3, icon: "android" },
      ],
    },

    {
      title: "Performance & Monitoring",
      skills: [
        { name: "Android Profiler", proficiency: 75, years: 3, icon: "android" },
        { name: "Perfetto", proficiency: 65, years: 1, icon: "android" },
        { name: "ANR Investigation", proficiency: 70, years: 2, icon: "android" },
        { name: "Memory Leak Analysis", proficiency: 70, years: 2, icon: "android" },
        { name: "Firebase Crashlytics", proficiency: 75, years: 3, icon: "firebase" },
        { name: "Firebase Analytics", proficiency: 70, years: 2, icon: "firebase" },
        { name: "Sentry", proficiency: 70, years: 2, icon: "sentry" },
      ],
    },
  ],
};
