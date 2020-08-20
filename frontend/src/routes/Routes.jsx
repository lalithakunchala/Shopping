import React from "react";
import { Route, Switch } from "react-router-dom";
import HostSignUp from '../Components/HostSignUp/HostSignUp'
import UserSignUp from '../Components/UserSignUp/UserSignUp'
import Home from '../Components/Home/Home';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/host" exact component = {HostSignUp}/>
            <Route path="/user" exact component = {UserSignUp}/>
        </Switch>
    )
}

