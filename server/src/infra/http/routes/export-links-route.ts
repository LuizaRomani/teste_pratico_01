import { uploadLinksToStorage } from '@/infra/storage/upload-links-to-storage'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function exportLinksRoute(server: FastifyInstance) {
  server.post(
    '/links/export',
    {
      schema: {
        summary: 'Export links to CSV',
        tags: ['Links'],
        response: {
          200: z.object({
            message: z.string(),
            data: z.object({
              filename: z.string(),
              url: z.string().url(),
            }),
          }),
          500: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      try {
        const result = await uploadLinksToStorage()

        return reply.status(200).send({
          message: 'Links exported successfully',
          data: result,
        })
      } catch (error) {
        console.error(error)
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
} 