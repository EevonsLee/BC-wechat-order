import React from 'react';
import style from './index.module.less';
import {Link} from "react-router-dom"
import Msg from "../components/Msg/index.jsx"

function App(props) {
  return (
    
    <div className={style.app}>
       <Msg />
      {props.children}
     
    </div>
  );
}

export default App;
