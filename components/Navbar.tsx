import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto p-4 flex justify-between">
        <Link href="/" className="font-bold">Serfiliana B2B</Link>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  )
}
