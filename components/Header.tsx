import React from 'react'
import Link from 'next/link'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="px-4 py-2">
        <Link className="text-2xl font-bold" href="/">kamal_ui</Link>
      </div>
    </header>
  )
}

export default Header