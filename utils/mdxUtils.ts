// utils/mdxUtils.ts
import fs from 'fs'
import path from 'path'

// Place these utilities in a separate file
export const DOCS_DIRECTORY = path.join(process.cwd(), 'docs')

export const getAllMdxFiles = (dir: string): string[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  
  const mdxFiles = files.reduce<string[]>((allFiles, file) => {
    const filePath = path.join(dir, file.name)
    
    if (file.isDirectory()) {
      return [...allFiles, ...getAllMdxFiles(filePath)]
    } else if (file.name.endsWith('.mdx')) {
      return [...allFiles, filePath]
    }
    
    return allFiles
  }, [])
  
  return mdxFiles
}