import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
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
    <>
      <div className="flex min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header />
          <AddTaskForm addTask={addTask} />
          <TaskList allTasks={tasks} onDelete = {deleteTask} onUpdate = {updateTask} />
        </div>
      </div>
    </>
  );
}

export default App;
