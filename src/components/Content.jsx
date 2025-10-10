import Form from "./Form"
import TaskList from "./TaskList"
import { useState, useEffect } from "react"
import TaskContext from "../context/TaskContext"

function Content() {
  const currentDate = new Date().toISOString().split('T')[0]

  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [date, setDate] = useState(currentDate)

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      setTaskList(data);
    }
    fetchTasks();
  }, []);

  function toggleMode(id) {
    setTaskList(taskList.map((taskItem, index) => {
      if(id === index) {
        return {...taskItem, isEdit: !taskItem.isEdit}
      }
      return taskItem
    }))
  }

  async function editTask(id, newTitle, newDescr) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, descr: newDescr })
    });

    const updatedTask = await res.json();
    setTaskList(taskList.map(task => task.id === id ? updatedTask : task));
  }

  async function delItem (id) {
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
        isEdit={isEdit}
      />
      <TaskContext.Provider value={{toggleMode, editTask, delItem}}>
        <TaskList taskList={taskList} />
      </TaskContext.Provider>
    </>
  )
}

export default Content;