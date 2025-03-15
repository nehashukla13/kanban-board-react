import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { Task } from '../types';
import { GripVertical, Trash2, Clock } from 'lucide-react';
import { deleteTask } from '../store/slices/taskSlice';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteTask(task.id));
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div
      ref={drag}
      className={`group bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 ${
        isDragging ? 'opacity-50 rotate-2 scale-105' : 'opacity-100'
      }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
            <h3 className="font-medium text-gray-900 truncate">
              {truncateText(task.title, 50)}
            </h3>
          </div>
          <button
            onClick={handleDelete}
            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {task.description}
        </p>
        <div className="mt-3 flex items-center text-xs text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          {new Date(task.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};