import React from 'react';
import './App.css';


function App({name,age}) {
  return (
  <div>Hello <strong>Haris</strong>
    <h2>Some frameWorks</h2>
    <ol>
      <li>React </li>
      <li>Angular </li>
      <li>Vue </li>
    </ol>
    <h2>Some Editors</h2>
    <ul>
      <li className="green">Notepad</li>
      <li>Atom</li>
    </ul>
    <h2>Lets do Some Math in react</h2>
  <p> 2+3 = {2+3} </p>
  </div>

  );
}

export default App;
