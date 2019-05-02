import React, { Component } from "react";
import useResizeAware from 'react-resize-aware';
import PropTypes from "prop-types";
import * as NeoVis from 'neovis.js';

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
            "MATCH (tw:LandOwner)-[rel:OWNS_SHARES]->(ht:Shareholding) RETURN tw, ht, rel LIMIT 10"
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
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: `${backgroundColor}`
          }}
        />
      );
    }
}

export default GraphView;