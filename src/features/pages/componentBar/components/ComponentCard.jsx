import React, { useState } from "react";

export default function ComponentCard({ title, Component, code }) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="bg-gray-900 border mt-27 border-gray-800 rounded-xl p-4 shadow-md transition duration-200 w-full max-w-sm mx-auto flex flex-col justify-between h-[360px]">
      {/* Title */}
      <h3 className="text-white text-lg font-semibold mb-3 text-center">{title}</h3>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-3 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-2 text-sm ${
            activeTab === "preview"
              ? "text-blue-400 border-b-2 border-blue-400"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`pb-2 text-sm ${
            activeTab === "code"
              ? "text-blue-400 border-b-2 border-blue-400"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-auto">
        {activeTab === "preview" ? (
          <div className="flex justify-center items-center h-full">
            <Component />
          </div>
        ) : (
          <pre className="bg-gray-800 text-green-300 p-3 rounded overflow-x-auto text-sm w-full max-w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}