import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import MainFarsi from "../components/MainFarsi";
import FooterPage from "../components/Footer";
import Paper from "./Paper";
import Box from "./Box";
import Equipment from "../components/Equipment";





class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron />

                <MainFarsi/>
                <Paper/>
                <Box/>
                <Equipment/>
                <FooterPage/>

            </div>
        );
    }
}

export default Home;