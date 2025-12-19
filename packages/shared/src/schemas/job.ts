import { z } from 'zod';

// Employment type enum
export const EmploymentTypeSchema = z.enum(['fulltime', 'parttime', 'contract', 'internship']);

// Job schema
export const JobSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  salary: z.string().nullable(), // e.g., "€3.000 - €3.500 per maand"
  description: z.string(),
  employmentType: EmploymentTypeSchema,
  tags: z.array(z.string()), // e.g., ["Fulltime", "Flexibele werkuren", "Mogelijkheid tot promotie"]
  requirements: z.array(z.string()), // Job requirements
  benefits: z.array(z.string()), // What we offer
  postedDate: z.string().datetime(),
  urgent: z.boolean().default(false),
  contractDuration: z.string().nullable(), // e.g., "12 months"
});

// Schema for creating a job (omits auto-generated fields)
export const CreateJobSchema = JobSchema.omit({
  id: true,
  postedDate: true,
});

// Schema for updating a job (all fields optional)
export const UpdateJobSchema = CreateJobSchema.partial();

// TypeScript types inferred from schemas
export type Job = z.infer<typeof JobSchema>;
export type EmploymentType = z.infer<typeof EmploymentTypeSchema>;
export type CreateJob = z.infer<typeof CreateJobSchema>;
export type UpdateJob = z.infer<typeof UpdateJobSchema>;


