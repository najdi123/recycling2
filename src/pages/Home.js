import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import MainFarsi from "../components/MainFarsi";
import Paper from "./Paper";
import Footer from "../components/Footer";





class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron />

                <MainFarsi/>
                <Paper/>
                <Footer/>

            </div>
        );
    }
}

export default Home;
