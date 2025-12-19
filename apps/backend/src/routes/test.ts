import { FastifyInstance } from 'fastify';
import { getSupabase } from '../lib/supabase';

export async function testRoutes(fastify: FastifyInstance) {
  // Test Supabase connection
  fastify.get('/api/test-db', async (request, reply) => {
    try {
      const supabase = getSupabase();
      
      // Try to query the profiles table to test connection
      const { data, error, count } = await supabase
        .from('profiles')
        .select('*', { count: 'exact' })
        .limit(1);
      
      if (error) {
        return reply.status(500).send({ 
          connected: false, 
          error: error.message,
          details: 'Could not query database'
        });
      }
      
      return {
        connected: true,
        message: 'Successfully connected to Supabase!',
        profilesCount: count || 0,
        sampleData: data && data.length > 0 ? data[0] : null
      };
    } catch (error) {
      return reply.status(500).send({ 
        connected: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Failed to initialize Supabase client. Check your .env file.'
      });
    }
  });
}



