// class component
import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  /*
  // PROPRIEDADES ESTATICAS: Esquivalem ao DefaultProps:
  static defaultProps = {
    tech: 'Oculto'
  }
  */

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
          )) 
          }
          { /* <TechItem tech="express JS" /> */ }
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

/*
// Default Props tambem poderia ser usado aqui
TechItem.defaultProps = {
  tech: 'oculto',
}
*/

export default TechList;