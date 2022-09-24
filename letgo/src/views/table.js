import React from "react";
import "./table.css";
import { useEffect, useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import useFetch from "../customize/useFetch";
import moment from "moment";
const Table = () => {
  const today = moment().subtract(1, "days").format("YYYY-MM-DD");
  const oneMonthAgo = moment().subtract(1, "month").format("YYYY-MM-DD");
  const url = `https://api.covid19api.com/country/vietnam?from=${oneMonthAgo}T00:00:00Z&to=${today}T00:00:00Z`;

  const { res, loading } = useFetch(url, true);
  console.log(res);
  return (
    <>
      {console.log(today)}
      {console.log(oneMonthAgo)}

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
