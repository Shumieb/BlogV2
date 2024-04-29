import Link from "next/link"

function Header() {
    return (
        <header className="flex flex-row justify-around items-center w-full p-3">
            <Link href="/" className="basis-1/3 text-xl">My Blog</Link>
            <div className="flex flex-row basis-2/3 justify-end items-center">
                <nav className="flex flex-row">
                    <Link href="/" className="mx-4">Home</Link>
                    <Link href="/about" className="mx-4">About</Link>
                    <Link href="/contact" className="mx-4">Contact</Link>
                    <Link href="/admin" className="mx-4">Admin</Link>
                </nav>
                <div className="flex flex-row">
                    <Link
                        href="/login"
                        className="mx-4 bg-white text-blue-950 px-5 py-2 rounded hover:bg-lime-100"
                    >
                        Log In
                    </Link>
                    <Link
                        href="/signup"
                        className="mx-4 bg-white text-blue-950 px-5 py-2 rounded hover:bg-lime-100"
                    >
                        Sign Up
                    </Link>
                    <button
                        className="mx-4 bg-white text-blue-950 px-5 py-2 rounded hover:bg-lime-100"
                    >
                        Log Out
                    </button>
                    <button
                        className="mx-4 bg-white text-blue-950 px-2.5 py-2 rounded-full"
                    >
                        SC
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header