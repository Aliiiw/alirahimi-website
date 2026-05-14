import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Home from '../page'

// Mock the modules using the __mocks__ files
jest.mock('@/lib/blog-data')
jest.mock('@/components/micro')
jest.mock('@/components/sections')

describe('Home Page Contact Section', () => {
  it('renders the contact section', async () => {
    await act(async () => {
      render(await Home())
    })
    
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
  })

  it('does not render inactive contact form elements', async () => {
    await act(async () => {
      render(await Home())
    })
    
    expect(screen.queryByTestId('contact-form')).not.toBeInTheDocument()
    expect(screen.queryByTestId('contact-name-input')).not.toBeInTheDocument()
    expect(screen.queryByTestId('contact-email-input')).not.toBeInTheDocument()
    expect(screen.queryByTestId('contact-message-input')).not.toBeInTheDocument()
    expect(screen.queryByTestId('contact-submit-button')).not.toBeInTheDocument()
  })

  it('renders contact section title and description', async () => {
    await act(async () => {
      render(await Home())
    })
    
    expect(screen.getByTestId('contact-title')).toBeInTheDocument()
    expect(screen.getByTestId('contact-description')).toBeInTheDocument()
  })

  it('renders contact information card', async () => {
    await act(async () => {
      render(await Home())
    })
    
    expect(screen.getByTestId('contact-info-card')).toBeInTheDocument()
    expect(screen.getByTestId('email-contact')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-contact')).toBeInTheDocument()
    expect(screen.getByTestId('github-contact')).toBeInTheDocument()
  })
}) 
