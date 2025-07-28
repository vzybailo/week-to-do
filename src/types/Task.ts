export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;           // уникальный id (можно uuid)
  title: string;        // название задачи
  day: WeekDay;         // день недели
  done: boolean;        // выполнена или нет
  priority?: TaskPriority; // опционально
}
