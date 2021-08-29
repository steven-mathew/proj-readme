import Head from 'next/head'
import Link from 'next/link'

import Page from '../components/Page'
import {CenteredColumn} from '../components/Layouts'

export default function Register() {
    return (
        <div className="flex w-full h-full light space-y-12 md:space-y-16 bg-primary">

            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="w-1/5 h-screen bg-center bg-cover bg-secondary"
            ></div>

            <div className="flex flex-col justify-center pl-24 space-y-8 bg-primary">
                <div className="w-4/5">
                    <p className="mb-1 text-sm text-primary">
                        Sign up
                    </p>
                    <h1 className="mb-4 font-welcome-xl">Share your projects with the world{' '} 🌎</h1>
                    <p className="mb-10 text-sm text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h1 className="mb-8 text-lg space-y-8 font-welcome-lg">Join readme.</h1>
                    <form className="space-y-8">
                        <div>
                            <p className="mb-1 text-sm text-primary">
                                Email
                            </p>
                            <input
                                type="email"
                                className="w-full px-4 py-4 border border-gray-200 rounded border-button text-primary bg-primary focus:border-gray-500 focus:ring-0"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <p className="mb-1 text-sm text-primary">
                                Username
                            </p>
                            <input
                                type="text"
                                className="w-full px-4 py-4 border border-gray-200 rounded border-button text-primary bg-primary focus:border-gray-500 focus:ring-0"
                                placeholder="What would you like to be known as?"
                            />
                        </div>
                        <div>
                            <p className="mb-1 text-sm text-primary">
                                Password
                            </p>
                            <input
                                type="password"
                                className="w-full px-4 py-4 mb-4 border border-gray-200 rounded border-button bg-primary text-primary focus:border-gray-500 focus:ring-0"
                                placeholder="Enter your Password"
                            />
                        </div>

                        <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-button transition duration-500 text-primary transform hover:scale-110">
                            Register for readme{' '} 🎉
                        </button>

                    </form>
                    <small className="fixed text-primary top-2 right-2">
                        Already on readme?
                                <Link href="/login">
                            <a className="ml-1 font-extrabold text-primary">Log In &rarr;</a>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    )
}

