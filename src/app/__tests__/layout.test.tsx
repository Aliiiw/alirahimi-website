import { render } from '@testing-library/react'
import RootLayout, { metadata } from '../layout'

describe('RootLayout', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation((...args) => {
      if (/Warning: validateDOMNesting/.test(args[0])) {
        return;
      }
      // Fallback for other errors
      console.error(...args);
    });
  });
  
  it('renders children content', () => {
    const { getByText } = render(
      <div>
      {/* Simulate the html/body structure */}
      <div id="__next">
         <RootLayout>
        <div>Test Child</div>
      </RootLayout>
      </div>
      </div>
    )
    expect(getByText('Test Child')).toBeInTheDocument()
  })



  describe('SEO Metadata', () => {
    it('has correct title', () => {
      expect(metadata.title).toBe('Ali Rahimi - Android Software Engineer | Kotlin, Jetpack Compose')
    })

    it('has correct description', () => {
      expect(metadata.description).toBe('Professional portfolio of Ali Rahimi, an Android Software Engineer specializing in Kotlin, Jetpack Compose, Kotlin Multiplatform readiness, Clean Architecture, and high-performance mobile apps.')
    })

    it('has correct keywords', () => {
      expect(metadata.keywords).toBe('Ali Rahimi, Android Software Engineer, Android Developer, Kotlin, Jetpack Compose, Kotlin Multiplatform, Clean Architecture, MVVM, MVI, Mobile Apps, France')
    })

    it('has Open Graph metadata', () => {
      expect(metadata.openGraph).toBeDefined()
      expect(metadata.openGraph?.title).toBe('Ali Rahimi - Android Software Engineer | Kotlin, Jetpack Compose')
      expect(metadata.openGraph?.description).toContain('Android Software Engineer')
      expect(metadata.openGraph?.url).toBe('https://alirahimi.dev')
      expect(metadata.openGraph?.siteName).toBe('Ali Rahimi Portfolio')
    })

    it('has Twitter Card metadata', () => {
      expect(metadata.twitter).toBeDefined()
      expect(metadata.twitter?.title).toBe('Ali Rahimi - Android Software Engineer | Kotlin, Jetpack Compose')
      expect(metadata.twitter?.description).toContain('Android Software Engineer')
    })

    it('has canonical URL configuration', () => {
      expect(metadata.alternates?.canonical).toBe('/')
    })

    it('has robots configuration', () => {
      expect(metadata.robots).toBeDefined()
      if (typeof metadata.robots === 'object' && metadata.robots !== null) {
        expect(metadata.robots.index).toBe(true)
        expect(metadata.robots.follow).toBe(true)
      }
    })
  })
}) 
