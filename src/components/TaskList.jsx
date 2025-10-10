import TaskItem from "./TaskItem"

function TaskList({ taskList }) {
  return (
    <ul className="space-y-3 w-full max-w-md mx-auto mt-6">
      {taskList.map((taskItem, index) => (
        <TaskItem 
          key={taskItem.id}
          taskItem={taskItem}
          index={index}
        />
      ))}
    </ul>
  )
}

export default TaskList
