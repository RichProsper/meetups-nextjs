import Link from 'next/link'

export default function index() {
    return (
        <div>
            <h1>Index Page!</h1>
            <Link href="/news">News Page</Link>
        </div>
    )
}
