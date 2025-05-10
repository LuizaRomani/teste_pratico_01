import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'

interface GetOriginalUrlParams {
  shorterUrl: string
}

export async function getOriginalUrl({ shorterUrl }: GetOriginalUrlParams) {
  const link = await db.query.links.findFirst({
    where: eq(links.shorterUrl, shorterUrl),
  })

  if (!link) {
    throw new Error('Link not found')
  }

  return link.originalUrl
}
