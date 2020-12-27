import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const url = "https://aparoksha-leaderboard.herokuapp.com";
export default function Details() {
  const { rollnumber } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + "/getOne?roll=" + rollnumber);
      const json = await response.json();
      console.log(response);
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);

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
      <br />
      <center>
        <strong>
          <Link to="/">BACK</Link>
        </strong>
      </center>
      <br />
      <span className="columns  is-centered">
        <div className="column is-half">
          <div className="box p-3">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img
                    src={"https://github.com/" + data.github + ".png"}
                    alt="github"
                  />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{data.name}</strong> <small>{data.roll}</small>{" "}
                    <small>
                      {" "}
                      <a
                        style={{
                          color: "black",
                        }}
                        href={"https://github.com/" + data.github}
                      >
                        {data.github && "@" + data.github}
                      </a>
                    </small>
                    <br />
                    <b>Rank {data.rank}</b>
                    <br />
                    <b>{data.sum} points</b>
                    <br />
                  </p>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>WING</th>
                        <th>POINTS</th>
                      </tr>
                    </thead>

                    <tbody>
                      {Object.keys(data.score).map((key, index) => {
                        return (
                          <tr>
                            <th>{key}</th>
                            <td>{data.score[key]}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </div>
      </span>
    </div>
  );
}
