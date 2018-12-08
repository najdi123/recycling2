import React, {Component} from 'react';
import './navbar.css';
import Navbar from './Navbar';

class Sidebar extends Component {
    render() {
        return (
            <div className="jumbo-wrapper">
                <div className="brand " href="#">

                    <h1 className="name">بنگاه ضایعات ابراهیمی </h1>
                    <br/>
                    <h4 className="desc">خریدار ضایعات کارتن و کاغذ باطله در محدوده تهران و کرج</h4>
                    <br/>
                    <h4 className="desc bottomM">
                        به صورت تحویلی در انبار ما و خرید در محل شما
                    </h4>

                    <br/>

                    <h2 className="desc2">
                        ۰۹۱۲ ۱۱۶ ۰۷ ۴۳
                    </h2>
                    <br/>
                    <h2 className="desc2 bottomM">
                        ۰۹۱۲ ۵۲۵ ۶۱۵۸
                    </h2>

                </div>
                <Navbar/>
            </div>
        );
    }
}

export default Sidebar;