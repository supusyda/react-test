import { useEffect, useState, CSSProperties } from "react";
import axios from "axios";
import React from "react";

const useFetch = (url) => {
  let [res, setRes] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let coviddata = async () => {
      let respones = await axios.get(url);
      return respones;
    };
    coviddata().then((data) => {
      setRes(data.data);
      setInterval(() => {
        setLoading(false);
      }, 3000);
    });
  }, []);
  return { res, loading };
};
export default useFetch;
