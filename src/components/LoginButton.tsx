'use client'

import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface LoginButtonProps {
	children?: React.ReactNode
	className?: string
	onClick: () => void
}

const LoginButton: FC<LoginButtonProps> = ({ children, className, onClick }) => {
	return (
		<button className={twMerge('flex gap-2 rounded-full border p-4 m-5', className)} onClick={onClick}>
			{children}
		</button>
	)
}

export default LoginButton
