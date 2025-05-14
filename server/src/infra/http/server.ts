import fastifyCors from '@fastify/cors'
import { fastify } from 'fastify'
import { hasZodFastifySchemaValidationErrors, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { clickLinkRoute } from './routes/click-link-route'
import { countClicksRoute } from './routes/count-clicks-route'
import { createLinkRout } from './routes/create-link-route'
import { deleteLinkRoute } from './routes/delete-link-route'
import { getOriginalUrlRoute } from './routes/get-original-link-route'
import { listLinksRoute } from './routes/list-links-route'

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, request, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.validation,
    })
  }

  console.error(error)

  return reply.status(500).send({ message: 'Internal server error.' })
})

server.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE'],
})

server.register(createLinkRout)
server.register(listLinksRoute)
server.register(deleteLinkRoute)
server.register(countClicksRoute)
server.register(clickLinkRoute)
server.register(getOriginalUrlRoute)

server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running!')
})

export { server }
