import { incrementAccessCount } from '@/app/functions/increment-access-count'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function clickLinkRoute(server: FastifyInstance) {
  server.post(
    '/links/:id/access',
    {
      schema: {
        summary: 'Increment link access count',
        tags: ['Links'],
        params: z.object({
          id: z.string().uuid(),
        }),
        response: {
          200: z.object({
            message: z.string(),
            data: z.object({
              accessCount: z.number(),
            }),
          }),
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
        const { id } = request.params as { id: string }

        const accessCount = await incrementAccessCount({ id })

        return reply.status(200).send({
          message: 'Access count incremented successfully',
          data: {
            accessCount,
          },
        })
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
