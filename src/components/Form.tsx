import { useRef } from "react";
import { TaskItemType } from "../types/task"

type FormProps = {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  descr: string,
  setDescr: React.Dispatch<React.SetStateAction<string>>,
  taskList: TaskItemType[],
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemType[]>>,
  date: string,
  setDate: React.Dispatch<React.SetStateAction<string>>
}
function Form ({title, setTitle, descr, setDescr, taskList, setTaskList, date, setDate}: FormProps): React.ReactElement {
  const inputRef: any = useRef(null)

  async function addTask(e: any) {
    e.preventDefault()

    if (!title) return;

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, descr, date })
    });

    const newTask = await res.json();
    setTaskList([...taskList, newTask]);
    setTitle('');
    setDescr('');
    setDate('')

    inputRef.current.focus()
  }

  return (
    <div className="flex flex-col items-center w-full">
      <form className="flex flex-col w-1/2">
        <input ref={inputRef} placeholder="Title" className="border outline-none p-2 mb-4" value={title} onChange={event => setTitle(event.target.value)} type="text" />
        <input placeholder="Task description" className="border outline-none p-2 mb-4" id="email" value={descr} onChange={event => setDescr(event.target.value)} type='text' />
        <input className="border outline-none p-2 mb-4" value={date} onChange={event => setDate(event.target.value)} type="date" />
        <button className="bg-red-600 rounded-none hover:bg-red-800 text-stone-50 border-none focus:outline-none" onClick={addTask}>Add to list</button>
      </form>
    </div>
  )
}

export default Form;