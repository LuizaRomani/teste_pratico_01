import { r2 } from './client'
import { Upload } from '@aws-sdk/lib-storage'
import { env } from '../env'
import { randomUUID } from 'crypto'
import { listLinks } from '@/app/functions/list-links'

export async function uploadLinksToStorage() {
  const links = await listLinks()
  
  const csvHeader = 'original_url,shorter_url,access_count,created_at\n'
  const csvRows = links.map(link => 
    `${link.originalUrl},${link.shorterUrl},${link.accessCount},${link.createdAt.toISOString()}`
  ).join('\n')
  const csvContent = csvHeader + csvRows

  const filename = `links-${randomUUID()}.csv`

  // Upload to R2
  const upload = new Upload({
    client: r2,
    params: {
      Bucket: env.CLOUDFLARE_BUCKET,
      Key: filename,
      Body: csvContent,
      ContentType: 'text/csv',
    },
  })

  await upload.done()

  return {
    filename,
    url: `${env.CLOUDFLARE_URL}/${filename}`,
  }
}
