"use client"
import React, { ReactNode } from 'react'
import { AlertCircle, Info, CheckCircle } from 'lucide-react'

const icons = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
}

type CalloutType = 'info' | 'warning' | 'success'

interface CalloutBoxProps {
  type?: CalloutType
  title: string
  children: ReactNode
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({ type = 'info', title, children }) => {
  const Icon = icons[type]
  const colors = {
    info: 'bg-blue-100 border-blue-500 text-blue-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    success: 'bg-green-100 border-green-500 text-green-700',
  }

  return (
    <div className={`p-4 my-4 border-l-4 rounded-r ${colors[type]}`}>
      <div className="flex items-center mb-2">
        <Icon className="mr-2" />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div>{children}</div>
    </div>
  )
}