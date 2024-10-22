"use client"
import React, { useState, ReactNode } from 'react'

interface TabsProps {
  children: ReactNode
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                className={`px-4 py-2 ${
                  index === activeTab
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {child.props.title}
              </button>
            )
          }
          return null
        })}
      </div>
      <div className="py-4">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  )
}

interface TabPanelProps {
  title: string
  children: ReactNode
}

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <div>{children}</div>
}