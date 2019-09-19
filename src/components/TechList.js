// class component
import React, { Component } from 'react';

class TechList extends Component {
  // para usar status sem um constructor:
  // yarn add @babel/plugin-proposal-class-properties -D
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'React JS',
      'React Netive',
    ],
  };

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.newTech);
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech ],
      newTech: '',
    });
  }

  render() {
    // console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <h1> {/* this.state.newTech */ } </h1>
        <ul>
          { this.state.techs.map(tech => <li key={tech}>{tech}</li>) }
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;