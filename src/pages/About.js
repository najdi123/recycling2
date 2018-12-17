import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../components/main.css'
import FooterPage from "../components/Footer2";





class About extends Component {
    render() {
        return (
            <div className="about">

                <Navbar />
                <div className="container">
                    <h4 className="desc5">
                        هدف ما تفکیک پسماند قابل بازیافت، معرفی همکاران به یکدیگر، حذف واسطه و اشتغال زایی در راستای حفظ محیط زیست می باشد
                    </h4>
                    <br/>
                    <h4 className="desc5">
                        بنگاه ضایعاتی ابراهیمی با بیش از بیست سال تجربه آماده به خدمت رسانی می باشد
                    </h4>
                </div>

                <FooterPage/>
            </div>
        );
    }
}

export default About;
