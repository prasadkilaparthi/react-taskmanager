import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import Signup from "./components/Signup";
import { addTask, deleteTask, getTasks, updateTask } from "./FireStoreService";
import { signup,login ,logout } from "./FireStoreService";
import Login from "./components/Login";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user,setUser] = useState(null);
  const [isSignup,setIsSignup] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    await addTask(newTask);
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
  };

  const handleSignup = async (email, password) => {
    try {
      await signup(email,password);
      alert("Account created successfully !!");
    }
    catch(error) {
      console.error("Error in creationg account",error);
    }
  };
  if(!user){
    isSignup?
    (<Signup onSignup ={handleSignup}/>):
    null
  }
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
            <AddTaskForm addTask={handleAddTask} />
            <TaskList
              allTasks={tasks}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          </main>
        </div>
      </div>
      
    </div>
  );
}

export default App;
