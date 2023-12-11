import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import NavBar from '@/components/NavBar'

jest.mock('next-auth/react', () => {
    const originalModule = jest.requireActual('next-auth/react')

    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => ({ data: null, status: 'unauthenticated' })),
    }
})

describe('Account', () => {
    it('Should show "Sign in" when has session', () => {
        // ARRANGE
        render(<NavBar />)

        // ASSERT
        expect(screen.getByText('Sign in')).toBeInTheDocument()
    })
})
