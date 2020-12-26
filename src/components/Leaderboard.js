import { React, useState, useEffect } from "react";
import Row from "./Row";

const url = "http://localhost:8080";
export default function Leaderboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + "/getAll");
      const json = await response.json();
      console.log(response);
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);
  data.sort((a, b) => {
    return a.sum > b.sum ? -1 : 1;
  });

  if (loading) {
    return (
      <center>
        <img
          className="mt-6"
          height="64px"
          width="64px"
          src={process.env.PUBLIC_URL + "/802.gif"}
          alt="loading"
        />
      </center>
    );
  }

  return (
    <div>
      {data.map((item, index) => {
        return <Row {...item} rank={index}></Row>;
      })}
    </div>
  );
}
