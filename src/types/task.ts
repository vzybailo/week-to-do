export interface TaskItemType {
  id: number,
  title: string,
  descr: string,
  date: string,
  isEdit: boolean
}

export interface TaskContextType {
  toggleMode: (id: number) => void;
  editTask: (id: number, newTitle: string, newDescr: string) => Promise<void>;
  delItem: (id: number) => Promise<void>;
}