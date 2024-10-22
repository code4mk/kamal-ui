"use client"

import React, { useState, useEffect, useRef, ReactNode } from 'react'
import { Copy, Check, FileCode2, ChevronDown, Maximize2, Minimize2 } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

interface CodeBlockProps {
  language: string
  title?: string
  content_file_path?: string
  children?: string
  showLineNumbers?: boolean
  className?: string
  maxHeight?: number
}

interface CodeGroupProps {
  children: ReactNode
  className?: string
}

const formatCode = (code: string): string => {
  const lines = code.split('\n')
  const minIndent = Math.min(
    ...lines
      .filter(line => line.trim())
      .map(line => line.match(/^\s*/)?.[0].length ?? Infinity)
  )
  return lines
    .map(line => line.slice(minIndent))
    .join('\n')
    .trim()
}

const languageNames: Record<string, string> = {
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  python: 'Python',
  jsx: 'React JSX',
  tsx: 'React TSX',
  bash: 'Bash',
  json: 'JSON',
  html: 'HTML',
  css: 'CSS',
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  content_file_path,
  children,
  title,
  showLineNumbers = true,
  className = '',
  maxHeight = 100,
}) => {
  const [copied, setCopied] = useState(false)
  const [formattedCode, setFormattedCode] = useState('')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showExpandButton, setShowExpandButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const codeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchContent = async () => {
      if (content_file_path) {
        setIsLoading(true)
        setError(null)
        try {
          const response = await fetch(content_file_path)
          if (!response.ok) {
            throw new Error(`Failed to load file: ${response.statusText}`)
          }
          const text = await response.text()
          const formatted = formatCode(text)
          setFormattedCode(formatted)
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to load file')
          console.error('Error loading file:', err)
        } finally {
          setIsLoading(false)
        }
      } else if (children) {
        setFormattedCode(formatCode(children))
      }
    }

    fetchContent()
  }, [content_file_path, children])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [formattedCode])

  useEffect(() => {
    if (codeRef.current) {
      const { scrollHeight } = codeRef.current
      setShowExpandButton(scrollHeight > maxHeight)
    }
  }, [formattedCode, maxHeight])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (isLoading) {
    return (
      <div className="rounded-md border border-gray-200 p-4 bg-white">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md border border-red-200 p-4 bg-red-50 text-red-700">
        <p className="text-sm font-medium">Error loading code: {error}</p>
      </div>
    )
  }

  return (
    <div className={`
      rounded-b-md overflow-hidden
      border border-gray-200 
      bg-white
      shadow-sm 
      transition-all duration-200 ease-in-out
      hover:shadow-md
      ${className}
    `}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <FileCode2 className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">
            {title || languageNames[language] || language}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {languageNames[language] || language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyToClipboard}
            className="
              flex items-center gap-1.5
              rounded-md 
              px-2.5 py-1.5
              text-xs font-medium
              text-gray-600
              hover:bg-gray-100
              active:bg-gray-200
              transition-colors
            "
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="
              rounded-md 
              p-1.5
              text-gray-600
              hover:bg-gray-100
              active:bg-gray-200
              transition-colors
            "
            aria-label={isCollapsed ? "Expand code" : "Collapse code"}
          >
            <ChevronDown 
              className={`h-4 w-4 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className={`
        transition-all duration-200 ease-in-out
        ${isCollapsed ? 'h-0' : 'h-auto'}
        relative
      `}>
        <div 
          ref={codeRef}
          className={`
            relative bg-white
            ${!isExpanded ? `max-h-[300px] overflow-y-auto` : ''}
          `}
        >
          <pre className={`
            ${showLineNumbers ? 'line-numbers' : ''}
            !bg-white
            !m-0
            text-sm
            overflow-x-auto
          `}>
            <code className={`language-${language} !bg-white`}>
              {formattedCode}
            </code>
          </pre>
        </div>

        {/* Show More/Less Button */}
        {showExpandButton && !isCollapsed && (
          <div className={`
            absolute bottom-0 left-0 right-0
            flex justify-center
            py-2
            bg-gradient-to-t from-white to-transparent
            ${isExpanded ? 'static bg-none' : ''}
          `}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="
                flex items-center gap-1.5
                rounded-md 
                px-3 py-1.5
                text-xs font-medium
                text-gray-600
                bg-white
                border border-gray-200
                hover:bg-gray-50
                active:bg-gray-100
                transition-colors
                shadow-sm
              "
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="h-3.5 w-3.5" />
                  Show Less
                </>
              ) : (
                <>
                  <Maximize2 className="h-3.5 w-3.5" />
                  Show More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export const CodeGroup: React.FC<CodeGroupProps> = ({ 
  children, 
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = React.Children.toArray(children)
    .filter(React.isValidElement)
    .map((child: any) => ({
      title: child.props.title,
      content: child
    }))

  return (
    <div className={`
      rounded-lg 
      border-t border-gray-200 
      bg-white 
      shadow-sm
      overflow-hidden
      mt-2
      ${className}
    `}>
      <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              flex items-center gap-2 
              px-4 py-2 
              text-sm font-medium
              border-r border-gray-200
              transition-colors
              ${index === activeTab
                ? 'bg-white text-gray-900 border-b-2 border-b-blue-500'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }
            `}
          >
            <FileCode2 className="h-4 w-4" />
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}