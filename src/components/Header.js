import React from "react";

export default function Header() {
  return (
    <div className="mb-3">
      <div className="columns">
        <div className="column is-three-quarters">
          <center>
            <h1 class="title">Aparoksha Month Leaderboard!</h1>
            <p class="subtitle">
              Organized by <strong>Geekhaven</strong>
            </p>
          </center>
        </div>

        <div clasName="column is-one-third ">
          <center>
            <img
              height="64px"
              width="64px"
              src="https://geekhaven.iiita.ac.in/images/gh.svg"
              alt="logo"
            />

            <img
              height="64px"
              width="64px"
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
            />
          </center>
        </div>
      </div>
    </div>
  );
}
