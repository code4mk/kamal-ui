import fs from 'fs'
import path from 'path'

/**
 * Function to dynamically import all .tsx components from the preset folder
 */
export const importComponentsFromPreset = async () => {
  const componentDir = path.join(process.cwd(), 'src/components/preset')
  const files = fs.readdirSync(componentDir)
  
  const components = {}

  for (const file of files) {
    if (file.endsWith('.tsx')) {
      const componentName = path.basename(file, '.tsx')
      const component = (await import(`@/components/preset/${componentName}`)).default
      components[componentName] = component
    }
  }

  return components
}
