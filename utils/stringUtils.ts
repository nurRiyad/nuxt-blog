export function createFolderName(date: string, title: string): string {
  const parsedDate = new Date(date)
  if (Number.isNaN(parsedDate.getTime()))
    throw new Error('Date invalide fournie')

  const formattedDate = parsedDate.toISOString().split('T')[0] // Format: YYYY-MM-DD
  const slugifiedTitle = slugify(title)
  return `${formattedDate}-${slugifiedTitle}`
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
