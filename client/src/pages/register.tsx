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
                    <div className="py-6 h-1/6">
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
                                    <li className="p-2 px-4 py-2 mx-4 font-bold bg-white rounded-full shadow-2xl hover:bg-blue-600 hover:text-white">
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
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="loader">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            <feBlend in2="goo" in="SourceGraphic" result="mix" />
                        </filter>
                        <linearGradient id="MyGradient">
                            <stop offset="5%" stop-color="#e310d1" />
                            <stop offset="40%" stop-color="#34e8eb" />
                            <stop offset="100%" stop-color="#34e8eb" />
                        </linearGradient>
                    </defs>
                    <mask id="maska">
                        <g className="blobs">
                            <circle className="blob" cx="440" cy="250" r="30" transform="rotate(0) translate(0, 0) rotate(0)" />
                            <circle className="blob" cx="500" cy="320" r="70" transform="rotate(0) translate(0, 0) rotate(0)" />
                            <circle className="blob" cx="300" cy="390" r="40" transform="rotate(0) translate(0, 0) rotate(0)" />
                            <circle className="blob" cx="380" cy="390" r="80" transform="rotate(0) translate(0, 0) rotate(0)" />
                            <circle className="blob" cx="470" cy="450" r="20" transform="rotate(0) translate(0, 0) rotate(0)" />
                        </g>
                    </mask>
                    <rect x="0" y="0" mask="url(#maska)" fill="url(#MyGradient)" width="200%" height="200%"></rect>
                </svg>
                <section className="flex h-5/6">
                    <div className="flex justify-center w-full lg:w-1/2">
                        <div className="self-center max-w-xl p-6">
                            <h1 className="mb-20 text-6xl font-bold leading-tight">
                                Sign Up for<br />
                                webblit<br />
                            </h1>
                            <p className="mb-6 text-lg leading-relaxed">
                                If you already have an account, <br />
                                you can <a href="#" className="text-blue-700">sign in here</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pl-6">
                        <div className="w-70">
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="checkbox"
                                        className="mr-1 cursor-pointer"
                                        id="agreement"
                                    />
                                    <label htmlFor="agreement" className="text-xs cursor-pointer">
                                        I agree to get emails about cool stuff on Readit
                                </label>
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="password"
                                        className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
                                        placeholder="Password"
                                    />
                                </div>
                                <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
                                    Sign Up
            </button>
                            </form>
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
