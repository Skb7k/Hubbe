import type { EmploymentType } from '@hubbe/shared';

export type DatePostedFilter = '24h' | '7d' | '30d' | 'all';

export interface JobFilters {
  employmentType: EmploymentType[];
  datePosted: DatePostedFilter;
  location: string;
  workFromHome: boolean | null; // null = not filtered, true = yes, false = no
  // Phase 2 filters (to be implemented later)
  salary: { min: number | null; max: number | null };
  company: string;
  distance: number | null; // km
  profession: string;
}

export const defaultFilters: JobFilters = {
  employmentType: [],
  datePosted: 'all',
  location: '',
  workFromHome: null,
  salary: { min: null, max: null },
  company: '',
  distance: null,
  profession: '',
};


