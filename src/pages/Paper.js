import React, {Component} from 'react';
import './newcss.css';


import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import pic1 from '../images/813.png';
import pic2 from "../images/p1.jpg";
import pic3 from "../images/p2.jpg"
import pic4 from "../images/p3.jpg"

import NewNavbar from "../components/NewNav";
import FooterPage from "../components/Footer";

class Paper extends Component {
    render() {
        return (
            <div className="newhome">

                <div className="sect-2 container">
                                <span dir="rtl">
                    <h1 className="pad">خرید کاغذ در تهران و کرج</h1>

                    <p className="pad">
                        ما خریدار تمامی انواع کاغذ شما در مرکز بازیافت ابراهیمی هستیم:
                    </p>
                                </span>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 start-right ">
                            <span dir="rtl">

                                <h1 className="sect-6-title">کاغذ درجه روزنامه</h1>
                                <li>روزنامه قدیمی</li>
                                <li>کتاب باطله</li>

                                <li>دفاتر نیازمندها (کتاب اول)</li>

                            </span>
                        </div>
                        <div className="col-sm-12 col-md-6 start-right">
                            <span dir="rtl">
                                <h1 className="sect-6-title">کاغذهای با کیفیت</h1>

                                    <li>کاغذ باطله دفتری</li>
                                    <li>کاغذ فتوکپی و چاپ</li>
                                    <li>کاغذ گلاسه و مجله</li>
                                    <li>کاغذ خرد شده</li>


                            </span>
                        </div>
                    </div>
                </div>
                <div className="paper-3 container">
                    <span dir="rtl">
                        <p>
                            هیچ مقداری بیش از حد بزرگ یا خیلی کوچک نیست. ما خریدار تمام ضایعات کاغذ و کارتن  شما بدون واسطه هستیم. دریافت مواد در محل شما توسط ماشین های ما یا در محل ما روی ترازوی ما.
                        </p>
                    </span>
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <img src={pic2} alt=""/>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <img src={pic3} alt=""/>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <img src={pic4} alt=""/>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Paper;