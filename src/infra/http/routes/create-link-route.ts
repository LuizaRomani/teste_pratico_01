import { createLink } from '@/app/functions/create-link'
import type { FastifyInstance } from 'fastify'
import { PostgresError } from 'postgres'
import { z } from 'zod'

export function createLinkRout(server: FastifyInstance) {
  const createLinkSchema = z.object({
    originalUrl: z.string().url('Original URL must be a valid URL'),
    shorterUrl: z.string().min(1, 'Shorter URL cannot be empty'),
    //.regex(/^[a-zA-Z0-9-_]+$/, 'Shorter URL can only contain letters, numbers, hyphens and underscores')
    //.max(20, 'Shorter URL must be at most 20 characters'),
  })

  server.post('/links', async (request, reply) => {
    try {
      const { originalUrl, shorterUrl } = createLinkSchema.parse(request.body)

      const link = await createLink({
        originalUrl,
        shorterUrl,
      })

      return reply.status(201).send({
        message: 'Link created successfully',
        data: link,
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({
          message: 'Validation error',
          issues: error.errors,
        })
      }

      if (error instanceof Error && error.message === 'Short URL already exists') {
        return reply.status(409).send({
          message: error.message,
        })
      }

      console.error(error)
      return reply.status(500).send({ message: 'Internal server error' })
    }
  })
}
