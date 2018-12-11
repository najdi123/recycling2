import React, {Component} from 'react';
import './newcss.css';


import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import pic1 from '../images/813.png';
import pic2 from "../images/paper-1024x576.jpg";
import pic3 from "../images/image (1).jpg"
import pic4 from "../images/image (2).jpg"
import pic5 from "../images/image (3).jpg"
import pic6 from '../images/953.jpg';
import pic7 from '../images/954.jpg';
import pic8 from '../images/974.jpg';
import NewNavbar from "../components/NewNav";
import Equipment from "../components/Equipment";

class NewHome extends Component {
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
                            <h1>۰۹۱۲ ۱۱۶ ۰۷۴۳</h1>
                        </div>
                    </div>

                </div>
                <Navbar/>
                <NewNavbar/>
                <Carousel/>
                <div className="sect-2">
                    <h1 className="pad">FULL-SERVICE PAPER RECYCLING IN PITTSBURGH, PA</h1>
                    <h1 className="pad">ارائه تمامی خدمات بازیافت کاغذ و کارتن در تهران و کرج</h1>
                    <p className="pad">
                        Stanson Paper Processing is a locally owned full-service recycling center located in Springdale, Pennsylvania. Since 2003, we have been in the business of recycling paper, cardboard, and plastics in the Western Pennsylvania region. We offer recycling services for residential and commercial customers.
                    </p>
                    <p className="pad">
                        بنگاه ضایعات ابراهیمی مرکز بومی بازیافت با ارائه تمامی خدمات در محدوده تهران و کرج است. ما با بیش از 20 سال سابقه در زمینه بازیافت انواع کاغذ و کارتن آماده ارائه خدمات به مراکز سازمانی و مسکونی هستیم.
                    </p>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 ">
                            <img className="pad"  src={pic5} alt=""/>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <img className="pad"  src={pic4} alt=""/>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <img className="pad"  src={pic5} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="sect-3">
                    <h2>Our Mission</h2>
                    <p>Our mission is to develop economically sound, recyclable waste recovery programs for businesses dealing with cardboard, recyclable papers, and plastics.</p>
                    <p>ماموریت ما ایجاد برنامه بازیافت ضایعات اقتصادی برای کار با بازیافت کاغذ و کارتن مقوایی است. </p>
                    <p>
                        We understand the economic returns and efficiencies desired by the customer and take pride in developing waste recovery and recycling programs that are flexible, profitable, and Green.
                    </p>
                    <p>
                         ما درک میکنیم بازگشت اقتصادی و بهروری دلخواه مشتریان ما، ما افتخار میکنیم به ایجاد سیستمی منعطف، سودآور و مفید برای محیط زیست
                    </p>
                    <p>
                        We are dedicated leaders in the industry and are committed to our partners, providing excellence in service and program management.
                    </p>
                    <p>
                        ما از پیشروهای متخصص در این صنعت هستیم و به شرکای کاری خود متعهد هستیم و خدمات و مدیریت برنامه مون رو عالی فراهم میکنیم
                    </p>

                </div>
                <div className="sect-4 row">
                    <div className="col-xs-12 col-md-6">
                        <h3 className="sect-4-title">Maximum Economic Return</h3>
                        <h3 className="sect-4-title">حداکثر بازگشت اقتصادی</h3>
                        <img className="sect-4-image"  src={pic7} alt=""/>
                        <p className="sect-4-text">
                            We offer the highest rebates for recyclable materials, made possible by our sales and marketing team's ability to create a presence in national and international markets.
                        </p>
                        <p>
                            ما بهترین قیمتهارو برای مواد بازیافتی پرداخت میکنیم. این امر با تخصص و توانایی نیروهای بازاریابی ما محقق شده.
                        </p>
                        <p>
                            Our knowledge of market and economic trends is unequaled. Our goal is to maximize the economic return for the customer.
                        </p>
                        <p>
                            آشنایی ما با بازار و رونداقتصادی صنعت بازیافت با توجه به سابقه ما بی رقیب هست، هدف ما ایجاد بالاترین بازگشت اقتصادی به مشتریان ماست.
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <h3 className="sect-4-title">Unrivaled Customer Service</h3>
                        <h3 className="sect-4-title">خدمات غیرقابل رقابت</h3>
                        <img className="sect-4-image" src={pic6} alt=""/>
                        <p className="sect-4-text">
                            Businesses that choose Stanson Paper Processing for their recyclable waste recovery needs will receive service that is reliable, efficient, and environmentally sound.
                        </p>
                        <p>
                            شرکت هایی که بنگاه ضایعاتی ابراهیمی رو برای نیازهای بازیافت زباله های کاغذی خود انتخاب میکنند خدمات بهینه و قابل اعتماد و مفید برای محیط زیست دریافت میکنند.
                        </p>
                        <p>
                            Our service is unrivaled in the industry. Our dedicated service team will ensure that your needs are taken care of quickly and professionally. Our goal is 100% customer satisfaction.
                        </p>
                        <p>
                            خدمات ما در این صنعت غیر قابل رقابت هستند. تیم خدماتی اختصاصی ما، از برآورده شدن سریع و حرفه ای نیازهای شما اطمینان حاصل میکنند. هدف ما رضایت 100% مشتریان ماست.
                        </p>
                    </div>
                </div>
                <div className="sect-5 row">
                    <div className="col-xs-12 col-md-6">
                        <img src={pic8} alt="" className="sect-5-image"/>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <span dir="rtl">
                        <h3 className="sect-5-title">
                            Saving Resources
                        </h3>
                        <h3 className="sect-5-title">
                            صرفه جویی در منابع
                        </h3>
                        <h5 className="sect-5-title2">
                            One ton of paper made from recycled fiber saves the following resources:
                        </h5>
                        <h5 className="sect-5-title2">
                            بازیافت 1000 کیلوگرم کاغذ در مصرف منابع زیر صرفه جویی میکند:
                        </h5>
                        <li className="sect-5-list">
                            17 trees
                        </li>
                        <li className="sect-5-list">
                            17 دخت
                        </li>
                        <li className="sect-5-list">
                            3.3 cubic yards of landfill space
                        </li>
                        <li className="sect-5-list">
                            1 متر مربع از فضا در دفن زباله
                        </li>
                        <li className="sect-5-list">
                            360 gallons of water
                        </li>
                        <li className="sect-5-list">
                            1360 لیتر آب آشامیدنی
                        </li>
                        <li className="sect-5-list">
                            100 gallons of gasoline
                        </li>
                        <li className="sect-5-list">
                            380 لیتر گازوئیل
                        </li>
                        <li className="sect-5-list">
                            60 pounds of air pollutants
                        </li>
                        <li className="sect-5-list">
                            27.2 کیلوگرم گازهای آلاینده
                        </li>
                        <li className="sect-5-list">
                            10,401 kilowatts of electricity
                        </li>
                        <li className="sect-5-list">
                            10,401 کیلووات برق
                        </li>
                        </span>
                    </div>


                </div>
                <Equipment/>
            </div>
        );
    }
}

export default NewHome;