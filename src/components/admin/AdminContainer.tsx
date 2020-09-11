import React, { Component } from 'react';
import './AdminContainer.css';

class AdminContainer extends Component {
  constructor(props: any) {
    super(props);

    console.log('Admin Constructor!');
  }

  async componentDidMount() {
    console.log('Admin componentDidMount!');
    // On init setup
  }

  render = () => {
    return (
      <div>
        <p>Admin!</p>
      </div>
    );
  };
}

export default AdminContainer;
