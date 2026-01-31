import React, { useState } from "react";

export default function ComponentCard({ title, Component, code }) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-gray-700 rounded-xl p-4 shadow-sm dark:shadow-none transition duration-200 w-full max-w-sm mx-auto flex flex-col justify-between h-[360px]">
      <h3 className="text-neutral-900 dark:text-white text-lg font-semibold mb-3 text-center">{title}</h3>

      <div className="flex justify-center space-x-4 mb-3 border-b border-neutral-300 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-2 text-sm ${
            activeTab == "preview"
              ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
              : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`pb-2 text-sm ${
            activeTab == "code"
              ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
              : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
          }`}
        >
          Code
        </button>
      </div>

      <div className="flex-grow overflow-auto custom-scrollbar">
        {activeTab == "preview" ? (
          <div className="flex justify-center items-center h-full">
            <Component />
          </div>
        ) : (
          <pre className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-gray-700 text-neutral-800 dark:text-neutral-200 p-3 rounded-lg overflow-x-auto text-sm w-full max-w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}