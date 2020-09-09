import React, { Component } from "react";
import "./MapContainer.css";

class MapContainer extends Component {
  constructor(props: any) {
    super(props);

    console.log("Map Constructor!");
  }

  async componentDidMount() {
    console.log("Map componentDidMount!");
    // On init setup
  }

  render = () => {
    return (
      <div>
        <p>MAP!</p>
      </div>
    );
  };
}

export default MapContainer;
