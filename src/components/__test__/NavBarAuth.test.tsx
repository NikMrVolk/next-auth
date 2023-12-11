import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import NavBar from '@/components/NavBar'

jest.mock('next-auth/react', () => {
    const originalModule = jest.requireActual('next-auth/react')
    const mockSession = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: { username: 'NikMrVolk' },
    }
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => ({ data: mockSession, status: 'authenticated' })),
    }
})

describe('Account', () => {
    it('Should show "Sign out" when has session', () => {
        // ARRANGE
        render(<NavBar />)

        // ASSERT
        expect(screen.getByText('Sign out')).toBeInTheDocument()
    })
})
