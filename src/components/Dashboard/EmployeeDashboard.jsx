import React from "react";
import Header from "../other/Header";
import TasklistNumber from "../other/TasklistNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, changeUser }) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      {/* <h1>{data.id}</h1> */}
      <Header data={data} changeUser={changeUser} />
      <TasklistNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
