import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";

export default function Card() {
  const [events, setEvent] = useState([]);

  const addEvent = (event) => {
    setEvent((prevEvents) => {
      return [...prevEvents, event];
    });
    console.log(event);
  };
  const handelClick = (id) => {
    setEvent((prevEvents) => {
      return prevEvents.filter((e) => {
        return id !== e.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="card-conatiner">
      <Header />
      <Input addEvent={addEvent} />
      <TaskList task={events} click={handelClick} />
    </div>
  );
}
