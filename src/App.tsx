import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { store } from './store';
import { TaskBoard } from './components/TaskBoard';
import { Layout } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-3">
                <Layout className="w-6 h-6 text-indigo-600" />
                <h1 className="text-xl font-semibold text-gray-900">Kanban Board</h1>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <TaskBoard />
          </main>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;