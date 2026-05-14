export interface BlogPageContent {
    title: string;
    description: string;
    navigation: {
        homeLink: {
            text: string;
            ariaLabel: string;
        };
    };
}

export const blogPageContent: BlogPageContent = {
    title: "Blog",
    description: "Notes on Android engineering, Kotlin, mobile architecture, and reliable product delivery.",
    navigation: {
        homeLink: {
            text: "← Home",
            ariaLabel: "Home"
        }
    }
};
