# Kanban Board React Application

A modern, responsive Kanban board built with **React, Redux, and React DnD**. It allows users to **drag and drop tasks**, perform **real-time search**, and **persist tasks locally**.

🔗 **Live Demo:** [Kanban Board (Netlify)](https://67cddf105e0d2d725fc653c9--dapper-lamington-080b26.netlify.app/)  



![Kanban Board Screenshot](images/Screenshot-2025-03-15-153531.png)

## Features

- 📱 Responsive design that works on desktop, tablet, and mobile
- 🔄 Drag-and-drop task management across columns
- 🔍 Real-time search functionality
- 💾 Automatic state persistence using local storage
- ✨ Modern UI with smooth animations
- 🎯 Four-stage workflow (To Do, In Progress, Peer Review, Done)

## Tech Stack

- **React** - UI framework
- **Redux Toolkit** - State management
- **React DnD** - Drag and drop functionality
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kanban-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Usage

### Creating Tasks
- Click the "+" button in the bottom right corner
- Fill in the task title (required) and description
- Click "Create Task" to add it to the "To Do" column

### Managing Tasks
- Drag and drop tasks between columns
- Search tasks using the search bar
- Delete tasks using the trash icon (visible on hover)

### Task States
1. **To Do** - New tasks start here
2. **In Progress** - Tasks currently being worked on
3. **Peer Review** - Tasks ready for review
4. **Done** - Completed tasks

## Project Structure

```
src/
├── components/          # React components
├── store/              # Redux store and slices
│   └── slices/         # Redux Toolkit slices
├── types/              # TypeScript type definitions
├── App.tsx             # Root component
└── main.tsx           # Application entry point
```

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Future Enhancements

### Backend Integration
- Node.js/Express backend for persistent storage
- RESTful API for task management
- WebSocket integration for real-time updates

### Authentication
- User authentication with JWT
- Role-based access control
- Personal task boards for each user

### AI Integration
- Task categorization using AI
- Smart task prioritization
- Automated task suggestions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React DnD](https://react-dnd.github.io/react-dnd/) for the drag-and-drop functionality
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
