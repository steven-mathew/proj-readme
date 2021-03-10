import Head from 'next/head'

export default function Register() {
    return (
        <div>
            <Head>
                <title>Register Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="h-screen bg-gray-200">
                <section>
                    <div className="py-6 bg-white h-1/6">
                        <div className="container flex items-center justify-between mx-auto">
                            <div>
                                <ul className="flex">
                                    <li className="p-4 mx-8">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="p-4 mx-8">
                                        <a href="#">Blah</a>
                                    </li>
                                    <li className="p-4 mx-8">
                                        <a href="#">About</a>
                                    </li>
                                    <li className="p-4 mx-8">
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex">
                                    <li className="p-2 mx-4">
                                        <a href="#">Sign in</a>
                                    </li>
                                    <li className="p-2 mx-4">
                                        <a href="#">Sign up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex h-5/6">
                    <div className="flex justify-center w-full lg:w-1/2">
                        <div className="self-center max-w-xl p-6">
                            <h1 className="mb-6 text-5xl font-bold leading-tight">
                                Sign Up for<br />
                                webblit<br />
                            </h1>
                            <p className="mb-6 text-lg leading-relaxed">
                                If you already have an account, <br />
                                you can <a href="#" className="text-blue-700">sign in here</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center w-full lg:w-1/2">
                        <div className="self-center max-w-xl p-6">
                            <h1 className="mb-6 text-5xl font-bold leading-tight">
                                Hello, I like to eat chocolate
                            </h1>
                        </div>
                    </div>
                </section>
            </body>


        </div>
    )
}


            // <div className="w-40 h-screen bg-center bg-cover"
            //     style={{backgroundColor: "pink"}}
            // >
            // </div>
            // <div className="flex flex-col justify-center pl-6">
            //     <h1 className="mb-2 text-lg">
            //         Sign up
            //     </h1>
            // </div>
