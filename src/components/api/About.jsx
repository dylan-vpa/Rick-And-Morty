import { React } from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="info">
        <h3 className="titlee">Rick and morty API</h3>
        <br />
        <br />
        <br />
        <p className="pa">
          The Rick and Morty API is a RESTful and GraphQL API based on the
          television show Rick and Morty. You will access to data about hundreds
          of characters, images, locations and episodes. The Rick and Morty API
          is filled with canonical information as seen on the TV show.
        </p>
        <br />
        <br />
        <br />
        <ul className="button">
          <li>
            <a href="https://rickandmortyapi.com">More info </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
