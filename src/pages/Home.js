import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import MainFarsi from "../components/MainFarsi";
import FooterPage from "../components/Footer";





class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron />

                <MainFarsi/>
                <FooterPage/>
            </div>
        );
    }
}

export default Home;