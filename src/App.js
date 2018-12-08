import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Didyouknow';
import NewHome from './pages/NewHome';
import Paper from './pages/Paper';
import Box from './pages/Box';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/didyoukno" component={Dashboard}/>

                        <Route path="/newhome" component={NewHome}/>
                        <Route exact path="/buying-recycling-material/paper" component={Paper}/>
                        <Route exact path="/buying-recycling-material/box" component={Box}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
