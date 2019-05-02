import React, { Component } from "react";
import * as NeoVis from '../graphing_shit/neovis';

class GraphView extends Component{
    constructor(props){
        super(props);
        this.visRef = React.createRef();
    }
    componentDidMount(){
        const { neo4jUri, neo4jUser, neo4jPassword } = this.props;
        const config = {
          container_id: this.visRef.current.id,
          server_url: neo4jUri,
          server_user: neo4jUser,
          server_password: neo4jPassword,
          initial_cypher:
            "MATCH (n:Character) RETURN n LIMIT 10",
          labels: {"Character": {
                    "caption": "name"
                  }},
                  relationships: {
                    "INTERACTS": {
                        "thickness": "1",
                        "caption": false
                    }
                }
        };
        this.vis = new NeoVis.default(config);  
        this.vis.render();
    }
    render() {
      const { width, height, containerId, backgroundColor } = this.props;
      return (
        <div
          id={containerId}
          ref={this.visRef}
          style={{
            width: `100%`,
            height: `100%`,
            backgroundColor: `${backgroundColor}`
          }}
        />
      );
    }
}

export{GraphView};