import React, { Component } from "react";
import * as NeoVis from '../graphing_shit/neovis';

class GraphView extends Component{
    constructor(props){
        super(props);
        this.visRef = React.createRef();
        this.state = {
          search_query:'',
          cypher_list:[]
        }
    }
    componentDidMount(){
        const { neo4jUri, neo4jUser, neo4jPassword,initial_cypher,label_object,relationship_object } = this.props;
        const config = {
          container_id: this.visRef.current.id,
          server_url: neo4jUri,
          server_user: neo4jUser,
          server_password: neo4jPassword,
          initial_cypher: initial_cypher,
          labels: label_object,
          relationships: relationship_object
        };
        this.state.cypher_list.push(initial_cypher);
        this.vis = new NeoVis.default(config);  
        this.vis.render();
    }
    componentWillReceiveProps(nextProps) {
      if( nextProps.entered != null && nextProps.entered.length >0) {
        this.setState({search_query:nextProps.entered},()=>{
            var search_cypher=`CALL db.index.fulltext.queryNodes("name", "${this.state.search_query}") YIELD node RETURN * LIMIT 10`;
            this.vis.renderWithCypher(search_cypher);
            this.state.cypher_list.push(search_cypher);
            console.log(this.state.cypher_list);
        })
      }
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