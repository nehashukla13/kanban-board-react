import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { Task } from '../types';
import { moveTask } from '../store/slices/taskSlice';
import { TaskCard } from './TaskCard';
import { ListTodo, Timer, Users, CheckCircle } from 'lucide-react';

interface TaskColumnProps {
  title: string;
  status: Task['status'];
  tasks: Task[];
}

const statusIcons = {
  'todo': ListTodo,
  'in-progress': Timer,
  'peer-review': Users,
  'done': CheckCircle
};

export const TaskColumn: React.FC<TaskColumnProps> = ({ title, status, tasks }) => {
  const dispatch = useDispatch();
  const Icon = statusIcons[status];

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: Task) => {
      if (item.status !== status) {
        dispatch(moveTask({ id: item.id, status }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const columnTasks = tasks.filter(task => task.status === status);

  return (
    <div
      ref={drop}
      className={`w-full lg:w-80 bg-gray-50 rounded-lg transition-all duration-200 ${
        isOver ? 'ring-2 ring-indigo-400 ring-opacity-50 transform scale-[1.02]' : ''
      }`}
    >
      <div className="p-4 border-b border-gray-200 bg-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5 text-gray-500" />
          <h2 className="font-semibold text-gray-900">{title}</h2>
          <span className="ml-auto bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
            {columnTasks.length}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-3 min-h-[200px]">
        {columnTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
        {columnTasks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-sm text-gray-500">Drop tasks here</p>
          </div>
        )}
      </div>
    </div>
  );
};