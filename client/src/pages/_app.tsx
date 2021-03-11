import '../styles/globals.css'
import '../styles/blobs.css'

import {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default App
