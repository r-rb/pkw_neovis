import React, { Component } from 'react';
import './App.css';
import { NeoGraph, ResponsiveNeoGraph } from "./NeoGraph";

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "password";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Neovis Example</h1>
        <NeoGraph
          width={400}
          height={300}
          containerId={"id1"}
          neo4jUri={NEO4J_URI}
          neo4jUser={NEO4J_USER}
          neo4jPassword={NEO4J_PASSWORD}
          backgroundColor={"#b2beb5"}
        />
      </div>
    );
  }
}

export default App;