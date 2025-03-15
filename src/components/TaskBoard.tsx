import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { TaskColumn } from './TaskColumn';
import { SearchBar } from './SearchBar';
import { CreateTaskModal } from './CreateTaskModal';
import { Plus } from 'lucide-react';

export const TaskBoard: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.items);
  const searchQuery = useSelector((state: RootState) => state.tasks.searchQuery);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg font-medium text-gray-900">Your Tasks</h2>
        <SearchBar />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:overflow-x-auto pb-4">
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={filteredTasks}
        />
        <TaskColumn
          title="In Progress"
          status="in-progress"
          tasks={filteredTasks}
        />
        <TaskColumn
          title="Peer Review"
          status="peer-review"
          tasks={filteredTasks}
        />
        <TaskColumn
          title="Done"
          status="done"
          tasks={filteredTasks}
        />
      </div>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-label="Create new task"
      >
        <Plus className="w-6 h-6" />
      </button>

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};