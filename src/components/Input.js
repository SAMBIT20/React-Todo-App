import { useState } from "react";

export default function Input({ addEvent }) {
  const [task, setTask] = useState();

  const handelSubmit = (e) => {
    e.preventDefault();
    const tasks = {
      task: task,
      id: Math.floor(Math.random() * 10000),
    };
    // console.log(tasks);
    addEvent(tasks);
    setTask("");
  };
  return (
    <div>
      <form className="todo-input" onSubmit={handelSubmit}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
