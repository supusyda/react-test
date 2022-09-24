import React from "react";
import useFetch from "../customize/useFetch";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  let { res: blogdata, loading } = useFetch(url);
  console.log(blogdata, loading);
  const handleBack = () => {
    navigate("/blogs");
  };
  return (
    <>
      <div>
        <div className="direct-button d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleBack}
          >
            <span>&#8612;</span>
          </button>
      
          <button type="button" className="btn btn-primary btn-lg">
            &#8614;
          </button>
        </div>
        <div className="content d-flex justify-content-center flex-column align-items-center">
          {loading ? (
            <ClimbingBoxLoader
              color={"rgb(41 57 137)"}
              loading={loading}
              size={30}
            />
          ) : (
            <>
              {" "}
              <h1>{blogdata.title}</h1>
              <div>{blogdata.body}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
