import { S3Client } from '@aws-sdk/client-s3'
import { env } from '../env'

export const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`, //bucket específico: links-teste-pratico-01
  credentials: {
    accessKeyId: env.CLOUDFLARE_Access_Key_ID,
    secretAccessKey: env.CLOUDFLARE_Secret_Access_Key,
  },
})
