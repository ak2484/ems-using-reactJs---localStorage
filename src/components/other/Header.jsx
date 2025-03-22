import React from "react";

export default function Header({ data, changeUser }) {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        {/* (Win + .) for using the emoji */}
        Hello <br />{" "}
        <span className='text-3xl backdrop:font-semibold'>
          {data.firstname} 👋
          {/* Akash 👋 */}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-white px-5 py-2 rounded-md text-lg font-medium'
      >
        Logout
      </button>
    </div>
  );
}
