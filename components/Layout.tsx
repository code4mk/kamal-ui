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
      {children}
      <Footer />
    </div>
  )
}

export default Layout