'use client'

import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Page: NextPage = () => {
    const { data: session } = useSession()

    console.log(process.env.TZ)

    return <div>Hello, {session?.user?.name}</div>
}

export default Page
