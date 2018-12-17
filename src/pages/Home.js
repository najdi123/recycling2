import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import MainFarsi from "../components/MainFarsi";
import FooterPage from "../components/Footer2";
import Paper from "./Paper";
import Box from "./Box";
import Equipment from "../components/Equipment";
import Footer from "../components/Footer";





class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron />

                <MainFarsi/>
                <Paper/>

                <Equipment/>

                <Footer/>

            </div>
        );
    }
}

export default Home;
