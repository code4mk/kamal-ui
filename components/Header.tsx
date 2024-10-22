import React from 'react'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-2xl font-bold">kamal_ui</h1>
      </div>
    </header>
  )
}

export default Header