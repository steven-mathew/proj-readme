import Head from 'next/head'

// <div
//     className="w-40 h-screen bg-center bg-cover"
//     style={{backgroundImage: "url('https://images.unsplash.com/photo-1544306094-e2dcf9479da3') no-repeat"}}
// ></div>
// 
// <div
//     className="w-40 h-screen bg-center bg-cover"
//     style={{backgroundImage: "url('https://images.unsplash.com/photo-1544306094-e2dcf9479da3') no-repeat"}}
// ></div>

// <div
//     className="fixed z-0 block w-screen h-screen"
//     style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1544306094-e2dcf9479da3')",
//         filter: "blur(10px)"
//     }}
// ></div>
export default function Register() {
    return (
        <div>
            <Head>
                <title>Register Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen bg-gray-100">
                <section>
                    <div className="py-6 h-1/6" style={{zIndex: 9999}}>
                        <div className="container flex items-center justify-between mx-auto font-bold">
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
                                    <li className="p-2 px-4 py-2 mx-4 font-bold bg-white rounded-full shadow-2xl hover:bg-indigo-600 hover:shadow-lg hover:text-white">
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
                <section className="flex h-5/6" style={{zIndex: 10}}>
                    <div className="flex justify-center w-full lg:w-1/2">
                        <div className="self-center max-w-xl p-6">
                            <h1 className="mb-20 text-6xl font-bold leading-tight">
                                Sign Up for<br />
                                webblit<br />
                            </h1>
                            <p className="mb-6 text-lg leading-relaxed">
                                If you already have an account, <br />
                                you can <a href="#" className="text-indigo-600">sign in here</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pl-6">
                        <div className="w-96">
                            <form>
                                <div className="mb-8">
                                    <input
                                        type="email"
                                        className="w-full h-16 px-8 py-2 font-bold bg-indigo-100 rounded-xl"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-8">
                                    <input
                                        type="text"
                                        className="w-full h-16 px-8 py-2 font-bold bg-indigo-100 rounded-xl"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="password"
                                        className="w-full h-16 px-8 py-2 font-bold bg-indigo-100 rounded-xl"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="flex justify-end mb-12 text-sm font-bold text-gray-400 content-evenly continue-text">
                                    <span>Forgot your password?</span>
                                </div>
                                <button className="w-full h-16 py-2 mb-4 mb-20 text-lg font-bold text-white bg-indigo-600 border border-blue-500 shadow-3xl rounded-xl">
                                    Sign Up
                                </button>
                            </form>
                            <div className="flex justify-center mb-6 font-bold text-gray-400 continue-text">
                                <span>or continue with</span>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <div className="w-1/3 h-20 px-8 py-2 m-2 border rounded-xl hover:bg-white hover:shadow-2xl"
                                    style={{
                                        backgroundImage: "url('/images/icons8-google-52.png')",
                                        backgroundRepeat: "no-repeat", backgroundPosition: "center center"
                                    }}>
                                </div>
                                <div className="w-1/3 h-20 px-8 py-2 m-2 border rounded-xl hover:bg-white hover:shadow-2xl"
                                    style={{
                                        backgroundImage: "url('/images/icons8-apple-logo-52.png')",
                                        backgroundRepeat: "no-repeat", backgroundPosition: "center center"
                                    }}>
                                </div>
                                <div className="w-1/3 h-20 px-8 py-2 m-2 border rounded-xl hover:bg-white hover:shadow-2xl"
                                    style={{
                                        backgroundImage: "url('/images/icons8-facebook-52.png')",
                                        backgroundRepeat: "no-repeat", backgroundPosition: "center center"
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
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
