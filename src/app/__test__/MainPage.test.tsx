import { render, screen } from '@testing-library/react'

import MainPage from '@/app/page'

describe('Main page', () => {
    it('Should find title on start page', () => {
        // ARRANGE
        render(<MainPage />)

        // ACT
        const data = screen.getByText('Main page')

        // ASSERT
        expect(data).toBeInTheDocument()
    })
})
