import * as React from 'react'
import Image from 'next/image'
import Page from '../components/Page'
import {CenteredColumn} from '../components/Layouts'
import SignupBox from '../components/Signup'
import Link from 'next/link'

function Register() {
    return (
        <Page>
            <CenteredColumn>
                <div className="space-y-16 md:space-y-24">
                    <div className="space-y-12 md:items-center">
                        <SignupBox />
                        <div className="flex flex-wrap h-48 bg-yellow-100 grid grid-rows-2 place-content-center">
                            <div className="w-48 h-48 bg-red-400 rounded-full row-span-2"></div>
                            <div className="z-10 w-24 h-24 bg-blue-400 row-start-2 row-span-1"></div>
                        </div>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

// <div className="absolute inset-0 z-10 flex items-center justify-center">
//     <p className="text-2xl font-bold">This should be on top of the map</p>
// </div>
export default Register


// export default function Register() {
//     return (
//         <div className="flex">
//             <Head>
//                 <title>Register</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <div
//                 className="w-40 h-screen bg-center bg-cover"
//                 style={{backgroundImage: "url('/images/bricks.jpg')"}}
//             ></div>
//             <div className="flex flex-col justify-center pl-6">
//                 <div className="w-70">
//                     <h1 className="mb-2 text-lg font-medium">Sign Up</h1>
//                     <p className="mb-10 text-xs">
//                         By continuing, you agree to our User Agreement and Privacy Policy
//           </p>
//                     <form>
//                         <div className="mb-6">
//                             <input
//                                 type="checkbox"
//                                 className="mr-1 cursor-pointer"
//                                 id="agreement"
//                             />
//                             <label htmlFor="agreement" className="text-xs cursor-pointer">
//                                 I agree to get emails about cool stuff on Readit
//               </label>
//                         </div>
//                         <div className="mb-2">
//                             <input
//                                 type="email"
//                                 className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
//                                 placeholder="Email"
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
//                                 placeholder="Username"
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <input
//                                 type="password"
//                                 className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
//                                 placeholder="Password"
//                             />
//                         </div>
//                         <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
//                             Sign Up
//             </button>
//                     </form>
//                     <small>
//                         Already a readitor?
//             <Link href="/login">
//                             <a className="ml-1 text-blue-500 uppercase">Log In</a>
//                         </Link>
//                     </small>
//                 </div>
//             </div>
//         </div>
//     )
// }
