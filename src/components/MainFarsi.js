import React, {Component} from 'react';
import './main.css';
import HomeGallery from "./HomeGallery";





class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="one container">
                    <span dir="rtl">
                        <h2 className="welcome">

                             به بنگاه بازیافت ابراهیمی خوش آمدید
                        </h2>
                        <h5 className="welcome-text">
                            بنگاه بازیافت ابراهیمی یکی از پیشرو ها در بازیافت پسماند سلولزی و ارایه دهنده خدمات صنعتی در محدوده تهران و کرج میباشد، هدف ما نجات درخت ها، صرفه جویی و کاهش هزینه های نفتی میباشد.
                        </h5>
                    </span>
                </div>
                <div className="two">
                    <HomeGallery/>
                </div>


            </div>
        );
    }
}

export default Main;