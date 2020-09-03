import React from 'react';
import logo from '../logo.svg';
import style from './App.css';

import Data from "../components/Data/parent.jsx"
import Styles from "../components/Styles/index.jsx"
import Event from "../components/Event/index.jsx"
import Ifelse from "../components/Ifelse/index.jsx"
import For from "../components/For/index.jsx"
import Form from "../components/Form/index.jsx"
import Msg from "../components/Msg/parent.jsx"
// import Extend from "../components/Extend/index.jsx"
// import Error from "../components/Error/index.jsx"
import Hoc from "../components/Hoc/index.jsx"
import Ref from "../components/Ref/index.jsx"
// import HookBase from "../components/HookBase/index.jsx"
import HookHigh from "../components/HookHigh/index.jsx"

function App() {
  return (
    <div className="App">
      {/* <Data /> */}
      {/* <Styles /> */}
      {/* <Event /> */}
      {/* <Ifelse /> */}
      {/* <For /> */}
      {/* <Form /> */}
      {/* <Msg /> */}
      {/* <Extend /> */}
      <Error />
      {/* <Hoc /> */}
      {/* <Ref /> */}
      {/* <HookBase /> */}
      {/* <HookHigh /> */}
    </div>
  );
}

export default App;
