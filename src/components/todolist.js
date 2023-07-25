import { AddItem } from "./itemtodo";

import { AddFrom } from "./addtodo";

const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false
    }
  ];

  export const Add = (props) => {
    return (
        <div className="card rounded shadow-sm m-5">
      <div className="card-body">
        <h3 className="card-title mb-3">{props.title}</h3>
        <ul className="list-group">
          {todos.map((todo) => {
            return <AddItem
            key={todo.id}
            todo={todo} />;
          })}
          <AddFrom color="primary" button="Add" />
        </ul>
      </div>
    </div>
    );
  };