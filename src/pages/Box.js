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
                <div className="sect-2 container">
                    <h1 className="pad">خرید کارتن در تهران و کرج</h1>
                    <p className="pad">
                        ما خریدار انواع کارتن از شما در مرکز بازیافت ابراهیمی هستیم:
                    </p>
                    <div className="row">

                        <div className="col-sm-12 col-md-6 start-right ">
                            <span dir="rtl">
                                <h1 className="sect-6-title">صنایع تحت پوشش</h1>
                                <li>کارخانجات</li>
                                <li>شرکت ها</li>
                                <li>انبارها</li>
                                <li>سوپر مارکت ها</li>
                                <li>Grocery Stores</li>
                                <li>Warehouses</li>
                                <li>Box Shops</li>
                                <li>Inventory Clean Outs</li>
                                <li>Overstock/Misprints</li>
                                <li>Insurance Recovery </li>
                            </span>
                        </div>

                        <div className="col-sm-12 col-md-6 start-right ">
                            <span dir="rtl">
                                <h1 className="sect-6-title">انواع کارتن</h1>
                                <li>خريدار ضايعات كارتن</li>
                                <li>خريدار ضايعات كارتن در كرج</li>
                                <li>خريدار ضايعات كارتن در تهران</li>
                                <li>خريدار كارتن</li>
                                <li>ضايعات كارتن</li>
                                <li>ضایعات کارتن کرج</li>
                                <li>پرس كارتن تهران</li>
                                <li>پرس كارتن كرج</li>
                                <li>ضایعات پرس شده</li>
                                <li>خريدار ضايعات كارتن در غرب تهران</li>
                                <li>خریدار آخال</li>
                                <li>کارتن موزی</li>
                                <li>خریدار کارتن موزی</li>
                                <li>بازیافت کارتن</li>
                                <li>پوشال کارتن سازی</li>
                                <li>خریدار ضایعات کارتن بازیافتی</li>
                                <li>دم قیچی </li>
                                <li>خریدار ضایعات کارتن های فروشگاهی</li>
                                <li>خریدار ضایعات کارتن های کارخانجات</li>
                                <li>خریدار ضایعات کارتن های شرکت ها</li>
                                <li>پوشال کارتن سازی</li>

                            </span>
                        </div>

                    </div>
                </div>
                <div className="paper-3 container">
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

            </div>
        );
    }
}

export default Box;
