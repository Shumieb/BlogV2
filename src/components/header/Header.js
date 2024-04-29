import Link from "next/link"

function Header() {
    return (
        <header>
            <Link href="/">My Blog</Link>
            <div>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/admin">Admin</Link>
                </nav>
                <div>
                    <Link href="/login">Log In</Link>
                    <Link href="/signup">Sign Up</Link>
                    <button>Log Out</button>
                </div>
            </div>
        </header>
    )
}

export default Header