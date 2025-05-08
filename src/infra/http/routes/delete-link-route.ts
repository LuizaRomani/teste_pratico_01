import { deleteLink } from '@/app/functions/delete-link'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function deleteLinkRoute(server: FastifyInstance) {
  server.delete(
    '/links/:id',
    {
      schema: {
        summary: 'Delete a link',
        tags: ['Links'],
        params: z.object({
          id: z.string().uuid(),
        }),
        response: {
          204: z.null(),
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

        await deleteLink({ id })

        return reply.status(204).send()
      } catch (error) {
        if (error instanceof Error && error.message === 'Link not found') {
          return reply.status(404).send({ message: error.message })
        }

        console.error(error)
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
}
