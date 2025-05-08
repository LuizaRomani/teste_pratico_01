import { getAccessCount } from '@/app/functions/get-access-count'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function countClicksRoute(server: FastifyInstance) {
  server.get(
    '/links/:id/access-count',
    {
      schema: {
        summary: 'Get link access count',
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

        const accessCount = await getAccessCount({ id })

        return reply.status(200).send({
          message: 'Access count retrieved successfully',
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
