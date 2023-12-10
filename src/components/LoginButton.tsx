'use client'

import React, { FC } from 'react'

import { twMerge } from 'tailwind-merge'

interface LoginButtonProps {
    children?: React.ReactNode
    className?: string
    onClick: () => void
}

const LoginButton: FC<LoginButtonProps> = ({ children, className, onClick }) => (
    <button
        className={twMerge('m-5 flex gap-2 rounded-full border p-4', className)}
        onClick={onClick}
    >
        {children}
    </button>
)

export default LoginButton
