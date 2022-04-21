import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <header>
            <div>
              <a href="http://localhost:3000/" className="nav-bar">
                Employee Management App
              </a>
            </div>
          </header>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
