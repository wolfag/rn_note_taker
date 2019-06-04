import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home/Home.component";

class NoteTaker extends Component {
  render() {
    return <Home />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default NoteTaker;
