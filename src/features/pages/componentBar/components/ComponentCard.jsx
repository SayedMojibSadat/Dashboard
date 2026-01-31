import React, { useState } from "react";

export default function ComponentCard({ title, Component, code }) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="bg-white dark:bg-gray-900 border border-neutral-200 dark:border-gray-800 mt-27 rounded-xl p-4 shadow-md transition duration-200 w-full max-w-sm mx-auto flex flex-col justify-between h-[360px]">
      <h3 className="text-neutral-900 dark:text-white text-lg font-semibold mb-3 text-center">{title}</h3>

      <div className="flex justify-center space-x-4 mb-3 border-b border-neutral-300 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-2 text-sm ${
            activeTab == "preview"
              ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400"
              : "text-neutral-500 dark:text-gray-400 hover:text-neutral-700 dark:hover:text-gray-300"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`pb-2 text-sm ${
            activeTab == "code"
              ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400"
              : "text-neutral-500 dark:text-gray-400 hover:text-neutral-700 dark:hover:text-gray-300"
          }`}
        >
          Code
        </button>
      </div>

      <div className="flex-grow overflow-auto">
        {activeTab == "preview" ? (
          <div className="flex justify-center items-center h-full">
            <Component />
          </div>
        ) : (
          <pre className="bg-neutral-100 dark:bg-gray-800 text-green-700 dark:text-green-300 p-3 rounded overflow-x-auto text-sm w-full max-w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}