import React, {Component} from 'react';
import './newcss.css';


import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import pic1 from '../images/813.png';
import pic2 from "../images/c1.jpg";
import pic3 from "../images/c2.jpg"
import pic4 from "../images/c3.jpg"

import NewNavbar from "../components/NewNav";
import FooterPage from "../components/Footer";

class Box extends Component {
    render() {
        return (
            <div className="newhome">
                <div className="top-section">
                    <div className="row ">
                        <div className="col-xs-12 col-md-6">
                            <img src={pic1} alt="بنگاه ضایعات ابراهیمی"/>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h1>امروز با ما تماس بگیرید!</h1>
                            <h1>
                                ۰۹۱۲ ۱۱۱ ۲۲ ۳۳
                            </h1>
                        </div>
                    </div>

                </div>
                <NewNavbar/>
                <div className="sect-2">
                    <h1 className="pad">CARDBOARD RECYCLING IN PITTSBURGH, PA
                    </h1>
                    <h1 className="pad">خرید کارتن در تهران و کرج</h1>
                    <p className="pad">
                        We BUY the following types of paper at our Springdale recycling center location:
                    </p>
                    <p className="pad">
                        ما خریدار تمامی انواع کارتن شما در مرکز بازیافت ابراهیمی هستیم:
                    </p>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 ">
                            <span dir="rtl">
                                <h1>Newspaper Grades</h1>
                                <h1>کاغذ درجه روزنامه</h1>
                                <li>Old Newspapers</li>
                                <li>روزنامه قدیمی</li>
                                <li>Over issue newspapers</li>
                                <li>کتاب باطله</li>
                                <li>Phone books</li>
                                <li>دفاتر نیازمندها (کتاب اول)</li>
                                <li>Mixed Paper</li>
                                <li>White Blank news</li>
                                <li>Groundwood books</li>
                            </span>
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                            <span dir="rtl">
                                <h1>High Grades</h1>
                                <h1>کاغذهای با کیفیت</h1>
                                <li>Sorted office waste</li>
                                <li>کاغذ باطله دفتری</li>
                                <li>Printers Grades</li>
                                <li>کاغذ فتوکپی و چاپ</li>
                                <li>Coated Book</li>
                                <li>کاغذ گلاسه و مجله</li>
                                <li>کاغذ خرد شده</li>
                                <li>High-Grade books</li>
                                <li>White ledger</li>
                                <li>Envelope Stock</li>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="paper-3 container">
                    <p>
                        No Quantity is too big or too small, we Broker full truckloads of material, pick up the material at your location by one of our many commercial collection services, or buy the material over our scale at our Springdale location.
                    </p>
                    <span dir="rtl">
                        <p>
                            هیچ مقداری بیش از حد بزرگ یا خیلی کوچک نیست. ما دلالی کامیونی مواد بازیافتی رو انجام میدیم. دریافت مواد در محل شما توسط ماشین های ما یا در محل ما روی ترازوی ما.
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

                <FooterPage/>
            </div>
        );
    }
}

export default Box;