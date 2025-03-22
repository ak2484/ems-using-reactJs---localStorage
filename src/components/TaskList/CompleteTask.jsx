import React from "react";

function CompleteTask({ data }) {
  return (
    <div className='h-full w-[300px] p-5 bg-yellow-500 rounded-xl flex-shrink-0'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
          {data.category}
        </h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className='mt-4'>
        <button className='bg-green-600 hover:bg-green-700 text-sm px-2 py-1 outline-none rounded-md'>
          Complete
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
