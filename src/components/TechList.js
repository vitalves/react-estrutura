// class component
import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  /*
  // PROPRIEDADES ESTATICAS: Esquivalem ao DefaultProps:
  static defaultProps = {
    tech: 'Oculto'
  }
  // propTypes TAMBEM PODEM SER INSERIDAS AQUI
  static propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
  }
  */

  // para usar status sem um constructor:
  // yarn add @babel/plugin-proposal-class-properties -D
  state = {
    newTech: '',
    techs: [],
      // 'Node.js',
      // 'React JS',
      // 'React Netive',
   // ],
  };

  /* CICLO DE VIDA DO COMPONENTE */
  // Executado no momento que o componente aparece na teça
  componentDidMount(){
    // carregar os dados do localStorage
    const techs = localStorage.getItem('techs');

    // se houver dados no localStorage
    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }

  }

  // Executado sempre que houver alteracoes nas props ou estados
  // componentDidUpdate(prevProps, prevState) {
  componentDidUpdate(_, prevState) {
    // this.props; this.state
    // quando nao utiliza prevProps ou prevState usa um underline _
    // verificar se o estado anterior esta diferente do atual:
    if (prevState.techs !== this.state.techs) {
      // Transfoema em JSON 'JSON.stringify()' e salva no localStorage do Browser
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount(){
    // serve para limpar sujeiras que componentes possam deixa na App 
  }

  /*Ciclo de vida do componente*/

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

    // localStorage.setItem (deixaria redundante: insere no componentDidUpdate)
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech ) })

    // localStorage.setItem (deixaria redundante: insere no componentDidUpdate)
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