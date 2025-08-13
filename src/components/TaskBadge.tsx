import { TaskPriority } from '@/types'
import { PRIORITY_CLASSES } from '../ui/BadgeColors'

export default function TaskBadge({ priority }: { priority?: TaskPriority }) {
    const p = priority ?? 'low'

    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${PRIORITY_CLASSES[p]}`}>
        {p}
      </span>
    )
  }