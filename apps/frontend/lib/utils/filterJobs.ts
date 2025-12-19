import type { Job } from '@hubbe/shared';
import type { JobFilters, DatePostedFilter } from '../types/filters';

export function filterByEmploymentType(jobs: Job[], employmentTypes: string[]): Job[] {
  if (employmentTypes.length === 0) return jobs;
  return jobs.filter((job) => employmentTypes.includes(job.employmentType));
}

export function filterByDatePosted(jobs: Job[], dateFilter: DatePostedFilter): Job[] {
  if (dateFilter === 'all') return jobs;

  const now = new Date();
  const filterDate = new Date();

  switch (dateFilter) {
    case '24h':
      filterDate.setHours(now.getHours() - 24);
      break;
    case '7d':
      filterDate.setDate(now.getDate() - 7);
      break;
    case '30d':
      filterDate.setDate(now.getDate() - 30);
      break;
    default:
      return jobs;
  }

  return jobs.filter((job) => {
    const postedDate = new Date(job.postedDate);
    return postedDate >= filterDate;
  });
}

export function filterByLocation(jobs: Job[], locationQuery: string): Job[] {
  if (!locationQuery.trim()) return jobs;

  const query = locationQuery.toLowerCase().trim();
  return jobs.filter((job) => job.location.toLowerCase().includes(query));
}

export function filterByWorkFromHome(jobs: Job[], workFromHome: boolean | null): Job[] {
  if (workFromHome === null) return jobs;

  const remoteKeywords = ['remote', 'work from home', 'thuiswerken', 'hybrid', 'hybride', 'work from home', 'thuiswerk'];

  return jobs.filter((job) => {
    const hasRemoteTag = job.tags.some((tag) =>
      remoteKeywords.some((keyword) => tag.toLowerCase().includes(keyword))
    );
    const hasRemoteInLocation = remoteKeywords.some((keyword) =>
      job.location.toLowerCase().includes(keyword)
    );

    if (workFromHome) {
      return hasRemoteTag || hasRemoteInLocation;
    } else {
      return !hasRemoteTag && !hasRemoteInLocation;
    }
  });
}

export function applyFilters(jobs: Job[], filters: JobFilters): Job[] {
  let filtered = [...jobs];

  // Apply filters in order
  filtered = filterByEmploymentType(filtered, filters.employmentType);
  filtered = filterByDatePosted(filtered, filters.datePosted);
  filtered = filterByLocation(filtered, filters.location);
  filtered = filterByWorkFromHome(filtered, filters.workFromHome);

  // Phase 2 filters (commented out for now)
  // filtered = filterBySalary(filtered, filters.salary);
  // filtered = filterByCompany(filtered, filters.company);
  // filtered = filterByDistance(filtered, filters.distance);
  // filtered = filterByProfession(filtered, filters.profession);

  return filtered;
}


