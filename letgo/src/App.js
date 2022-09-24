import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/nav";
import { useEffect, useState } from "react";
import Todo from "./views/todo";
import Table from "./views/table";
import BlogDetails from "./views/BlogDetails";
import AddNewBlog from "./views/AddNewBlog";
import { CountDown, CountdownHooks } from "./views/CountDown";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./views/Blog";
import YouTubeSreach from "./views/YouTubeSreach";
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
  let handleTimeUp = () => {
    alert("time up");
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
    <Router>
      <div className="App">
        <header>
          <Nav></Nav>
        </header>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route
            path="/todo"
            element={
              <>
                <Todo todos={todos} handleDele={handleDele} />
                <div className="input-div">
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
                </div>
              </>
            }
          ></Route>
          <Route
            path="/count"
            element={
              <>
                {" "}
                <CountDown handleTimeUp={handleTimeUp}></CountDown>
                <span>..........................</span>
                <CountdownHooks></CountdownHooks>
              </>
            }
          ></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/youtubesreach" element={<YouTubeSreach />}></Route>

          {/* <Route path="/createNewBlog" element={<AddNewBlog />}></Route> */}

          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
