import React from 'react';
// sempre que a sintax JSX for utilizada o React precsa ser importado:

// css
import './App.css'
// imagem:
// import profile from '../assets/profile.jpg'
import TechList from './components/TechList';

function App() {
  // return <h1>Hello Rockeseat</h1>
  // return <img width="200" alt="teste" src={profile} />
  return <TechList />
}

export default App;