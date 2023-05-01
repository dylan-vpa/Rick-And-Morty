import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

function CardDetails() {
  let { id } = useParams();

  let url = `https://rickandmortyapi.com/api/character/${id}`;

  const [data, setData] = useState();

  const ObteniendoData = async () => {
    const datas = await fetch(url);
    const datasJSON = await datas.json();
    setData(datasJSON);
    console.log(data);
  };

  useEffect(() => {
    ObteniendoData();
  });

  if (data != undefined) {
    return (
      <div className="profileInfo">
        <img src={data.image} className="profileInfoPhoto" />
        <h1 className="profileName">{data.name}</h1>
        <div className="profileInformationDiv">
          <h2 className="profileInformation">
            status:<span>{data.status}</span>
          </h2>
          <h2 className="profileInformation">
            specie:<span>{data.species}</span>
          </h2>
          <h2 className="profileInformation">
            gender:<span>{data.gender}</span>
          </h2>
          <h2 className="profileInformation">
            location:<span>{data.location.name}</span>
          </h2>
          <h2 className="profileInformation">
            origin:<span>{data.origin.name}</span>
          </h2>
          <h2 className="profileInformation">
            Created:<span>{data.created}</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default CardDetails;
