import React from "react";

export default function TasklistNumber({ data }) {
  return (
    <div className='flex mt-10 justify-between screen gap-5'>
      <div className='w-[45%]  bg-blue-700 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>
          {data.taskCounts.newTask}
          {/* 0 */}
        </h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='w-[45%] bg-green-600 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>
          {data.taskCounts.completedTask}
          {/* 0 */}
        </h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] bg-yellow-500 px-9 py-6 rounded-xl text-gray-800'>
        <h2 className='text-3xl font-semibold'>
          {data.taskCounts.active}
          {/* 2 */}
        </h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='w-[45%] bg-red-700 px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>
          {data.taskCounts.failedTask}
          {/* 4 */}
        </h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
}
