import React, { useState } from "react";
import CompleteTask from "../TaskList/CompleteTask";

export default function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();

    // ✅ Create a temporary task object
    const task = {
      title: taskTitle,
      date: taskDate,
      category: category,
      description: taskDescription,
      active: false,
      newTask: true,
      completedTask: false,
      failedTask: false,
    };

    // ✅ Get employees from localStorage
    const data = JSON.parse(localStorage.getItem("employees")) || [];

    data.forEach((element) => {
      if (assignTo === element.firstname) {
        if (!element.tasks) {
          element.tasks = []; // ✅ Ensure tasks array exists
        }
        element.tasks.push(task); // ✅ Add task directly
      }
    });

    // ✅ Save updated data back to localStorage
    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDate("");
    setCategory("");
    setAssignTo("");
    setTaskDescription("");

    console.log("Task Created", data);
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex w-full items-start justify-between mt-5'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className=' text-sm py-1 px-4 w-4/5 rounded-md outline-none bg-transparent border-2 border-emerald-600 mb-4'
              type='text'
              placeholder='Make a UI design'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className=' text-sm py-1 px-4 w-4/5 rounded-md outline-none bg-transparent border-2 border-emerald-600 mb-4'
              type='date'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className=' text-sm py-1 px-4 w-4/5 rounded-md outline-none bg-transparent border-2 border-emerald-600 mb-4'
              type='text'
              placeholder='Employee Name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className=' text-sm py-1 px-4 w-4/5 rounded-md outline-none bg-transparent border-2 border-emerald-600 mb-4'
              type='text'
              placeholder='design,dev,etc'
            />
          </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className=' w-full text-sm py-2 h-44 px-4 rounded-md outline-none bg-transparent border-2 border-emerald-600 mb-4'
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button className='bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-md text-sm mt-4 w-full'>
            Create task
          </button>
        </div>
      </form>
    </div>
  );
}
