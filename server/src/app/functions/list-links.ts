import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'

export async function listLinks() {
  try {
    const allLinks = await db.select().from(links)
    return allLinks
  } catch (error) {
    console.error('Error in listLinks:', error)
    throw error
  }
}
