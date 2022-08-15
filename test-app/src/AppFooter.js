import React, { Component, Fragment } from "react";
import classes from "./AppFooter.module.css";

class AppFooter extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <Fragment>
        <hr />
        <p className={classes.footer}>
          Copyright &copy; {currentYear} Acme Ltd.
        </p>
      </Fragment>
    );
  }
}

export default AppFooter;
