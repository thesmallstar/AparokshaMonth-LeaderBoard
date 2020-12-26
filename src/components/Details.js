import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../data";
export default function Details() {
  const { rollnumber } = useParams();
  const { rank, name, roll, sum, github, score } = data[0];

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
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{name}</strong> <small>{roll}</small>{" "}
                    <small>{github && "@" + github}</small>
                    <br />
                    <b>{sum} points</b>
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
                      {Object.keys(score).map((key, index) => {
                        return (
                          <tr>
                            <th>{key}</th>
                            <td>{score[key]}</td>
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
