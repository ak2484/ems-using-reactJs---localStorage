import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTask() {
  const authData = useContext(AuthContext);
  return (
    <div
      id='allTask'
      className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto'
    >
      <div className='bg-red-600 rounded mb-2 py-2 px-4 flex justify-between'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
      </div>
      {authData.employees.map((elem, idx) => {
        return (
          <div
            key={idx}
            className='border-2 border-emerald-500 rounded mb-2 py-2 px-4 flex justify-between'
          >
            <h2 className='w-1/5 text-lg font-medium'>{elem.firstname}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-400'>
              {elem.taskCounts.newTask}
            </h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-400'>
              {elem.taskCounts.active}
            </h5>
            <h5 className='w-1/5 text-lg font-medium text-green-400'>
              {elem.taskCounts.completedTask}
            </h5>
            <h5 className='w-1/5 text-lg font-medium text-red-400'>
              {elem.taskCounts.failedTask}
            </h5>
          </div>
        );
      })}
    </div>
  );
}
