import { render, screen } from "@testing-library/react";
import { ContactSection } from "../ContactSection";
import { contactContent } from "@/content";

jest.mock("@/components/micro");

jest.mock("framer-motion", () => ({
  motion: {
    section: ({ children, variants, initial, whileInView, viewport, ...props }: any) => 
      <section {...props}>{children}</section>,
    div: ({ children, variants, animate, initial, transition, ...props }: any) => 
      <div {...props}>{children}</div>,
  },
}));

const defaultProps = {
  status: "Open to Android opportunities",
  location: "France (CET/CEST)",
  email: "aliirahimioriginal@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/alii-rahimi/",
  githubUrl: "https://github.com/Aliiiw",
  responseTime: "Usually within 24 hours",
  availabilityType: "Full-time Android roles, remote or relocation",
  sectionTitle: "Let's Work Together",
  sectionSubtitle: "Available for mobile engineering teams building reliable Android products",
  contactInfoTitle: "Contact Information",
};

describe("ContactSection", () => {
  it("renders contact section with correct content", () => {
    render(<ContactSection {...defaultProps} />);
    
    expect(screen.getByRole("region", { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
    expect(screen.getByText("Available for mobile engineering teams building reliable Android products")).toBeInTheDocument();
  });

  it("displays all contact information correctly", () => {
    render(<ContactSection {...defaultProps} />);
    
    expect(screen.getByText(defaultProps.email)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.linkedinUrl)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.githubUrl)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.location)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.responseTime)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.availabilityType)).toBeInTheDocument();
  });

  it("shows availability status badge", () => {
    render(<ContactSection {...defaultProps} />);
    
    const availabilityBadge = screen.getByTestId("availability-badge");
    expect(availabilityBadge).toBeInTheDocument();
    expect(availabilityBadge).toHaveTextContent(defaultProps.status);
  });

  it("renders social media links with correct attributes", () => {
    render(<ContactSection {...defaultProps} />);
    
    const emailLink = screen.getByText(defaultProps.email).closest("a");
    const linkedinLink = screen.getByText(defaultProps.linkedinUrl).closest("a");
    const githubLink = screen.getByText(defaultProps.githubUrl).closest("a");
    
    expect(emailLink).toHaveAttribute("href", `mailto:${defaultProps.email}`);

    expect(linkedinLink).toHaveAttribute("href", defaultProps.linkedinUrl);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
    
    expect(githubLink).toHaveAttribute("href", defaultProps.githubUrl);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render the inactive contact form", () => {
    render(<ContactSection {...defaultProps} />);

    expect(screen.queryByTestId("contact-form")).not.toBeInTheDocument();
    expect(screen.queryByText("Send Message")).not.toBeInTheDocument();
  });

  it("uses custom section titles when provided", () => {
    const customProps = {
      ...defaultProps,
      sectionTitle: "Custom Contact Title",
      sectionSubtitle: "Custom subtitle",
      contactInfoTitle: "Custom Info Title",
    };
    
    render(<ContactSection {...customProps} />);
    
    expect(screen.getByText("Custom Contact Title")).toBeInTheDocument();
    expect(screen.getByText("Custom subtitle")).toBeInTheDocument();
    expect(screen.getByText("Custom Info Title")).toBeInTheDocument();
  });
}); 
