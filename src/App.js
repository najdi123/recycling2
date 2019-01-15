import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Didyouknow from './pages/Didyouknow';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/didyoukno" component={Didyouknow}/>
                        <Route
                            render={() => (
                                <div>
                                    <h1>Error 404: Not Found</h1>
                                    <Link to="/">Go Home</Link>
                                </div>)}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
