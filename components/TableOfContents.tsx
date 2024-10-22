import React from 'react'

interface TableOfContentsProps {
  className?: string
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ className }) => {
  return (
    <nav className={`p-4 overflow-y-auto ${className}`}>
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul>
        <li><a href="#section1" className="hover:text-blue-600">Section 1</a></li>
        <li><a href="#section2" className="hover:text-blue-600">Section 2</a></li>
        {/* Add more TOC items as needed */}
      </ul>
    </nav>
  )
}

export default TableOfContents