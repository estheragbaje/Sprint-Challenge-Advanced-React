import React, { useState, useEffect } from "react";
import axios from "axios";
import useData from "../hooks/useData";

function PlayerCard2() {
  const [data, isLoading, hasError] = useData();

  if (isLoading === true) {
    return <div>Loading...</div>;
  }
  if (hasError === true) {
    return <div>Oooops! An error has occured</div>;
  }
  return (
    <div>
      {data.map(item => (
        <div>
          <h3>{item.name}</h3>
          <h5>{item.country}</h5>
          <p>Searches: {item.searches}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayerCard2;
