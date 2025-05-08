import { listLinks } from '@/app/functions/list-links'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function listLinksRoute(server: FastifyInstance) {
  server.get(
    '/links',
    {
      schema: {
        summary: 'List all links',
        tag: ['Links'],
        response: {
          200: z
            .object({
              message: z.string(),
              data: z.array(
                z.object({
                  id: z.string(),
                  originalUrl: z.string(),
                  shorterUrl: z.string(),
                  createdAt: z.date(),
                })
              ),
            })
            .describe('List of links'),
          500: z
            .object({
              message: z.string(),
            })
            .describe('Internal server error'),
        },
      },
    },
    async (request, reply) => {
      try {
        const links = await listLinks()
        return reply.status(200).send({
          message: 'Links retrieved successfully',
          data: links,
        })
      } catch (error) {
        console.error(error)
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
}
