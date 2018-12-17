import React, {Component} from 'react';
import './newcss.css';


import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import pic1 from '../images/813.png';
import pic2 from "../images/p1.jpg";
import pic3 from "../images/p2.jpg"
import pic4 from "../images/p3.jpg"

import NewNavbar from "../components/NewNav";
import FooterPage from "../components/Footer2";

class Paper extends Component {
    render() {
        return (
            <div className="newhome">

                <div className="sect-2 container">
                                <span dir="rtl">
                    <h1 className="pad">خرید کاغذ و کارتن در تهران و کرج</h1>

                    <p className="pad">
                        ما خریدار تمامی انواع کاغذ و کارتن شما در مرکز بازیافت ابراهیمی هستیم:
                    </p>
                                </span>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 start-right ">
                            <span dir="rtl">

                                <h1 className="sect-6-title">کاغذ</h1>
                                <li>روزنامه قدیمی</li>
                                <li>کتاب باطله</li>

                                <li>دفاتر نیازمندها (کتاب اول)</li>
                                <li>خريدار كتاب باطله در تهران</li>
                                <li>خريدار كتاب باطله در كرج</li>
                                <li>خريدار كتاب باطله در غرب تهران</li>
                                <li>خريدار كاغذ باطله در كرج</li>
                                <li>خريدار كاغذ باطله در تهران</li>
                                <li>خريدار كاغذ باطله در محل</li>
                                <li>خريدار كتاب باطله</li>
                                <li>خريدار روزنامه باطله</li>

                                <li>خریدار کاغذ باطله درب منزل</li>
                                <li>امحای اسناد محرمانه در حضور نماینده شما</li>

                                <li>کاغذ باطله دفتری</li>
                                <li>کاغذ فتوکپی و چاپ</li>
                                <li>کاغذ گلاسه و مجله</li>


                            </span>
                        </div>
                        <div className="col-sm-12 col-md-4 start-right">
                            <span dir="rtl">
                                <h1 className="sect-6-title">کارتن</h1>
                                <li>خريدار كارتن</li>
                                <li>خريدار كارتن در تهران</li>
                                <li>خريدار كارتن در غرب تهران</li>
                                <li>خريدار كارتن در کرج</li>
                                <li>کارتن موزی</li>
                                <li>خریدار کارتن موزی</li>
                                <li>بازیافت کارتن</li>
                                <li>بازیافت کارتن در تهران</li>
                                <li>بازیافت کارتن در غرب تهران</li>
                                <li>بازیافت کارتن در کرج</li>

                            </span>
                        </div>
                        <div className="col-sm-12 col-md-4 start-right">
                            <span dir="rtl">
                                <h1 className="sect-6-title">ضایعات</h1>


                                           <li>پوشال کارتن سازی</li>
                                       <li>پوشال کاغذ</li>
                                <li>کاغذ خرد شده</li>
                                <li>خريدار ضايعات كارتن</li>
                                <li>خريدار ضايعات كارتن در كرج</li>
                                <li>خريدار ضايعات كارتن در تهران</li>
                                <li>خريدار ضايعات كارتن در غرب تهران</li>
                                <li>ضايعات كارتن</li>
                                <li>ضایعات کارتن کرج</li>
                                <li>پرس كارتن تهران</li>
                                <li>پرس كارتن كرج</li>
                                <li>ضایعات پرس شده</li>
                                <li>خريدار ضايعات كارتن در غرب تهران</li>
                                <li>خریدار آخال</li>
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
                            هیچ مقداری بیش از حد بزرگ یا خیلی کوچک نیست. ما خریدار تمام ضایعات کاغذ و کارتن  شما بدون واسطه هستیم. دریافت مواد در محل شما توسط ماشین های ما یا در محل ما روی ترازوی ما.
                        </p>
                    </span>
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <img className="image-pad" src={pic2} alt=""/>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <img className="image-pad" src={pic3} alt=""/>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <img className="image-pad" src={pic4} alt=""/>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Paper;
