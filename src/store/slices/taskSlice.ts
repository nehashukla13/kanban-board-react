import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types';

interface TaskState {
  items: Task[];
  searchQuery: string;
}

const loadTasksFromStorage = (): Task[] => {
  const stored = localStorage.getItem('tasks');
  return stored ? JSON.parse(stored) : [];
};

const initialState: TaskState = {
  items: loadTasksFromStorage(),
  searchQuery: '',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.items.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem('tasks', JSON.stringify(state.items));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    moveTask: (state, action: PayloadAction<{ id: string; status: Task['status'] }>) => {
      const task = state.items.find(t => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
        localStorage.setItem('tasks', JSON.stringify(state.items));
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, moveTask, setSearchQuery } = taskSlice.actions;
export default taskSlice.reducer;