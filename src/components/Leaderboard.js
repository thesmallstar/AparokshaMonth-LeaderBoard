import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "./Row";

const url = "https://aparoksha-leaderboard.herokuapp.com";
export default function Leaderboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

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
  function handleChange(event) {
    setsearchTerm(event.target.value);
  }
  return (
    <div>
      <div className="columns  is-centered is-mobile mt-6">
        <div className="Column is-half">
          <div className="field">
            <div className="control">
              <input
                className="input is-primary"
                type="text"
                placeholder="Enter Rollnumber"
                onChange={handleChange}
                value={searchTerm}
              />
            </div>
          </div>
        </div>
        <div className="Column is-half">
          <Link to={"/user/" + searchTerm}>
            <button className="button is-dark">
              <p>Search</p>
            </button>
          </Link>
        </div>
      </div>
      {data.map((item, index) => {
        return <Row {...item} rank={index}></Row>;
      })}
    </div>
  );
}
