import "./Search.css";
import { React } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search({ name }) {
  let url = `https://rickandmortyapi.com/api/character/?name=${name}`;

  const [data, setData] = useState();

  const ObteniendoData = async () => {
    const datas = await fetch(url);
    const datasJSON = await datas.json();
    setData(datasJSON.results);
  };

  useEffect(() => {
    ObteniendoData();
  });

  return (
    <>
      <div className="container">
        <h1 className="title2">
          <img
            className="imgLogo2"
            src="https://i.pinimg.com/originals/93/93/82/939382a22dc96f1d224614978b3c3e70.png"
            alt=""
          />
          Searching
        </h1>
        <div className="container2">
          {data?.map((items) => (
            <Link to={`/${items.id}`} key={items.id} className="card">
              <div className="profile">
                <img src={items.image} alt="" className="profileImg" />
                <h2 className="name">{items.name}</h2>
              </div>
              <hr />
              <br />
              <h3 className="gender">
                gender: <span>{items.gender}</span>
              </h3>
              <h3 className="status">
                status: <span>{items.status}</span>
              </h3>
              <h3 className="location">
                last known location: <span>{items.location.name}</span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
