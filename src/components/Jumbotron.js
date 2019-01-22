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
                    <h4 className="desc"> خریدار ضایعات کاغذ باطله و کارتن در تهران و کرج</h4>
                    <br/>
                    <h4 className="desc bottomM">
                        خرید ضایعات کاغذ در محل شما یا خرید در محل انبار ما
                    </h4>

                    <br/>
                    <p className="desc2">مدیریت</p>
                    <h2 className="desc2">

                        ۰۹۱۲ ۱۱۶ ۰۷ ۴۳
                    </h2>
                    <br/>

                    <h2 className="desc2 bottomM">
                        ۰۹۱۲ ۵۲۵ ۶۱۵۸
                    </h2>
                    <h2 className="desc2">
                        ۰۹۱۲ ۶۶۵ ۷۹۸۹
                    </h2>

                </div>
                <Navbar/>
            </div>
        );
    }
}

export default Sidebar;
