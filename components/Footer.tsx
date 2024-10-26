import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy;2024 code4mk.org. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer