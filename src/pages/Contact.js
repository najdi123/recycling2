import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import ContactC from "../components/Contact";
import FooterPage from "../components/Footer";





class Contact extends Component {
    render() {
        return (
            <div className="center">
                <Navbar/>
                <ContactC/>
                <FooterPage/>
            </div>
        );
    }
}

export default Contact;