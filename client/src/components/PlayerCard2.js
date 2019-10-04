import React from "react";
import axios from "axios";

function PlayerCard2() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setHasError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
