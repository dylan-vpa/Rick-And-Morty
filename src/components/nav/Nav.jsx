import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

function Nav({ addName }) {
  const handleChange = function (e) {
    addName(e.target.value);
  };

  return (
    <nav className="navMenu">
      <ul>
        <li>
          <Link to="/" className="abc">
            <img
              src="https://i.pinimg.com/originals/c2/b4/cf/c2b4cfa2c85a298fe6a57d13f1b6ec74.png"
              className="imgHome"
            />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/About" className="abc">
            <a className="link" href="">
              Rick And Morty API
            </a>
          </Link>
        </li>
      </ul>
      <div className="input-cont">
        <form className="input">
          <input type="text" required onChange={handleChange} />
          <Link to="/SearchResults" className="abc">
            <button>
              <GoSearch />
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
