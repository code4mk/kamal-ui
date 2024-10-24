import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import TableOfContents from './TableOfContents'
import Footer from './Footer'
import pages from '@/utils/pageMenu'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 pt-16"> {/* pt-16 to account for fixed header */}
      <Sidebar 
          className="w-64 bg-gray-100 fixed left-0 top-16 bottom-0" 
          pages={pages}
        />
        <main className="flex-1 ml-64 mr-64 p-8 overflow-y-auto">{children}</main>
        <TableOfContents className="w-64 bg-gray-100 fixed right-0 top-16 bottom-0" />
      </div>
      <Footer />
    </div>
  )
}

export default Layout