import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import path from 'path'
// Server-side only imports
import { getAllMdxFiles, DOCS_DIRECTORY } from '@/utils/mdxUtils'
import {Helmet} from "react-helmet";
import { Accordion, AccordionGroup } from '@/mdx_components/Accordion'
import { CalloutBox } from '@/mdx_components/CalloutBox'
import { Card, CardGroup } from '@/mdx_components/Card'
import { CodeBlock, CodeGroup } from '@/mdx_components/Code'
import { Tabs, TabPanel } from '@/mdx_components/Tabs'
import { Tooltip } from '@/mdx_components/Tooltip'
import DemoPreview from '@/mdx-components/DemoPreview'
import DocLayout from '@/components/DocLayout';

// This should be determined at build time
const presetComponentsDir = path.join(process.cwd(), 'components', 'preset')

interface DocPageProps {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title?: string
    description?: string
    [key: string]: any
  }
  dynamicComponentNames: string[]
}

const DocPage: React.FC<DocPageProps> = ({ source, frontMatter, dynamicComponentNames }) => {
  const dynamicComponents = dynamicComponentNames.reduce((components, componentName) => {
    components[componentName] = dynamic(() =>
      import(`@/components/preset/${componentName}`).catch(() => null)
    )
    return components
  }, {} as Record<string, any>)

  const components = {
    ...dynamicComponents,
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
    DemoPreview,
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
    <DocLayout>
      <Helmet>
        <title>{frontMatter?.title}</title>
        <meta name="description" content={frontMatter?.description} />
    </Helmet>
      {/* {frontMatter.title && <h1>{frontMatter.title}</h1>}
      {frontMatter.description && <p>{frontMatter.description}</p>} */}
      <MDXRemote components={components} {...source} />
    </DocLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Using fs only in server-side function
  const mdxFiles = getAllMdxFiles(DOCS_DIRECTORY)
  
  const paths = mdxFiles.map(filePath => {
    const relativePath = path.relative(DOCS_DIRECTORY, filePath)
    const slug = relativePath.replace(/\.mdx$/, '').split(path.sep)
    
    return {
      params: { slug }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string[] }
  const filePath = path.join(DOCS_DIRECTORY, `${slug.join('/')}.mdx`)
  
  try {
    // Using fs only in server-side function
    const source = require('fs').readFileSync(filePath, 'utf8')
    const { content, data } = matter(source)
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    })

    const dynamicComponentNames = require('fs')
      .readdirSync(presetComponentsDir)
      .filter((file: string) => file.endsWith('.tsx'))
      .map((file: string) => file.replace('.tsx', ''))

    return {
      props: {
        source: mdxSource,
        frontMatter: data,
        dynamicComponentNames,
      },
    }
  } catch (error) {
    console.error(`Error processing MDX file: ${filePath}`, error)
    return {
      notFound: true,
    }
  }
}

export default DocPage