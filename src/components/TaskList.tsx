import TaskItem from "./TaskItem"
import { TaskItemType } from "../types/task"

type TaskListProps = {
  taskList: TaskItemType[]
}

function TaskList({ taskList }: TaskListProps): React.ReactElement {
  if(taskList.length === 0) {
    return <p className="mt-4 text-gray-500 text-center">No tasks yet</p>

  }
  return (
    <ul className="space-y-3 w-full max-w-md mx-auto mt-6">
      {taskList.map((task, index) => (
        <TaskItem 
          key={task.id}
          taskItem={task}
          index={index}
        />
      ))}
    </ul>
  )
}

export default TaskList
