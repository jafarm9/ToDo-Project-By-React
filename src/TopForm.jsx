import React, { Fragment, useContext, useState } from "react";
import { taskContext } from "./taskContext";
import TaskItems from "./TaskItems";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSetTask = (event) => {
    setTask(event.target.value);
  };
  const handleAddTask = (event) => {
      event.preventDefault();
    if (task.length) {
        setTaskItems([
            ...taskItems,
            { id: Math.random(), title: task, done: false },
        ]);
    }else{
          alert(" کار جدیدی ثبت نشد .")
    }
    setTask("");
    
  };
  return (
    <Fragment>
      <h4 className="text-center text-info text_shadow">دسته بندی کارهای روزانه</h4>
      <form onSubmit={handleAddTask}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={handleSetTask}
          />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default TopForm;
