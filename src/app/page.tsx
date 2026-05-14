import { HeroSection, FeaturedProjects, TechnicalExpertise, ProfessionalJourney, ContactSection, BlogPreviewSection, Footer } from "@/components/sections";
import { ThemeToggle } from '@/components/micro';
import { getPublishedBlogPosts } from '@/lib/blog-data';
import { heroContent, contactContent, professionalMilestones, projectsContent, technicalExpertiseContent, footerContent } from '@/content';

export default async function Home() {
  const posts = await getPublishedBlogPosts();

  return (
    <div className="min-h-screen bg-background text-text">
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      <HeroSection {...heroContent} />

      <ProfessionalJourney milestones={professionalMilestones} />

      <TechnicalExpertise categories={technicalExpertiseContent.categories} />

      <FeaturedProjects projects={projectsContent.featured} />

      <BlogPreviewSection posts={posts} />

      <ContactSection {...contactContent} />

      <Footer content={footerContent} />
    </div>
  );
}
