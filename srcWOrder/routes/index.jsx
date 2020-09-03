import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"

import App from "../app/index.jsx"
// import Index from "../pages/index.jsx"

import Lazy from "./lazy.jsx"

const Welcome=Lazy(()=>import("../pages/Welcome/index.jsx"))
const Project=Lazy(()=>import("../pages/Project/index.jsx"))
const ShopCar=Lazy(()=>import("../pages/ShopCar/index.jsx"))
const Order=Lazy(()=>import("../pages/Order/index.jsx"))
const Pc=Lazy(()=>import("../pages/Pc/index.jsx"))

function BaseRouter() {
    return <Router basename="/">
        <App>
            <Switch>
                <Route path='/' exact component={()=>{
                    return <Redirect to="/welcome/shop" />
                }}/>
                <Route path='/welcome' component={Welcome}/>
                <Route path='/project' component={Project}/>
                <Route path='/shopCar' component={ShopCar}/>
                <Route path='/order' component={Order}/>
                <Route path='/pc' component={Pc}/>
                
            </Switch>
        </App>
    </Router>
}




export default BaseRouter