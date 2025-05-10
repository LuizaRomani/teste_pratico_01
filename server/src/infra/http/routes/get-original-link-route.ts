import { getOriginalUrl } from '@/app/functions/get-original-link'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function getOriginalUrlRoute(server: FastifyInstance) {
  server.get(
    '/:shorterUrl',
    {
      schema: {
        summary: 'Get original URL and redirect',
        tags: ['Links'],
        params: z.object({
          shorterUrl: z.string().min(1, 'Shorter URL cannot be empty'),
        }),
        response: {
          302: z.null().describe('Redirect to original URL'),
          404: z.object({
            message: z.string(),
          }),
          500: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      try {
        const { shorterUrl } = request.params as { shorterUrl: string }

        const originalUrl = await getOriginalUrl({ shorterUrl })

        return reply.redirect(originalUrl)
      } catch (error) {
        if (error instanceof Error && error.message === 'Link not found') {
          return reply.status(404).send({
            message: error.message,
          })
        }

        console.error(error)
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
}
