// server/src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

interface Task {
  id: number;
  title: string;
  descr?: string;
  date: string,
  isEdit: boolean;
}

let tasks: Task[] = [];

// Получить все задачи
app.get('/tasks', (req, res) => res.json(tasks));

// Добавить новую задачу
app.post('/tasks', (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    descr: req.body.descr,
    date: req.body.date,
    isEdit: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Редактировать задачу
app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Удалить задачу
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ success: true });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
