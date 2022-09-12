import React from "react";

const todo = (props) => {
//   const todos = props.todos;
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li key={item.job}>
            {item.job} <button>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default todo;
