import React from 'react'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Documentation</h1>
      <p className="mb-4 text-green-400 ">Get started by exploring our docs:</p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/docs/getting-started" className="text-blue-600 hover:underline">
            Getting Started
          </Link>
        </li>
        <li>
          <Link href="/docs/advanced-topics" className="text-blue-600 hover:underline">
            Advanced Topics
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home