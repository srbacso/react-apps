import React, { Component } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";

class App extends Component {
  render() {
    const myProps = {
      title: "My App",
      subject: "My subject",
      favorite_color: "Red",
    };

    return (
      <div>
        <AppHeader {...myProps} />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
