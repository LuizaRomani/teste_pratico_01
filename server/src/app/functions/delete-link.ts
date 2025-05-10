import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'

interface DeleteLinkParams {
  id: string
}

export async function deleteLink({ id }: DeleteLinkParams) {
  const [link] = await db.delete(links).where(eq(links.id, id)).returning()

  if (!link) {
    throw new Error('Link not found')
  }

  return link
}
