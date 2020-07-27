import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Stock from "./components/Stock";

export default class App extends Component {
  render() {
    return (
      <div>
        <Stock />
      </div>
    );
  }
}
