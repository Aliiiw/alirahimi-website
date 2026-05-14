import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';

describe('ProjectCard', () => {
  const defaultProps = {
    title: 'Jahat',
    description: 'Seller-side insurance platform...',
    technologies: [],
  };

  it('renders with correct content', () => {
    render(<ProjectCard {...defaultProps} />);
    
    expect(screen.getByText('Jahat')).toBeInTheDocument();
    expect(screen.getByText('Seller-side insurance platform...')).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    const { container } = render(
      <ProjectCard {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild as HTMLElement;
    
    expect(card).toHaveClass('custom-class');
  });

  it('maintains semantic HTML structure', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const title = screen.getByRole('heading', { name: 'Jahat' });
    expect(title).toBeInTheDocument();
    
    const description = screen.getByText('Seller-side insurance platform...');
    expect(description.tagName).toBe('P');
  });

  describe('Technology Badges', () => {
    const propsWithTechnologies = {
      ...defaultProps,
      technologies: ['Kotlin', 'Jetpack Compose', 'Modular Architecture'],
    };

    it('renders technology badges when technologies are provided', () => {
      render(<ProjectCard {...propsWithTechnologies} />);
      
      expect(screen.getByText('Kotlin')).toBeInTheDocument();
      expect(screen.getByText('Jetpack Compose')).toBeInTheDocument();
      expect(screen.getByText('Modular Architecture')).toBeInTheDocument();
    });

    it('renders correct number of badges', () => {
      render(<ProjectCard {...propsWithTechnologies} />);
      
      const badges = screen.getAllByTestId('tech-badge');
      expect(badges).toHaveLength(3);
      
      expect(badges[0]).toHaveTextContent('Kotlin');
      expect(badges[1]).toHaveTextContent('Jetpack Compose');
      expect(badges[2]).toHaveTextContent('Modular Architecture');
    });

    it('does not render badges container when no technologies provided', () => {
      const { container } = render(<ProjectCard {...defaultProps} />);
      const badgesContainer = container.querySelector('[data-testid="badges-container"]');
      
      expect(badgesContainer).not.toBeInTheDocument();
    });

    it('does not render badges container when technologies array is empty', () => {
      const { container } = render(<ProjectCard {...defaultProps} technologies={[]} />);
      const badgesContainer = container.querySelector('[data-testid="badges-container"]');
      
      expect(badgesContainer).not.toBeInTheDocument();
    });

    it('renders badges container when technologies are provided', () => {
      const { container } = render(<ProjectCard {...propsWithTechnologies} />);
      const badgesContainer = container.querySelector('[data-testid="badges-container"]');
      
      expect(badgesContainer).toBeInTheDocument();
    });
  });
}); 
