import React, { Component } from "react";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = { itemList: [] };
  }
  fetchList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ itemList: json });
      });
    console.log(this.state.itemList);
  };

  render() {
    return (
      <div>
        <p>This is my app content.</p>
        <button onClick={this.fetchList} className="btn btn-primary" href="#">
          Fetch Datas
        </button>
        <hr />
        <ul id="post-list">
          {this.state.itemList.map((i) => {
            <li>i.title</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default AppContent;
