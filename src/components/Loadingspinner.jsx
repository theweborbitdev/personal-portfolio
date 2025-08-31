import React from 'react';

function Loadingspinner() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-primary">
      <svg
        className="animate-spin h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="#fff455"
          strokeWidth="4"
        ></circle>
        <path
          fill="#fff455"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>
  );
}

export default Loadingspinner;
