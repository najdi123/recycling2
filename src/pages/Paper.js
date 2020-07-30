import React, {Component} from 'react';
import './newcss.css';

import pic2 from "../images/old newspaper.jpg";
import pic3 from "../images/shredded paper.jpg"
import pic4 from "../images/sell waste paper.jpg"

import pic5 from "../images/waste boxes.jpg";
import pic6 from "../images/compressed waste boxes.jpg"
import pic7 from "../images/recycling boxes.jpg"


class Paper extends Component {
    render() {
        let w = window.innerWidth;
        return (
            <div className="newhome">

                <div className="sect-2 container">
                                <span dir="rtl">
                    <h1 className="pad">
                    خرید کاغذ باطله در تهران و کرج به قیمت مناسب
                    </h1>

                    <p className="pad">
                    خریدار کتاب و کاغذ باطله در محل شما به قیمت منصفانه
                    </p>
                    <br/>
                    <h1 className="sect-6-title">خریدار کاغذ باطله</h1>
                                </span>
                    <div className="row">
                    
                        <div className="col-sm-12 col-md-4 start-right ">
                            <span dir="rtl">

                                
                               
                                <li>خریدار کاغذ باطله</li>
                                <li>خریدار اوراق اداری</li>
                                <li>خریدار مجله</li>
                                <li>خریدار مجله باطله</li>
                                <li>خریدار روزنامه باطله</li>
                                <li>خریدار روزنامه</li>


                                <li>روزنامه قدیمی</li>
                                <li>کتاب باطله</li>

                                
                          


                            </span>
                        </div>
                        <div className="col-sm-12 col-md-4 start-right">
                            <span dir="rtl">
                            <li>دفاتر نیازمندها (کتاب اول)</li>
                                <li>خريدار كتاب باطله در تهران</li>
                                <li>خريدار كتاب باطله در كرج</li>
                                <li>خريدار كتاب باطله در غرب تهران</li>
                                <li>خريدار كاغذ باطله در كرج</li>
                                <li>خريدار كاغذ باطله در تهران</li>
                                <li>خريدار كاغذ باطله در محل</li>
                                {/* <h1 className="sect-6-title">خرید کارتن باطله</h1>
                                <li>خريدار كارتن</li>
                                <li>خريدار كارتن در تهران</li>
                                <li>خريدار كارتن در غرب تهران</li>
                                <li>خريدار كارتن در کرج</li>
                                <li>کارتن موزی</li>
                                <li>خریدار کارتن موزی</li>
                                <li>بازیافت کارتن</li>
                                <li>بازیافت کارتن در تهران</li>
                                <li>بازیافت کارتن در غرب تهران</li>
                                <li>بازیافت کارتن در کرج</li> */}

                            </span>
                        </div>
                        <div className="col-sm-12 col-md-4 start-right">
                            <span dir="rtl">
                            <li>خريدار كتاب باطله</li>
                                <li>خريدار روزنامه باطله</li>

                                <li>خریدار کاغذ باطله درب منزل</li>
                                <li>امحای اسناد محرمانه در حضور نماینده شما</li>

                                <li>کاغذ باطله دفتری</li>
                                <li>کاغذ فتوکپی و چاپ</li>
                                <li>کاغذ گلاسه و مجله</li>
                                {/* <h1 className="sect-6-title">خرید ضایعات کاغذی</h1>


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
                                <li>خریدار ضایعات کارتن های شرکت ها</li> */}

                            </span>
                        </div>
                    </div>
                </div>
                <div className="paper-3 container">
                    <span dir="rtl">
                        <p>
                        مقدار کاغذ باطله شما هر چقدر که باشد ما خریدار آن هستیم
                       </p>
                    </span>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 b-image" >
                            <img className="image-pad" style={{ maxWidth: w }} src={pic2} alt="خریدار روزنامه باطله"/>
                        </div>
                        <div className="col-xs-12 col-md-4 b-image">
                            <img className="image-pad" src={pic3} style={{ maxWidth: w }} alt="پوشال کاغذ و کارتن"/>
                        </div>
                        <div className="col-xs-12 col-md-4 b-image" >
                            <img className="image-pad" src={pic4} style={{ maxWidth: w }} alt="بازیافت ضایعات روزنامه"/>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-xs-12 col-md-4 b-image">
                            <img className="image-pad" src={pic5} style={{ maxWidth: w }} alt="خريدار ضايعات كارتن در غرب تهران"/>
                        </div>
                        <div className="col-xs-12 col-md-4 b-image">
                            <img className="image-pad" src={pic6} style={{ maxWidth: w }} alt="ضایعات پرس شده کارتن"/>
                        </div>
                        <div className="col-xs-12 col-md-4 b-image">
                            <img className="image-pad" src={pic7} style={{ maxWidth: w }} alt="پرس كارتن در تهران و کرج"/>
                        </div>
                    </div> */}

                </div>

            </div>
        );
    }
}

export default Paper;
