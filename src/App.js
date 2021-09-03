import React, { Suspense, lazy } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css'

const Nav = lazy(() => import('./component/common/nav/nav'))
const Detail = lazy(() => import('./component/detail/detail'))
const Home = lazy(() => import('./component/home/home'))
export default function App() {
    return (
        <>
            <Suspense fallback={<h1>Loading ..</h1>}>
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
            </Suspense>

        </>

    );
}

