import { WEEK_DAYS, WeekDay } from './types/Task'
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Week-to-Do</h1>

        {/* Тут позже появится форма добавления задач */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {WEEK_DAYS.map((day: WeekDay) => (
              <section key={day} className="rounded-2xl border p-3">
                <header className="mb-2">
                  <h2 className="font-semibold capitalize">{day}</h2>
                </header>
                <div className="text-sm opacity-60">No tasks</div>
              </section>
            ))}
          </div>
      </div>
    </>
  )
}

export default App
