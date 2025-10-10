import { useState, useContext } from "react"
import TaskContext from "../context/TaskContext"

function TaskItem ({taskItem, index }) {
  const {toggleMode, editTask, delItem} = useContext(TaskContext)
  const [newTitle, setNewTitle] = useState(taskItem.title)
  const [newDescr, setNewDescr] = useState(taskItem.descr)

  return (
    <li
      key={taskItem.id}
      className="flex flex-col items-start relative bg-white shadow-md p-4 hover:shadow-lg transition-shadow group"
    >
      <div>
        <span className="font-semibold text-gray-800">{index + 1}.</span>
        {taskItem.isEdit ? 
          <input value={newTitle} type="text" onChange={event => setNewTitle(event.target.value)}/> : 
          <span className="font-semibold text-gray-800">{taskItem.title}</span>
        }
      </div>
      <div className="text-gray-600 text-left text-sm">
        {taskItem.isEdit ? <textarea value={newDescr} onChange={event => setNewDescr(event.target.value)} /> : taskItem.descr}
      </div>
      <div className="text-gray-600 text-left text-sm">
        {taskItem.date}
      </div>
      <button
        onClick={() => delItem(taskItem.id)}
        className="absolute top-2 right-2 hidden group-hover:block appearance-none bg-transparent border-none p-0 text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
      >
        ✕
      </button>
      <button
        onClick={() => toggleMode(index)}
        className="absolute top-6 right-2 hidden group-hover:block appearance-none bg-transparent border-none p-0 font-medium text-sm focus:outline-none"
      >
        {taskItem.isEdit ? <span onClick={() => editTask(taskItem.id, newTitle, newDescr)}>&#10004;</span> : '\u270F\uFE0F'}
      </button>
    </li>
  )
}

export default TaskItem