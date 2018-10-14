import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Signup from './components/auth/Signup';
import Home from './components/Home'
import Partido from './components/users/Partido';
import Gol from './components/users/Gol';


const Routes =()=>{
    return(
        <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route path="/partido" component={Partido}/>
            <Route path="/gol" component={Gol}/>
            <Route exact path="/" component={Home}/>
        </Switch>
    )
}

export default Routes