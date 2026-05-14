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
    title: "Senior Android Engineer",
    description: "Android engineer with 4+ years of experience building secure, scalable, and user-friendly mobile applications. I specialize in Kotlin, Jetpack Compose, modern Android architecture, and performance-focused app delivery, with growing depth in Kotlin Multiplatform, backend collaboration, and end-to-end product thinking.",
    location: "France • Open to relocate • Remote worldwide",
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
