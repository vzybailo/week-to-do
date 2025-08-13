export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type TaskPriority = 'low' | 'medium' | 'high';

export type Status = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  day: WeekDay;
  done: boolean;
  status: Status
  priority?: TaskPriority;
}

export const WEEK_DAYS: WeekDay[] = [
  'monday','tuesday','wednesday','thursday','friday','saturday','sunday'
];
