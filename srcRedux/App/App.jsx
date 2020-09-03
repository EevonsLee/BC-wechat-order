import React from 'react';
import logo from '../logo.svg';
import style from './App.css';
import {Link} from "react-router-dom"
function App(props) {
  return (
    <div className="App">
      <h2>根组件</h2>
      <Link to="/pc/a">a</Link>
      <Link to="/pc/b">b</Link>
      {props.children}
    </div>
  );
}

export default App;
