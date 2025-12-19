import 'dotenv/config';
import Fastify from 'fastify';
import { healthRoutes } from './routes/health';
import { testRoutes } from './routes/test';

const fastify = Fastify({ logger: true });

// Start server
const start = async () => {
  try {
    // Register routes
    await fastify.register(healthRoutes);
    await fastify.register(testRoutes);

    const port = Number(process.env.PORT) || 8000;
    await fastify.listen({ port, host: '0.0.0.0' });
    fastify.log.info(`Server listening on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

