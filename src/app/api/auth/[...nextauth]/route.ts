import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
    secret: '1c4d226009a3ab1738fa105bed58fba769917310a22d8a25f326c4712381a355',
    providers: [
        GithubProvider({
            clientId: '0401bf9e9f8a5df08900',
            clientSecret: 'badc0d95da1c0cf584fdf5eb6ea70d05c7c0963b',
        }),
    ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
