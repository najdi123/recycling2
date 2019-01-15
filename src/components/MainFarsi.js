import React, {Component} from 'react';
import './main.css';
import HomeGallery from "./HomeGallery";
import pic7 from "../images/954.jpg";
import pic6 from "../images/953.jpg";
import pic8 from "../images/974.jpg";





class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="one container">
                    <span dir="rtl">
                        <h1 className="pad welcome-2">بازیافت کاغذ و بازیافت کارتن در تهران و کرج</h1>
                        <h5 className="welcome-text">
                           مرکز بازیافت کاغذ ابراهیمی پیشرو در ارائه خدمات خرید و بازیافت کاغذ باطله و کارتن است. بازیافت کاغذ علاوه بر مزایای اقتصادی، کمک بزرگی به حفظ طبیعت و بهداشت محیط است. با مشارکت در این فعالیت مهم شما هم نقشی در ایجاد این مزایا داشته باشید.
                        </h5>
                    </span>
                </div>
                <div className="two container">
                    <HomeGallery/>
                </div>
                <div className="sect-3 start-right">
                    <span dir="rtl">
                        <div className="container">
                            <h2>هدف ما</h2>
                            <div className="fontR">
                                <p>
                                   ما در مرکز ضایعات ابراهیمی به رضایت شما و به حفظ طبیعت می‌اندیشیم. قیمت خرید ضایعات کاغذی و مقوایی در مرکز ضایعات ابراهیمی، مناسب و جلب کننده‌ی رضایت شما است.
                                </p>
                               <p>
                                    ما با فعالیت در کار بازیافت ضایعات در تلاش هستیم تا علاوه بر فعالیت اقتصادی، به حفظ طبیعت و کاهش هزینه‌های صنعت و تولید کشور همت بگماریم.
                                </p>
                            </div>
                       </div>
                    </span>
                </div>

                <div className="sect-4 row">

                    <div className="col-xs-12 col-md-6">
                        <span dir="rtl">
                            <h3 className="sect-4-title">خرید به قیمت رقابتی</h3>
                            <img className="sect-4-image"  src={pic7} alt=""/>
                            <p className="sect-4-text">
                                 قیمت خرید ضایعات کاغذ در ضایعات ابراهیمی رقابتی است. مبلغی که بابت فروش ضایعات کاغذ در مرکز ابراهیمی دریافت می‌کنید، منصفانه و جلب کننده رضایت شما خواهد بود.
                            </p>


                        </span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <span dir="rtl">
                            <h3 className="sect-4-title">از صفر تا صد</h3>
                            <img className="sect-4-image" src={pic6} alt=""/>

                            <p className="sect-4-text">
                                در مرکز ضایعات ابراهیمی کلیه مراحل خرید، انبار، بازیافت و فروش ضایعات کاغذی به انجام می‌رسند. ارائه سبد کاملی از خدمات فنی، سبب افزایش بازدهی و کنترل بیشتر در مسیر رسیدن به اهداف تجاری و طبیعی می‌گردد.
                            </p>

                        </span>
                    </div>
                </div>

                <div className="sect-5 row">
                    <div className="col-xs-12 col-md-6">
                        <img src={pic8} alt="" className="sect-5-image"/>
                    </div>
                    <div className="col-xs-12 col-md-6 ">
                        <span dir="rtl">
                        <h3 className="sect-5-title">
                            صرفه‌جویی در منابع و حفظ طبیعت
                        </h3>
                        <h5 className="sect-5-title2">
                            بازیافت ۱۰۰۰ کیلو کاغذ و مقوا مزایای زیر را به همراه دارد:
                        </h5>

                        <li className="sect-5-list">
                            کاهش نیاز به قطع ۱۷ درخت
                        </li>
                        <li className="sect-5-list">
                            کاهش فضای دفن زباله به اندازه یک متر مربع
                        </li>

                        <li className="sect-5-list">
                           کاهش مصرف آب بیش از ۱۳۰۰ لیتر
                        </li>

                        <li className="sect-5-list">
                           کاهش مصرف سوخت نزدیک به ۴۰۰ لیتر
                        </li>
                        <li className="sect-5-list">
                           کاهش تولید گازهای آلاینده حدود ۳۰ کیلوگرم
                        </li>

                        <li className="sect-5-list">
                           کاهش مصرف برق نزدیک به ۱۰ هزار وات
                        </li>
                        </span>
                    </div>
                </div>


            </div>
        );
    }
}

export default Main;
