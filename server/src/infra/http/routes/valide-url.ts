import { getOriginalUrl } from '@/app/functions/get-original-link'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

export function getValidateUrlRoute(server: FastifyInstance) {
    server.get(
        '/validate/:shorterUrl',
        {
          schema: {
            summary: 'Validate short URL',
            tags: ['Links'],
            params: z.object({
              shorterUrl: z.string().min(1),
            }),
            response: {
              200: z.object({
                valid: z.literal(true),
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
            const { shorterUrl } = request.params as { shorterUrl: string };
            const originalUrl = await getOriginalUrl({ shorterUrl });
      
            if (originalUrl) {
              return reply.send({ valid: true });
            }
      
            return reply.status(404).send({ message: 'Link not found' });
          } catch (error) {
            if (error instanceof Error && error.message === 'Link not found') {
              return reply.status(404).send({ message: error.message });
            }
      
            console.error(error);
            return reply.status(500).send({ message: 'Internal server error' });
          }
        }
      );
      
}
