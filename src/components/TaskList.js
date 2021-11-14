export default function TaskList({ task, click }) {
  return (
    <div className="task-container">
      {task.map((e) => (
        <div key={e.id} className="single-task">
          <span>{e.task}</span>
          <button onClick={() => click(e.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
