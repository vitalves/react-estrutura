// class component
import React, { Component } from 'react';
import TechItem from './TechItem';

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

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech ) })
  }

  render() {
    // console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <h1> {/* this.state.newTech */ } </h1>
        <ul>
          { this.state.techs.map(tech =>( 
            <TechItem
              key={tech}
              tech={tech}
              // icon={<Icon />}
              onDelete={() => this.handleDelete(tech)}
            />
          )) }
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