import { TbDashboardFilled } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from '../../../contexts/ThemeContext';

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="h-1/9 w-full flex bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-900">
      <div className="h-full w-1/4 p-2">
        <div className="h-full w-full hover:bg-neutral-300 dark:hover:bg-[#73737340] transition-all duration-300 cursor-pointer p-2 rounded-xl flex flex-row items-center justify-start">
          <TbDashboardFilled className="text-blue-500 text-5xl" />
          <span className="ml-2 font-bold text-xl text-stone-600 dark:text-stone-400">Dashboard</span>
        </div>
      </div>
      <div className="h-full w-3/4 flex items-center justify-between px-6">
        <h3 className="text-2xl text-neutral-800 dark:text-white">Dashboard</h3>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-1 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors" title={isDark ? 'Light mode' : 'Dark mode'}>
            {isDark ? <IoSunny className="text-yellow-400 text-2xl" /> : <IoMoon className="text-neutral-600 text-2xl" />}
          </button>
          <IoMdNotificationsOutline className="text-neutral-700 dark:text-white text-2xl cursor-pointer" />
          <FaUserCircle className="text-neutral-700 dark:text-white text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;