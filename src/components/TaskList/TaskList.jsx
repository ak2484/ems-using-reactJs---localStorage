import React from "react";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";

function TaskList({ data }) {
  return (
    <div
      id='taskList'
      className='h-[55%] w-full overflow-x-auto mt-10 flex justify-start items-center flex-nowrap gap-5 py-5'
    >
      {data.tasks.map((element, idx) => {
        if (element.active) {
          return <AcceptTask key={idx} data={element} />;
        }
        if (element.newTask) {
          return <NewTask key={idx} data={element} />;
        }
        if (element.completedTask) {
          return <CompleteTask key={idx} data={element} />;
        }
        if (element.failedTask) {
          return <FailedTask key={idx} data={element} />;
        }
      })}
    </div>
  );
}

export default TaskList;
