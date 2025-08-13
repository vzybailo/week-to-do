import { TaskPriority } from '@/types/index'

export const PRIORITY_CLASSES: Record<TaskPriority, string> = {
  low: 'bg-emerald-100 text-emerald-800',
  medium: 'bg-amber-100 text-amber-800',
  high: 'bg-rose-100 text-rose-800',
}