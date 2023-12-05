import NavBar from '@/components/NavBar'
import React, { FC } from 'react'

interface pageProps {
	children?: React.ReactNode
}

const Page: FC<pageProps> = ({ children }) => {
	return <div className="flex justify-center">Account page</div>
}

export default Page
