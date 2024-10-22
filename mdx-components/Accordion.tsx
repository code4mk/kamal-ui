"use client"
import React, { useState, ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-md mb-2">
      <button
        className="flex justify-between w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  )
}

interface AccordionGroupProps {
  children: ReactNode
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ children }) => {
  return <div className="space-y-2">{children}</div>
}