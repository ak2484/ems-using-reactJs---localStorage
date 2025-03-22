import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashboard({ data, changeUser }) {
  return (
    <div className='p-10 h-screen w-full'>
      <Header data={data} changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
