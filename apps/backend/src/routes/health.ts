import { FastifyInstance } from 'fastify';

export async function healthRoutes(fastify: FastifyInstance) {
  // Health check route
  fastify.get('/', async (request, reply) => {
    return { message: 'Hello from Fastify!' };
  });
}


