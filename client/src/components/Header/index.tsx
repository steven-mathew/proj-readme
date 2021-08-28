import Link from 'next/link'
import ThemeToggle from '../Toggle'

function Header() {
    return (
        <header className="container h-32 px-5 m-auto overflow-hidden sm:px-12 md:px-20 max-w-screen-xl">
            <nav
                className="flex items-center justify-center h-full mt-auto text-sm space-x-6 md:justify-start"
                aria-label="Main Navigation"
            >
                <Link href="/">
                    <a aria-label="Website logo, go back to homepage.">
                        <h1 className="text-4xl fill-current sm:h-10 sm:w-10 hover:text-accent transition duration-150">
                            r.
                        </h1>
                    </a>
                </Link>
                <div className="items-center flex-grow sm:flex space-x-6">
                </div>
                <ThemeToggle className="sm:block hover:text-accent transition duration-150" />
            </nav>
        </header>
    )
}

export default Header
