import React from "react";
import axios from "axios";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hasError: false,
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({ data: res.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ hasError: true });
      });
  }

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading...</div>;
    }
    if (this.state.hasError === true) {
      return <div>Oooops! An error has occured</div>;
    }
    return (
      <div>
        {this.state.data.map(item => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.country}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerCard;
