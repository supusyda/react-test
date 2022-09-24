import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customize/useFetch";
import AddNewBlog from "./AddNewBlog";
import { CloseButton } from "reactstrap";

import "./Blog.css";
const Blog = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { res: data } = useFetch(url, true);
  let [newData, setNewData] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      let nData = data.slice(0, 10);
      setNewData(nData);
    }
  }, [data]);

  const [open, setOpen] = useState(false);
  const handleAdd = () => {
    setOpen(!open);
  };
  const addToBlog = (newBlog) => {
    let nData = newData;
    nData.unshift(newBlog);
    console.log(nData);
    setNewData(nData);
    console.log(newData);
  };
  const handleClose = (id) => {
    let result = newData.filter((item) => {
      return item.id !== id;
    });
    console.log(result);
    setNewData(result);
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-secondary m-3"
          onClick={handleAdd}
        >
          ADD
          {open ? (
            <AddNewBlog
              isOpen={open}
              setOpen={setOpen}
              addToBlog={addToBlog}
            ></AddNewBlog>
          ) : (
            ""
          )}
        </button>
      </div>

      <div className="BlogPage d-flex justify-content-space-around align-items-stretch">
        {newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div
                className="card "
                key={item.title}
                style={{ width: 18 + "rem" }}
              >
                <div className="close d-flex justify-content-end p-2">
                  <CloseButton
                    onClick={() => {
                      handleClose(item.id);
                    }}
                  ></CloseButton>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                  <Link to={`/blogs/${item.id}`} className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Blog;
