import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() };
    setTasks([...tasks, taskWithId]);
    console.log(tasks);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className="flex min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900
      dark:text-gray-100 transition-colors duration-0"
      >
        <Sidebar />
        <div className="flex-1 p-4 flex flex-col">
          <Header isDark={isDarkMode} setDark={setIsDarkMode} />
          <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-600">
            <AddTaskForm addTask={addTask} />
            <TaskList
              allTasks={tasks}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
