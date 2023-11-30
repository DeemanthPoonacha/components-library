import React from "react";

export interface ControlPanelProps {
  handleReset: () => void;
  lockView: boolean;
  setLockView;
  isOrtho: boolean;
  setIsOrtho;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  handleReset,
  lockView,
  setLockView,
  isOrtho,
  setIsOrtho,
}) => {
  return (
    <div className="p-2 flex gap-2 items-center justify-between">
      <button
        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleReset}
      >
        reset
      </button>
      <div className="p-2 flex gap-2 items-center justify-end">
        <label htmlFor="lock" className="flex items-center">
          <input
            id="lock"
            type="checkbox"
            className="hidden"
            onChange={() => setLockView(!lockView)}
          />
          {lockView ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          )}

          <span className="font-medium ml-1">View</span>
        </label>
        <label htmlFor="switch" className="flex items-center relative w-36">
          <div className="relative w-10 h-6 rounded-full bg-gray-200 focus:outline-none" />
          <input
            id="switch"
            type="checkbox"
            className="absolute w-10 h-2 opacity-0"
            checked={isOrtho}
            onChange={() => setIsOrtho(!isOrtho)}
          />
          <span
            className={`absolute left-0 inline-block w-5 h-5 rounded-full transform transition-transform ease-in-out duration-300 ${
              isOrtho ? "bg-green-500 translate-x-full" : "bg-white"
            }`}
          />
          <span className="ml-1">{"Orthographic"}</span>
        </label>
      </div>
    </div>
  );
};
export default ControlPanel;
