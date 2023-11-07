import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/questions">Questions</Link>
      <Link href="/interview">Interview</Link>
    </main>
  )
}
