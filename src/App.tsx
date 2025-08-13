import{ useState } from 'react'
import { WEEK_DAYS, WeekDay } from './types'
import { Task } from './types'
import './App.css'
import TaskBadge from './components/Taskbadge'

function App() {
  const initialTasks: Task[] = [
    {
      id: '1',
      title: 'Sample Task',
      day: 'monday',
      done: false,
      status: 'todo',
      priority: 'medium'
    },
    {
      id: '2',
      title: 'Gym Workout',
      day: 'friday',
      done: false,
      status: 'todo',
      priority: 'low'
    },
    {
      id: '3',
      title: 'Shopping',
      day: 'friday',
      done: false,
      status: 'todo',
      priority: 'high'
    }
  ]

  const [tasks] = useState<Task[]>(initialTasks)

  return (
    <>
      <div className="min-h-screen p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Week-to-Do</h1>

        {/* Тут позже появится форма добавления задач */}
        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-6">
            {WEEK_DAYS.map((day: WeekDay) => (
              <li key={day} className="rounded-xl border p-3">
                <header className="mb-2">
                  <h2 className="font-semibold capitalize">{day}</h2>
                </header>
                <div className="text-sm opacity-60">No tasks</div>
              </li>
            ))}
        </ul>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="border p-3 rounded-xl mb-2 text-left">
              <div className="flex flex-col mb-2">
                  <h3 className="font-semibold">
                    <span className="mr-2 opacity-60 text-sm">#{task.id}</span>
                    {task.title}
                  </h3>
                  <p className='text-sm opacity-60'>{task.done ? 'Completed' : 'Pending'}</p>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <p className="text-sm">{task.day}</p>
                <p className="text-sm">{task.status}</p>
                <TaskBadge priority={task.priority}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
