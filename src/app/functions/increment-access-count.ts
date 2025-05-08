import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq, sql } from 'drizzle-orm'

interface IncrementAccessCountParams {
  id: string
}

export async function incrementAccessCount({ id }: IncrementAccessCountParams) {
  const [link] = await db
    .update(links)
    .set({
      accessCount: sql`${links.accessCount} + 1`,
    })
    .where(eq(links.id, id))
    .returning()

  if (!link) {
    throw new Error('Link not found')
  }

  return link.accessCount
}
