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
                <section className="relative flex h-5/6">
                    <svg viewBox="60 25 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-full" style={{zIndex: 0, filter: 'blur(50px)', opacity: '15%'}}>
                        <path fill="#000fff" d="M37.8,-45.8C50.2,-42.9,62.5,-33.6,69.9,-20.5C77.3,-7.3,79.8,9.7,71.3,19.2C62.7,28.7,43.2,30.7,29.5,34.1C15.8,37.5,7.9,42.3,-3.8,47.6C-15.5,52.9,-31.1,58.5,-41.4,54C-51.8,49.5,-57,34.9,-57,21.6C-57,8.4,-51.8,-3.4,-50.3,-18.9C-48.8,-34.5,-51,-53.8,-43.2,-58.2C-35.4,-62.5,-17.7,-51.9,-2.5,-48.4C12.7,-44.9,25.3,-48.6,37.8,-45.8Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="100 25 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute h-full" style={{zIndex: 0, filter: 'blur(50px)', opacity: '17%'}}>
                        <path fill="#FF00ff" d="M37.8,-45.8C50.2,-42.9,62.5,-33.6,69.9,-20.5C77.3,-7.3,79.8,9.7,71.3,19.2C62.7,28.7,43.2,30.7,29.5,34.1C15.8,37.5,7.9,42.3,-3.8,47.6C-15.5,52.9,-31.1,58.5,-41.4,54C-51.8,49.5,-57,34.9,-57,21.6C-57,8.4,-51.8,-3.4,-50.3,-18.9C-48.8,-34.5,-51,-53.8,-43.2,-58.2C-35.4,-62.5,-17.7,-51.9,-2.5,-48.4C12.7,-44.9,25.3,-48.6,37.8,-45.8Z" transform="translate(100 100)" />
                    </svg>
                    <div className="z-10 flex justify-center w-full lg:w-1/2">
                        <div className="self-center max-w-xl p-6">
                            <h1 className="mb-20 font-bold leading-tight text-8xl">
                                Sign Up for<br />
                                webblit<br />
                            </h1>
                            <p className="mb-6 text-2xl leading-relaxed">
                                If you already have an account, <br />
                                you can <a href="#" className="font-bold text-indigo-600">sign in here</a>
                            </p>
                        </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-2/3 pl-6">
                        <div className="w-1/2">
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
