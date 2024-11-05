import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ isDark, setDark }) => {
  const toggleTheme = () => {
    setDark(!isDark);
  };
  return (
    <div>
      <header className="flex items-center justify-between mb-4 px-6 py-4 bg-white shadow-md rounded-lg dark:bg-gray-800 dark:text-white">
        <h1 className="text-xl font-semibold text-gray-800  dark:text-white">Task Scheduler</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span role="img" aria-label="search" className="text-lg">
              🔍
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span role="img" aria-label="profile" className="text-lg">
              👤
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 flex items-center justify-center
          bg-gray-200 dark:bg-gray-600 relative transition-colors duration-0"
          >
            {isDark ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-blue-500" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
