import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-2 h1 ">
          <center>
            <b>STUDENTS</b>
          </center>
        </span>
      </nav>
    );
  }
}

export default Navbar;
