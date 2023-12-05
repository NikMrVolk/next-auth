import React, { FC } from 'react'

interface pageProps {
	children?: React.ReactNode
}

const page: FC<pageProps> = ({ children }) => {
	return <div className="flex justify-center">Start page </div>
}

export default page
