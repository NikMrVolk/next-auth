import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { cn } from '@/lib/utils'

const Dashboard: NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (!session || !session?.user) {
        redirect('/account')
    }

    return <div className={cn('text-center')}>{session?.user?.name}</div>
}

export default Dashboard
