import { ButtonVariant, ButtonSize } from "@/components/micro";

export interface CtaButton {
    text: string;
    link: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: string;
}

export interface HeroContent {
    name?: string;
    title?: string;
    description?: string;
    location?: string;
    avatarAlt?: string;
    ctaButtons?: CtaButton[];
}

export const heroContent: HeroContent = {
    name: "Ali Rahimi",
    title: "Android Software Engineer | Kotlin | Jetpack Compose",
    description: "Android Software Engineer with 4+ years of experience building native Android applications for fintech and consumer-facing products, from greenfield development to production performance and reliability. Strong background in Kotlin, Java, Jetpack Compose, Android SDK, modular MVVM/MVI, Clean Architecture, Kotlin Coroutines and Flow, and REST/GraphQL API integration.",
    location: "Based in France • Open to relocation",
    avatarAlt: "Ali Rahimi profile picture",
    ctaButtons: [
        {
            text: "Contact Me",
            link: "#contact",
            variant: "default",
            size: "lg",
            icon: "arrow-right"
        },
        {
            text: "View Projects",
            link: "#projects",
            variant: "outline",
            size: "lg"
        },
        {
            text: "Download CV",
            link: "/AliRahimiCV.pdf",
            variant: "outline",
            size: "lg",
            icon: "download"
        }
    ]
};
