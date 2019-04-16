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
        /*
          Since there is no neovis package on NPM at the moment, we have to use a "trick":
          we bind Neovis to the window object in public/index.html.js
        */
        this.vis = new NeoVis.default(config);
        this.vis.render();
    }
    render(){

    }
}