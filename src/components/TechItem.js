import React from 'react';
import PropTypes from 'prop-types';

// function TechItem( { tech = 'valor default', onDelete } ) { // uma forma com funcoes
function TechItem( { tech, onDelete } ) {
  return(
    <li>
      {tech}
      <button 
        onClick={onDelete} 
        type="button">
          Remover 
      </button>
    </li> 
  );
}

// Default Props de componetes de funcao
TechItem.defaultProps = {
  tech: 'oculto', // se o tech nao for informado fica como 'oculto'
}

// PropoTypes: Validacao das propriedades q o component recebe
// ($ yarn add prop-types)
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem; 
