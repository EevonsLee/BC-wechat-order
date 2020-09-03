import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App/App.jsx';
import Root from "./components/Root/index.jsx"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));



// * jsx

// function Root(){
//     let num=1
//     return <div>
//         hello world
//         {num}
//     </div>
// }

// ReactDOM.render(<Root />, document.getElementById('root'));



// *  生命周期
// class Root extends Component{
//     render(){
//         return <div>hello world<p>你好</p></div>
                
//     }
// }

// let names="lisi"
// let state=true
// ReactDOM.render(<Root names={names}/>, document.getElementById('root'));

// setTimeout(()=>{
//     names="zhangsan"
     
//     ReactDOM.render(<Root names={names}/>, document.getElementById('root'));

// },1000)

// setTimeout(()=>{
//     state=false
//     function Render(){
//         return <div>
//             {
//                 state?<Root names={names}/>:null
//             }
//         </div>
//     }
//     ReactDOM.render(<Render />, document.getElementById('root'));
// },3000)










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
