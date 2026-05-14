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
      title: "Languages & Frameworks",
      skills: [
        { name: "Kotlin", proficiency: 90, years: 4, icon: "kotlin" },
        { name: "Java", proficiency: 80, years: 4, icon: "java" },
        { name: "Kotlin Multiplatform", proficiency: 65, years: 1, icon: "kotlin" },
      ],
    },

    {
      title: "Android Development",
      skills: [
        { name: "Android SDK", proficiency: 90, years: 4, icon: "android" },
        { name: "Jetpack Compose", proficiency: 90, years: 3, icon: "material" },
        { name: "Android Jetpack Libraries", proficiency: 85, years: 4, icon: "android" },
        { name: "Material Design", proficiency: 75, years: 4, icon: "material" },
        { name: "Navigation Component", proficiency: 75, years: 4, icon: "android" },
        { name: "ViewModel", proficiency: 85, years: 4, icon: "android" },
        { name: "LiveData", proficiency: 80, years: 4, icon: "android" },
        { name: "Room", proficiency: 80, years: 4, icon: "android" },
        { name: "DataStore", proficiency: 75, years: 3, icon: "android" },
        { name: "SharedPreferences", proficiency: 80, years: 4, icon: "android" },
        { name: "Lottie", proficiency: 70, years: 3, icon: "android" },
        { name: "Glide", proficiency: 75, years: 3, icon: "android" },
        { name: "Firebase", proficiency: 75, years: 3, icon: "firebase" },
        { name: "Sentry", proficiency: 70, years: 2, icon: "sentry" },
      ],
    },

    {
      title: "Architecture & Patterns",
      skills: [
        { name: "Clean Architecture", proficiency: 85, years: 4, icon: "architecture" },
        { name: "MVVM", proficiency: 85, years: 4, icon: "architecture" },
        { name: "MVI", proficiency: 80, years: 3, icon: "architecture" },
        { name: "MVP", proficiency: 75, years: 3, icon: "architecture" },
        { name: "MVC", proficiency: 70, years: 3, icon: "architecture" },
        { name: "OOP", proficiency: 85, years: 4, icon: "java" },
        { name: "Design Patterns", proficiency: 80, years: 4, icon: "architecture" },
        { name: "Hilt", proficiency: 80, years: 3, icon: "android" },
        { name: "Koin", proficiency: 75, years: 3, icon: "kotlin" },
      ],
    },

    {
      title: "Networking & APIs",
      skills: [
        { name: "Retrofit", proficiency: 80, years: 4, icon: "api" },
        { name: "OkHttp", proficiency: 80, years: 4, icon: "api" },
        { name: "REST APIs", proficiency: 80, years: 4, icon: "api" },
        { name: "GraphQL", proficiency: 65, years: 2, icon: "api" },
        { name: "GSON", proficiency: 85, years: 4, icon: "json-schema" },
        { name: "JSON", proficiency: 85, years: 4, icon: "json-schema" },
      ],
    },

    {
      title: "Asynchronous Programming",
      skills: [
        { name: "Kotlin Coroutines", proficiency: 85, years: 4, icon: "kotlin" },
        { name: "Flow", proficiency: 80, years: 4, icon: "async" },
        { name: "RxJava", proficiency: 60, years: 2, icon: "java" },
        { name: "Multithreading", proficiency: 70, years: 3, icon: "async" },
      ],
    },

    {
      title: "Testing",
      skills: [
        { name: "Unit Testing", proficiency: 75, years: 2, icon: "testing" },
        { name: "JUnit", proficiency: 70, years: 2, icon: "testing" },
        { name: "TDD mindset", proficiency: 70, years: 2, icon: "testing" },
        { name: "Mockito", proficiency: 65, years: 1.5, icon: "testing" },
        { name: "MockK", proficiency: 65, years: 1.5, icon: "testing" },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Gradle", proficiency: 80, years: 4, icon: "gradle" },
        { name: "Git", proficiency: 85, years: 3, icon: "git" },
        { name: "Git Flow", proficiency: 75, years: 2, icon: "git" },
        { name: "Android Studio", proficiency: 85, years: 3, icon: "android" },
        { name: "Agile", proficiency: 75, years: 2, icon: "soft-skill" },
        { name: "Scrum", proficiency: 75, years: 2, icon: "soft-skill" },
        { name: "Linux", proficiency: 65, years: 2, icon: "linux" },
        { name: "Figma", proficiency: 55, years: 1, icon: "figma" },
      ],
    },

    {
      title: "Soft Skills",
      skills: [
        { name: "Analytical Thinking", proficiency: 80, years: 3, icon: "soft-skill" },
        { name: "Problem Solving", proficiency: 85, years: 3, icon: "soft-skill" },
        { name: "Teamwork", proficiency: 80, years: 3, icon: "soft-skill" },
        { name: "Communication", proficiency: 75, years: 3, icon: "soft-skill" },
      ],
    },
  ],
};
