// scripts/validate-imports.js

const fs = require('fs')
const path = require('path')

const PROJECT_ROOT = process.cwd()
const SOURCE_DIR = path.join(PROJECT_ROOT, 'components')
const ALIAS = '@/'

const resolveImportPath = (importPath, currentFile) => {
  if (importPath.startsWith(ALIAS)) {
    const relativePath = importPath.replace(ALIAS, '')
    const tsxPath = path.join(PROJECT_ROOT, 'components', relativePath) + '.tsx'
    const tsPath = path.join(PROJECT_ROOT, 'components', relativePath) + '.ts'
    if (fs.existsSync(tsxPath)) return tsxPath
    if (fs.existsSync(tsPath)) return tsPath
    return tsxPath // fallback
  }

  // Handle relative paths
  if (importPath.startsWith('.')) {
    const tsxPath = path.resolve(path.dirname(currentFile), importPath) + '.tsx'
    const tsPath = path.resolve(path.dirname(currentFile), importPath) + '.ts'
    if (fs.existsSync(tsxPath)) return tsxPath
    if (fs.existsSync(tsPath)) return tsPath
    return tsxPath // fallback
  }

  return null // Ignore package imports
}

const findImports = (fileContent) => {
  const importRegex = /import\s.*?from\s+['"](.*?)['"]/g
  const matches = []
  let match
  while ((match = importRegex.exec(fileContent))) {
    matches.push(match[1])
  }
  return matches
}

const scanDir = (dir) => {
  let brokenImports = []
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      brokenImports = brokenImports.concat(scanDir(fullPath))
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const imports = findImports(content)
      imports.forEach((imp) => {
        const resolved = resolveImportPath(imp, fullPath)
        if (resolved && !fs.existsSync(resolved)) {
          brokenImports.push(`${fullPath} → ${imp}`)
        }
      })
    }
  })
  return brokenImports
}

console.log('🔍 Validating imports...\n')

const TARGET_DIRS = ['pages', 'app', 'components', 'lib']
const broken = TARGET_DIRS.flatMap((dir) => scanDir(path.join(PROJECT_ROOT, dir)))

if (broken.length > 0) {
  console.log('❌ Broken imports found:\n')
  broken.forEach((b) => console.log('  - ' + b))
  process.exit(1)
} else {
  console.log('✅ All imports resolved successfully.\n')
}
