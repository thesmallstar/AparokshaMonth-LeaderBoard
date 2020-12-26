import React from "react";
import { Link } from "react-router-dom";

export default function Row(props) {
  console.log(props);
  const { rank, name, roll, sum, github } = props;

  return (
    <span className="columns  is-centered">
      <div className="column is-half">
        <div className="box p-3">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  height="64px"
                  width="64px"
                  src={"https://github.com/" + github + ".png"}
                  alt="github"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>
                    {rank + 1}. {name}
                  </strong>{" "}
                  <small>{roll}</small>{" "}
                  <small>
                    <a
                      style={{
                        color: "black",
                      }}
                      href={"https://github.com/" + github}
                    >
                      {github && "@" + github}
                    </a>
                  </small>
                  <br />
                  <b>{sum} points</b>
                  <Link to={"/user/" + roll}> (View details)</Link>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </span>
  );
}
