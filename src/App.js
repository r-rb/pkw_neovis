import React, { Component } from "react";
import { GraphView } from "./components/GraphView";

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "password";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily: "Quicksand" }}>
        <div style={{textAlignVertical:'center',
                              textAlign:'center',
                                  height:'75px'}}>
          <h1> dank title</h1>
        </div>
        <div style={{ width: "100%",
                      position: "absolute",
                      top: "75px",
                      bottom: "0"}}>
            <GraphView
              containerId={"id1"}
              neo4jUri={NEO4J_URI}
              neo4jUser={NEO4J_USER}
              neo4jPassword={NEO4J_PASSWORD}
              backgroundColor={"#FFFFFF"}
            />
        </div>
      </div>
    );
  }
}

export default App;