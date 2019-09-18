// arquivo de entrada da aplicacao (tudo parte dele)
// const soma = (a, b) => a + b;
// alert(soma(1,4));

import React from 'react';
import { render } from 'react-dom';

// App
import App from './App';

// render(<h1>Hello World</h1>, document.getElementById('app'));

render(<App />, document.getElementById('app'));
