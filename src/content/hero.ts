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
    title: "Android Software Engineer | Kotlin & Jetpack Compose",
    description: "Android Software Engineer with 4+ years of experience building and modernizing production applications across fintech and consumer products. I specialize in Kotlin, Jetpack Compose, and modular architecture to deliver reliable, maintainable applications, modernize legacy codebases, and enable faster, safer releases.",
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
