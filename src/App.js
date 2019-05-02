import React, { Component } from "react";
import { GraphView } from "./components/GraphView";

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "password";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily: "Quicksand" }}>
        <h1>React Neovis Example</h1>
        <GraphView
          width={400}
          height={300}
          containerId={"id1"}
          neo4jUri={NEO4J_URI}
          neo4jUser={NEO4J_USER}
          neo4jPassword={NEO4J_PASSWORD}
          backgroundColor={"#FFFFFF"}
        />
      </div>
    );
  }
}

export default App;