import React from "react";
import "./table.css";
import { useEffect, useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";

const Table = () => {
  let [res, setRes] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let coviddata = async () => {
      let respones = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
      );
      return respones;
    };
    coviddata().then((data) => {
      setRes(data.data);
      setInterval(() => {
        setLoading(false);
      }, 3000);
    });
  }, []);
  console.log(res);
  return (
    <>
      {loading ? (
        <PacmanLoader color={"rgb(41 57 137)"} loading={loading} size={150} />
      ) : (
        <table>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Deaths</th>
          </tr>
          {res &&
            res.map((item) => {
              return (
                <tr>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })}
        </table>
      )}
    </>
  );
};

export default Table;
