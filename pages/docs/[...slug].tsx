import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'

import { Accordion, AccordionGroup } from '@/mdx_components/Accordion'
import { CalloutBox } from '@/mdx_components/CalloutBox'
import { Card, CardGroup } from '@/mdx_components/Card'
import { CodeBlock, CodeGroup } from '@/mdx_components/Code'
import { Tabs, TabPanel } from '@/mdx_components/Tabs'
import { Tooltip } from '@/mdx_components/Tooltip'
import ResponsiveLayout from '@/mdx-components/ResponsiveLayout'

const presetComponentsDir = path.join(process.cwd(), 'components', 'preset')

interface DocPageProps {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title?: string
    description?: string
    [key: string]: any
  }
  dynamicComponentNames: string[] // Dynamic components passed from getStaticProps
}

const DocPage: React.FC<DocPageProps> = ({ source, frontMatter, dynamicComponentNames }) => {
  // Dynamically load each component
  const dynamicComponents = dynamicComponentNames.reduce((components, componentName) => {
    components[componentName] = dynamic(() =>
      import(`@/components/preset/${componentName}`).catch(() => null), // Handle failed imports gracefully
    )
    return components
  }, {} as Record<string, any>)

  const tcomponents = {
    ...dynamicComponents, // Dynamically loaded components
    Accordion,
    AccordionGroup,
    CalloutBox,
    Card,
    CardGroup,
    CodeBlock,
    CodeGroup,
    Tabs,
    TabPanel,
    Tooltip,
  ResponsiveLayout,
    h1: (props: any) => <h1 className="text-4xl font-bold mb-6 text-gray-900" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mb-5 text-gray-900" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-medium mb-4 text-gray-900" {...props} />,
    h4: (props: any) => <h4 className="text-xl font-medium mb-3 text-gray-900" {...props} />,
    h5: (props: any) => <h5 className="text-lg font-medium mb-2 text-gray-900" {...props} />,
    h6: (props: any) => <h6 className="text-base font-medium mb-1 text-gray-900" {...props} />,
    table: (props: any) => <table className="min-w-full border-collapse border border-gray-300 mt-2 mb-2" {...props} />,
    thead: (props: any) => <thead className="bg-gray-100" {...props} />,
    th: (props: any) => <th className="border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />,
    td: (props: any) => <td className="border border-gray-300 px-4 py-2" {...props} />,
  }

  return (
    <>
      {frontMatter.title && <h1>{frontMatter.title}</h1>}
      {frontMatter.description && <p>{frontMatter.description}</p>}
      <MDXRemote components={tcomponents} {...source} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('docs'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', '').split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string[] }
  const filePath = path.join('docs', `${slug.join('/')}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')

  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  // Get all component filenames inside the preset directory
  const dynamicComponentNames = fs
    .readdirSync(presetComponentsDir)
    .filter((file) => file.endsWith('.tsx')) // Only get .tsx files
    .map((file) => file.replace('.tsx', '')) // Remove the extension from filenames

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      dynamicComponentNames, // Pass component names to the page
    },
  }
}

export default DocPage
