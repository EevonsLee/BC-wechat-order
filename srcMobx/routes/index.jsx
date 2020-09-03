import React from 'react'
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"

import App from "../App/App.jsx"
import Index from "../models/index.jsx"
// import A from "../models/a.jsx"
// import B from "../models/b.jsx"

import lazy from "./lazy.jsx"



function BaseRouter() {
    return <Router basename="/">
        <App>
            <Switch>
                <Route path='/' exact component={Index}/>

            </Switch>
        </App>
    </Router>
}




// function BaseRouter(){
//     return <Router basename="/">
//             <App>
//                 <Switch>
//                     {/* <Route path='/' exact component={Index}/> */}
//                     <Route path='/' exact component={()=>{
//                         return <Redirect to="/b" />
//                     }}/>
//                     <Route path='/a' component={A}/>
//                     <Route path='/b' component={B}/>
//                 </Switch>
//             </App>
//     </Router>
// }



export default BaseRouter