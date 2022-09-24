import { useEffect, useState, CSSProperties } from "react";
import axios from "axios";
import React from "react";

const useFetch = (url,isCovid) => {
  let [res, setRes] = useState([]);
  let [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    
      let coviddata = async () => {
        try {
          let respones = await axios.get(url, {
            cancelToken: ourRequest.token, // <-- 2nd step
          });
          setRes(respones.data);
          setLoading(false);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("request has been " + error.message);
          } else {
            console.log(error);
          }
        }
      };
      setTimeout(() => {
        coviddata();
      }, 500);  
    
    
    return () => {
      ourRequest.cancel(); // <-- 3rd step
    };
  }, []);
  return { res, loading };
};
export default useFetch;
