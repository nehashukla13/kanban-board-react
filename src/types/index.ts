export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'peer-review' | 'done';
  createdAt: string;
}

export interface RootState {
  tasks: {
    items: Task[];
    searchQuery: string;
  };
}