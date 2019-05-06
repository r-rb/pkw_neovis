import React, { Component } from "react";
import { GraphView } from "./components/GraphView";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core"

// Styling
const styles = theme => ({
    graphview:{ 
                width: "100%",
                position: "absolute",
                top: "75px",
                bottom: "0"
    },
    input: {
            width:"100%",
            height:"75px"
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    }
});

// Neo4j Login
const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "password";

// Initial cyphers and config
const initial_cypher = "MATCH (n:Character) RETURN n LIMIT 10"
const label_object = {"Character":  { 
                                      "caption": "name"
                                    }
                     }
const relationship_object = {
  "INTERACTS": {
      "thickness": "10",
      "caption": false
  }
  }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      entered: ''
    };
  }

  enterKeyPressed(event){
    console.log(event);

    this.setState({entered: event.target.value},() => {
                                                        console.log(this.state)
                                                      });

    event.target.value = ''
  }

  arrowKeysPressed(event){

  }

  render() {
    return (
    <div className="App" style={{ fontFamily: "Quicksand" }}>
        <div className={this.props.classes.container}>
          <TextField
            id="outlined-search"
            label="Search for a name"
            type="search"
            className={this.props.classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
            value={this.state.value}
            inputProps={{
              style: {fontSize: `50px`} 
            }}
            InputLabelProps={{
              style: {fontSize: `25px`} 
            }}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                  this.enterKeyPressed(ev) // here was the mistake
              }
            }}
            onKeyDown={(ev) =>{
              console.log(ev.keyCode);
            }}
            />
        </div>

          <div className={this.props.classes.graphview}>
              <GraphView
                containerId={"id1"}
                neo4jUri={NEO4J_URI}
                neo4jUser={NEO4J_USER}
                neo4jPassword={NEO4J_PASSWORD}
                backgroundColor={"#FFFFFF"}
                initial_cypher={initial_cypher}
                label_object={label_object}
                relationship_object={relationship_object}
                entered={this.state.entered}
              />
          </div>
      </div>
    );
  }
}

 

export default withStyles(styles)(App);