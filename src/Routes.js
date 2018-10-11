import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Signup from './components/auth/Signup';


const Routes =()=>{
    return(
        <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    )
}

export default Routes