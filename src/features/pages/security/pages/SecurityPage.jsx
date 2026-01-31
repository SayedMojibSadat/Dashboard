import React from "react";

export default function SecurityPage() {
  return (
    <div className="h-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white p-6 flex flex-col gap-6 justify-center">
      <h1 className="text-2xl font-bold">Security Settings</h1>

      <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-300 dark:border-gray-700 shadow-sm dark:shadow-none">
        <h2 className="text-lg font-semibold mb-3">Change Password</h2>
        <form className="space-y-3">
          <input type="password" placeholder="Current Password" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-gray-700 rounded px-3 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-500" />
          <input type="password" placeholder="New Password" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-gray-700 rounded px-3 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-500" />
          <input type="password" placeholder="Confirm New Password" className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-gray-700 rounded px-3 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-500" />
          <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm font-bold text-white">Update</button>
        </form>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-300 dark:border-gray-700 flex items-center justify-between shadow-sm dark:shadow-none">
        <div>
          <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
          <p className="text-neutral-500 dark:text-gray-400 text-sm">Add extra security to your account.</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm font-bold text-white">Enable</button>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-300 dark:border-gray-700 shadow-sm dark:shadow-none">
        <h2 className="text-lg font-semibold mb-3">Recent Logins</h2>
        <div className="text-sm text-neutral-600 dark:text-gray-300 space-y-1">
          <div className="flex justify-between"><span>Jan 30</span><span>Chrome (Windows)</span><span>Herat</span></div>
          <div className="flex justify-between"><span>Jan 28</span><span>Safari (iPhone)</span><span>Kabul</span></div>
        </div>
      </div>
    </div>
  );
}