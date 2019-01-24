import React, {Component} from 'react';
import './main.css';
import HomeGallery from "./HomeGallery";
import pic7 from "../images/waste paper compress machine.jpg";
import pic6 from "../images/waste and recycling services.jpg";
import pic8 from "../images/shreded box recycling.jpg";





class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="one container">
                    <span dir="rtl">
                        <h1 className="pad welcome-2">بازیافت کاغذ و کارتن در تهران و کرج</h1>
                        <h5 className="welcome-text">
                           مرکز بازیافت کاغذ ابراهیمی پیشرو در ارائه خدمات خرید و بازیافت کاغذ باطله و بازیافت کارتن (الیاف سلولزی) است. بازیافت، علاوه بر

                        <span className="highlight">
                            ایجاد درآمد از ضایعات دورریز
                      </span>

                            ، کمک بزرگی به حفظ طبیعت و بهداشت محیط است. با مشارکت در این فعالیت مهم شما هم نقشی در ایجاد این مزایا داشته باشید.
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
                                <p>ماموریت ما ایجاد برنامه های بازیافت ضایعات اقتصادی برای کار با بازیافت کاغذ و کارتن مقوایی است.</p>
                                <p>
                                    مرکز ضایعات ابراهیمی ارائه کننده بالاترین قیمت خرید ضایعات کاغذی، کارتن و مقوایی روز جهت جلب رضایت شما است. افتخار ما به ایجاد سیستمی منعطف، سودآور و مفید برای محیط زیست.
                                </p>
                               <p>
                                    ما با عنوان پیشروهای متخصص در این صنعت، به شرکای کاری خود متعهد هستیم و خدمات و مدیریت برنامه عالی برای مشتریان خود فراهم میکنیم.
                                </p>
                            </div>
                       </div>
                    </span>
                </div>

                <div className="sect-4 row">

                    <div className="col-xs-12 col-md-6">
                        <span dir="rtl">
                            <h3 className="sect-4-title">
                                حداکثر بازگشت اقتصادی
                            </h3>
                            <img className="sect-4-image"  src={pic7} alt="خدمات اختصاصی بازیافت و خرید و فروش ضایعات کاغذ و کارتن"/>
                            <p className="sect-4-text">
                                 قیمت خرید ضایعات کاغذ در ضایعات ابراهیمی رقابتی است. مبلغی که بابت فروش ضایعات کاغذ در مرکز ابراهیمی دریافت می‌کنید، منصفانه و جلب کننده رضایت شما خواهد بود.
                            </p>
                            <p className="sect-4-text">
                                آشنایی ما با بازار و رونداقتصادی صنعت بازیافت با توجه به سابقه ما بی رقیب هست، هدف ما ایجاد بالاترین بازگشت اقتصادی به مشتریان ماست.
                            </p>


                        </span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <span dir="rtl">
                            <h3 className="sect-4-title">
                                خدمات غیرقابل رقابت
                            </h3>
                            <img className="sect-4-image" src={pic6} alt="خریدار ضایعات کارتن های کارخانجات"/>

                            <p className="sect-4-text">
                                در مرکز ضایعات ابراهیمی کلیه مراحل خرید، انبار، بازیافت و فروش ضایعات کاغذی به انجام می‌رسند. ارائه سبد کاملی از خدمات فنی، سبب افزایش بازدهی و کنترل بیشتر در مسیر رسیدن به اهداف تجاری و طبیعی می‌گردد.
                            </p>
                            <p className="sect-4-text">
                               خدمات ما در این صنعت غیر قابل رقابت هستند. تیم خدماتی اختصاصی ما، از برآورده شدن سریع و حرفه ای نیازهای شما اطمینان حاصل میکنند. هدف ما رضایت 100% مشتریان ماست.
                            </p>

                        </span>
                    </div>
                </div>

                <div className="sect-5 row">
                    <div className="col-xs-12 col-md-6">
                        <img src={pic8} alt="خریدار ضایعات کارتن بازیافتی" className="sect-5-image"/>
                    </div>
                    <div className="col-xs-12 col-md-6 ">
                        <span dir="rtl">
                        <h3 className="sect-5-title">
                            صرفه‌جویی در منابع و حفظ طبیعت
                        </h3>
                        <h5 className="sect-5-title2">
                            بازیافت ۱۰۰۰ کیلو گرم کاغذ و مقوا مزایای زیر را به همراه دارد:
                        </h5>

                        <li className="sect-5-list">
                            کاهش نیاز به قطع ۱۷ درخت
                        </li>
                        <li className="sect-5-list">
                            کاهش فضای دفن زباله به اندازه یک متر مربع
                        </li>

                        <li className="sect-5-list">
                           کاهش مصرف بیش از ۱۳۶۰ لیتر آب
                        </li>

                        <li className="sect-5-list">
                           کاهش مصرف ۳۸۰ لیتر سوخت گازوئیل
                        </li>
                        <li className="sect-5-list">
                           کاهش تولید گازهای آلاینده حدود ۳۰ کیلوگرم
                        </li>

                        <li className="sect-5-list">
                           کاهش مصرف برق بیش از ۱۰ هزار کیلو وات
                        </li>
                        </span>
                    </div>
                </div>


            </div>
        );
    }
}

export default Main;
