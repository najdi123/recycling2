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
                        <h1 className="pad welcome-2">ارائه تمامی خدمات بازیافت کاغذ و کارتن در تهران و کرج</h1>
                        <h5 className="welcome-text">
                            بنگاه بازیافت ابراهیمی یکی از پیشرو ها در بازیافت پسماند سلولزی و ارایه دهنده خدمات صنعتی در محدوده تهران و کرج میباشد، هدف ما نجات درخت ها، صرفه جویی و کاهش هزینه های نفتی میباشد.
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
                                <p>ماموریت ما ایجاد برنامه بازیافت ضایعات اقتصادی برای کار با بازیافت کاغذ و کارتن مقوایی است. </p>
                                <p>
                                    ما درک میکنیم بازگشت اقتصادی و بهروری دلخواه مشتریان ما، ما افتخار میکنیم به ایجاد سیستمی منعطف، سودآور و مفید برای محیط زیست.
                                </p>
                               <p>
                                    ما از پیشروهای متخصص در این صنعت هستیم و به شرکای کاری خود متعهد هستیم و خدمات و مدیریت برنامه مون رو عالی فراهم میکنیم.
                                </p>
                            </div>
                       </div>
                    </span>
                </div>

                <div className="sect-4 row">

                    <div className="col-xs-12 col-md-6">
                        <span dir="rtl">
                            <h3 className="sect-4-title">حداکثر بازگشت اقتصادی</h3>
                            <img className="sect-4-image"  src={pic7} alt=""/>
                            <p className="sect-4-text">
                                ما بهترین قیمتهارو برای مواد بازیافتی پرداخت میکنیم. این امر با تخصص و توانایی نیروهای بازاریابی ما محقق شده.
                            </p>

                            <p className="sect-4-text">
                                آشنایی ما با بازار و رونداقتصادی صنعت بازیافت با توجه به سابقه ما بی رقیب هست، هدف ما ایجاد بالاترین بازگشت اقتصادی به مشتریان ماست.
                            </p>
                        </span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <span dir="rtl">
                            <h3 className="sect-4-title">خدمات غیرقابل رقابت</h3>
                            <img className="sect-4-image" src={pic6} alt=""/>

                            <p className="sect-4-text">
                                شرکت هایی که بنگاه ضایعاتی ابراهیمی رو برای نیازهای بازیافت زباله های کاغذی خود انتخاب میکنند خدمات بهینه و قابل اعتماد و مفید برای محیط زیست دریافت میکنند.
                            </p>

                            <p className="sect-4-text">
                                خدمات ما در این صنعت غیر قابل رقابت هستند. تیم خدماتی اختصاصی ما، از برآورده شدن سریع و حرفه ای نیازهای شما اطمینان حاصل میکنند. هدف ما رضایت 100% مشتریان ماست.
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
                            صرفه جویی در منابع
                        </h3>
                        <h5 className="sect-5-title2">
                            بازیافت 1000 کیلوگرم کاغذ در مصرف منابع زیر صرفه جویی میکند:
                        </h5>

                        <li className="sect-5-list">
                            17 درخت
                        </li>
                        <li className="sect-5-list">
                            1 متر مربع از فضا در دفن زباله
                        </li>

                        <li className="sect-5-list">
                            1360 لیتر آب آشامیدنی
                        </li>

                        <li className="sect-5-list">
                            380 لیتر گازوئیل
                        </li>
                        <li className="sect-5-list">
                            27.2 کیلوگرم گازهای آلاینده
                        </li>

                        <li className="sect-5-list">
                            10,401 کیلووات برق
                        </li>
                        </span>
                    </div>
                </div>


            </div>
        );
    }
}

export default Main;