import React, { Component } from "react";
import "./PhotoContainer.css";

class PhotoContainer extends Component {
  constructor(props: any) {
    super(props);

    console.log("Photo Constructor!");
  }

  async componentDidMount() {
    console.log("Photo componentDidMount!");
    // On init setup
  }

  render = () => {
    return (
      <div>
        <p>Placeholder if needed</p>
      </div>
    );
  };
}

export default PhotoContainer;
