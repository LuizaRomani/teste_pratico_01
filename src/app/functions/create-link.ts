import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'

interface CreateLinkParams {
  originalUrl: string
  shorterUrl: string
}

export async function createLink({ originalUrl, shorterUrl }: CreateLinkParams) {
  // Check if shorterUrl already exists
  const existingLink = await db.query.links.findFirst({
    where: eq(links.shorterUrl, shorterUrl),
  })

  if (existingLink) {
    throw new Error('Short URL already exists')
  }

  // Create new link
  const [link] = await db
    .insert(links)
    .values({
      originalUrl,
      shorterUrl,
    })
    .returning()

  return link
}
