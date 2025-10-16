import { createContext } from "react";
import { TaskContextType } from "../types/task";

const TaskContext = createContext<TaskContextType | null>(null)

export default TaskContext