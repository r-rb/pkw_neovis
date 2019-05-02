import React, { Component } from 'react';
import './App.css';
//import { NeoGraph, ResponsiveNeoGraph } from "./NeoGraph";
import {GraphView} from "./components/GraphView"
import {InputGroup,Button,FormControl} from "react-bootstrap"

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "password";

class App extends Component {
  render() {
    return (
      <div>
      <div >
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}className="App">
        <GraphView
          width={400}
          height={300}
          containerId={"id1"}
          neo4jUri={NEO4J_URI}
          neo4jUser={NEO4J_USER}
          neo4jPassword={NEO4J_PASSWORD}
          backgroundColor={"#b2beb5"}
        />
      </div>
      </div>
    );
  }
}

export default App;