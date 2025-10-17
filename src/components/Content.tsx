import Form from "./Form"
import TaskList from "./TaskList"
import { useState, useEffect } from "react"
import TaskContext from "../context/TaskContext"
import { TaskItemType } from "../types/task"
import ToTop from "./ToTop"

function Content() {
  const currentDate = new Date().toISOString().split('T')[0]

  const [title, setTitle] = useState<string>('')
  const [descr, setDescr] = useState<string>('')
  const [date, setDate] = useState<string>(currentDate)
  const [taskList, setTaskList] = useState<TaskItemType[]>([])

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      setTaskList(data);
    }
    fetchTasks();
  }, []);

  function toggleMode(id: number): void {
    setTaskList(taskList.map((taskItem, index) => {
      if(id === index) {
        return {...taskItem, isEdit: !taskItem.isEdit}
      }
      return taskItem
    }))
  }

  async function editTask(id: number, newTitle: string, newDescr: string): Promise<void> {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, descr: newDescr })
    });

    const updatedTask = await res.json();
    setTaskList(taskList.map(task => task.id === id ? updatedTask : task));
  }

  async function delItem (id: number): Promise<void> {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTaskList(taskList.filter(task => task.id !== id));
  }

  return (
    <>
      <Form 
        title={title} 
        setTitle={setTitle} 
        descr={descr} 
        setDescr={setDescr} 
        date={date}
        setDate={setDate}
        taskList={taskList} 
        setTaskList={setTaskList}
      />
      <TaskContext.Provider value={{toggleMode, editTask, delItem}}>
        <TaskList taskList={taskList} />
      </TaskContext.Provider>
      <ToTop />
    </>
  )
}

export default Content;