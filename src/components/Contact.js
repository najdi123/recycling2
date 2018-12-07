import React, {Component} from 'react';
import './main.css';
import Carousel from "./Carousel";
// import PersianJs from 'persianjs';

import ContactForm from './ContactForm';



class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact ">
                    <br/>
                    <h1>

                        <span className="contactHeader">:تلفن تماس </span>
                    </h1>
                    <h1 className="contactHeader2">

                        09125256158
                        <br/>
                        09121160743
                    </h1>

                    <h1 className="contactHeader2">09125256158</h1>
                    <span dir="rtl">
                    <ContactForm
                        to="zayeat.ebrahimi@gmail.com"
                        className="contactForm col-2 offset-7"
                        titlePlaceholder="عنوان تماس..."
                        contentsPlaceholder="پیغام شما..."
                        buttonText="ارسال"
                    />
                    </span>
                </div>

                <Carousel/>
            </div>
        );
    }
}

export default Contact;