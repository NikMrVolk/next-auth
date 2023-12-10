'use client'
import React, { FC } from 'react'

import { Github } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

import LoginButton from './LoginButton'

interface NavBarProps {
    children?: React.ReactNode
}

const NavBar: FC<NavBarProps> = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div className=" flex items-center justify-end gap-10">
                Sign in as {session.user?.email}
                <LoginButton
                    onClick={() =>
                        signOut({
                            callbackUrl: '/account',
                        })
                    }
                >
                    Sign out
                </LoginButton>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-end">
            <LoginButton
                onClick={() =>
                    signIn('github', {
                        callbackUrl: '/account/dashboard',
                    })
                }
            >
                Sign in <Github />
            </LoginButton>
        </div>
    )
}

export default NavBar
