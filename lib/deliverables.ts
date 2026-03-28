import fs from 'fs'
import path from 'path'
import { DELIVERABLES, INTERNAL_DELIVERABLES } from './constants'

export function getDeliverableContent(slug: string): string {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return `# ${slug}\n\nContent coming soon.`
  }
}

export function getAllDeliverables() {
  return DELIVERABLES.map(d => ({
    ...d,
    available: fs.existsSync(path.join(process.cwd(), 'content', `${d.slug}.md`))
  }))
}

export function getInternalDeliverableContent(slug: string): string {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return `# ${slug}\n\nContent coming soon.`
  }
}

export function getAllInternalDeliverables() {
  return INTERNAL_DELIVERABLES.map(d => ({
    ...d,
    available: fs.existsSync(path.join(process.cwd(), 'content', `${d.slug}.md`))
  }))
}
