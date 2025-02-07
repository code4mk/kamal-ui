import React from 'react'
import Link from 'next/link'
import { ArrowRight, Layout, Table2, FileText } from 'lucide-react'
import Head from 'next/head'

const Home: React.FC = () => {
  const categories = [
    {
      title: 'Components',
      description: 'A collection of reusable UI components built with Tailwind CSS',
      links: [
        { href: '/docs/buttons/buttons', label: 'Buttons' },
        { href: '/docs/cards/single', label: 'Cards' },
        { href: '/docs/modal/modals', label: 'Modals' },
      ],
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: 'Tables',
      description: 'Advanced table components with sorting, filtering, and pagination',
      links: [
        { href: '/docs/tables/simple', label: 'Simple Table' },
        { href: '/docs/tables/advanced', label: 'Advanced Table' },
      ],
      icon: <Table2 className="w-6 h-6" />,
    },
    {
      title: 'Forms',
      description: 'Form components and validation with React Hook Form',
      links: [
        { href: '/docs/forms/basic', label: 'Basic Forms' },
        { href: '/docs/forms/advanced', label: 'Advanced Forms' },
      ],
      icon: <FileText className="w-6 h-6" />,
    },
  ]

  return (
    <>
      <Head>
        <title>Kamal UI Components - React & Tailwind CSS Component Library</title>
        <meta name="description" content="A collection of beautifully designed components built with Tailwind CSS and React, ready to use in your next project." />
        <meta name="keywords" content="React components, Tailwind CSS, UI library, React UI, component library" />
        <meta property="og:title" content="Kamal UI Components - React & Tailwind CSS Component Library" />
        <meta property="og:description" content="A collection of beautifully designed components built with Tailwind CSS and React, ready to use in your next project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kamal-ui.com" /> {/* Update with your actual domain */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kamal UI Components - React & Tailwind CSS Component Library" />
        <meta name="twitter:description" content="A collection of beautifully designed components built with Tailwind CSS and React, ready to use in your next project." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Kamal UI Components
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              A collection of beautifully designed components built with Tailwind CSS and React, 
              ready to use in your next project.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/docs/getting-started" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="https://github.com/code4mk/kamal-ui" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home