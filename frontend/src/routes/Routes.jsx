import React from "react";
import { Route, Switch } from "react-router-dom";
import HostSignUp from '../Components/HostSignUp/HostSignUp'
import UserSignUp from '../Components/UserSignUp/UserSignUp'
import Home from '../Components/Home/Home';
import HostLogin from '../Components/HostLogin/HostLogin';
import UserLogin from '../Components/UserLogin/UserLogin';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/host" exact render={(props) => <HostSignUp {...props}/>}/>
            <Route path="/user" exact render={(props) => <UserSignUp {...props}/>}/>
            <Route path="/hostlogin" exact render={(props) => <HostLogin {...props}/>}/>
            <Route path="/userlogin" exact render={(props) => <UserLogin {...props}/>}/>
        </Switch>
    )
}

