import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/nav";
import { useEffect, useState } from "react";
import Todo from "./views/todo";
import Table from "./views/table";
var _ = require("lodash");
const App = () => {
  let [todos, setTodos] = useState([{ job: "haha" }, { job: "haha2" }]);
  let [todo, setTodo] = useState({ job: "" });
  useEffect(() => {
    console.log("hehehe");
  }, []);
  let handleInput = async (e) => {
    setTodo({ job: e.target.value });
    console.log(todo);
  };
  let handleOnSave = () => {
    if (todo.job) {
      let copy = [...todos, todo];
      console.log(copy);
      setTodos(copy);
      setTodo({ job: "" });
    }
  };
  let handleDele = (deleTodo) => {
    var afterDeleTodos = _.remove(todos, (todo) => {
      return todo != deleTodo;
    });
    setTodos(afterDeleTodos);
  };
  return (
    <div className="App">
      <div className="todos"></div>
      <Nav></Nav>

      {/* <div className="input-div">
        <input
          value={todo.job}
          onChange={(e) => {
            handleInput(e);
          }}
        ></input>
        <button
          onClick={() => {
            handleOnSave();
          }}
        >
          save
        </button>
        <Todo todos={todos} handleDele={handleDele}></Todo>
      </div> */}
      <Table></Table>
    </div>
  );
};

export default App;
