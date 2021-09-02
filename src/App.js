import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css'
import Home from './component/home/home'
import Detail from './component/detail/detail'
import Nav from './component/common/nav/nav'
export default function App() {
    return (

        <>
            <Router>
                <Nav />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </>

    );
}

