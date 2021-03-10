import Head from 'next/head'

export default function Register() {
    return (
        <div className="flex">
            <Head>
                <title>Register Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-40 h-screen bg-center bg-cover"
                style={{backgroundColor: "pink"}}
            >
            </div>
            <div className="flex flex-col justify-center pl-6">
                <h1 className="mb-2 text-lg">
                    Sign up
                </h1>
            </div>
        </div >
    )
}


