import React, { Component, Fragment } from "react";
import classes from "./AppHeader.module.css";

class AppHeader extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subject}</h3>
      </div>
    );
  }
}

export default AppHeader;
