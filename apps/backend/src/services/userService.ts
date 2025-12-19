import { getSupabase } from '../lib/supabase';
import { CreateProfileSchema, ProfileSchema, type Profile, type CreateProfile } from '@hubbe/shared';

export class ProfileService {
  /**
   * Get all profiles
   */
  static async getAllProfiles(): Promise<Profile[]> {
    const { data, error } = await getSupabase()
      .from('profiles')  // Changed from 'users' to 'profiles'
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch profiles: ${error.message}`);
    }

    // Validate response with Zod
    return data.map((profile: unknown) => ProfileSchema.parse(profile));
  }

  /**
   * Get profile by ID
   */
  static async getProfileById(id: string): Promise<Profile> {
    const { data, error } = await getSupabase()
      .from('profiles')  // Changed from 'users' to 'profiles'
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Failed to fetch profile: ${error.message}`);
    }

    return ProfileSchema.parse(data);
  }

  /**
   * Create a new profile
   */
  static async createProfile(profileData: CreateProfile): Promise<Profile> {
    // Validate input with Zod
    const validatedData = CreateProfileSchema.parse(profileData);

    const { data, error } = await getSupabase()
      .from('profiles')  // Changed from 'users' to 'profiles'
      .insert(validatedData)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create profile: ${error.message}`);
    }

    return ProfileSchema.parse(data);
  }

  /**
   * Update profile
   */
  static async updateProfile(id: string, profileData: Partial<CreateProfile>): Promise<Profile> {
    const { data, error } = await getSupabase()
      .from('profiles')  // Changed from 'users' to 'profiles'
      .update(profileData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update profile: ${error.message}`);
    }

    return ProfileSchema.parse(data);
  }

  /**
   * Delete profile
   */
  static async deleteProfile(id: string): Promise<void> {
    const { error } = await getSupabase()
      .from('profiles')  // Changed from 'users' to 'profiles'
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to delete profile: ${error.message}`);
    }
  }
}