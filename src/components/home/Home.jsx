import "./Home.css";
import { React } from "react";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

function Home() {
  const [page, setPage] = useState(1);

  let previous = () => {
    if (page == 1) {
    } else {
      setPage(page - 1);
    }
  };

  let next = () => {
    setPage(page + 1);
  };

  const [loading, setLoading] = useState(true);

  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const [data, setData] = useState();

  const ObteniendoData = async () => {
    const datas = await fetch(url);
    const datasJSON = await datas.json();
    setData(datasJSON.results);
    setLoading(false);
  };

  useEffect(() => {
    ObteniendoData();
  });

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <h1 className="title">
              <img
                className="imgLogo"
                src="https://www.xtrafondos.com/wallpapers/rick-y-morty-portal-dimensional-6603.jpg"
                alt=""
              />
              Rick And Morty
            </h1>
            <div className="container2">
              {data?.map((items) => (
                <Link to={`${items.id}`} key={items.id} className="card">
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
            <div className="pagination">
              <button onClick={previous}>
                <div className="triangule-prev"></div>
              </button>
              <p className="pageText">PAGE:{page}</p>
              <button onClick={next}>
                <div className="triangule-next"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
