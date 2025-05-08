import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'

interface GetAccessCountParams {
  id: string
}

export async function getAccessCount({ id }: GetAccessCountParams) {
  const link = await db.query.links.findFirst({
    where: eq(links.id, id),
  })

  if (!link) {
    throw new Error('Link not found')
  }

  return link.accessCount
}
