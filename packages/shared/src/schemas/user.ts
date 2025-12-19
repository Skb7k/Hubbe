import { z } from 'zod';

// Base profile schema matching your Supabase 'profiles' table
export const ProfileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email().nullable(), // nullable in DB
  full_name: z.string().nullable(), // nullable in DB
  role: z.string().default('candidate'), // default is 'candidate' in DB
  created_at: z.string().datetime().nullable(), // nullable, but has default in DB
});

// Schema for creating a profile (omits auto-generated fields)
export const CreateProfileSchema = ProfileSchema.omit({ 
  id: true, 
  created_at: true 
}).extend({
  // Make role optional since it has a default
  role: z.string().default('candidate').optional(),
});

// Schema for updating a profile (all fields optional)
export const UpdateProfileSchema = CreateProfileSchema.partial();

// TypeScript types inferred from schemas
export type Profile = z.infer<typeof ProfileSchema>;
export type CreateProfile = z.infer<typeof CreateProfileSchema>;
export type UpdateProfile = z.infer<typeof UpdateProfileSchema>;