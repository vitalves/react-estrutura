// class component
import React, { Component } from 'react';

class TechList extends Component {
  // para usar status sem um constructor:
  // yarn add @babel/plugin-proposal-class-properties -D
  state = {
    techs: [
      'Node.js',
      'React JS',
      'React Netive',
    ]
  };


  render() {
    console.log(this.state);

    return(
      <ul>
        <li>Node.js</li>
        <li>React JS</li>
        <li>React Netive</li>
      </ul>
    );
  }
}

export default TechList;