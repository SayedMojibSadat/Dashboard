import React, { useState } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";

export default function PreferencesPage() {
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white flex justify-center px-6 py-10">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-3xl font-bold">Preferences</h1>

        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow hover:border-neutral-400 dark:hover:border-neutral-600 transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Dark Mode</h2>
              <p className="text-neutral-500 dark:text-gray-400 text-sm">
                Toggle between light and dark themes
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                isDark ? "bg-indigo-600" : "bg-neutral-400"
              }`}
            >
              <span
                className={`h-6 w-6 bg-white rounded-full transition transform ${
                  isDark ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow hover:border-neutral-400 dark:hover:border-neutral-600 transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Notifications</h2>
              <p className="text-gray-400 text-sm">
                Control system alerts and updates
              </p>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                notifications ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              <span
                className={`h-6 w-6 bg-white rounded-full transition transform ${
                  notifications ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow hover:border-neutral-400 dark:hover:border-neutral-600 transition">
          <h2 className="font-semibold mb-2">Language</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="en">English</option>
            <option value="fa">Dari / Persian</option>
            <option value="ps">Pashto</option>
          </select>
        </div>
      </div>
    </div>
  );
}
