import React, {Component} from 'react';
import './navbar.css';
import Navbar from './Navbar';

class Sidebar extends Component {
    render() {
        return (
            <div className="jumbo-wrapper">
                <div className="brand " href="#">

                    <h1 className="name">انبار کاغذ باطله ابراهیمی </h1>
                    <br/>
                    <h4 className="desc"> خریدار کاغذ باطله به قیمت مناسب در تهران و کرج 09121160743</h4>
                    <br/>
                    <h4 className="desc bottomM">
                    خریدار کتاب و کاغذ باطله و مجله باطله در محل شما 09125256158
                    </h4>

                    <br/>
                    {/*<h2 className="desc2">مدیریت</h2>*/}
                    {/*<h2 className="desc2 bottomD">*/}

                    {/*    ۰۹۱۲ ۱۱۶ ۰۷ ۴۳*/}
                    {/*</h2>*/}

                    <h2>(بالاترین قیمت را از ما بخواهید)</h2>
                    <br/>

                    <h2 className="descB bottomM">
                    ۰۹۱۲ ۱۱۶ ۰۷ ۴۳
                    </h2>
                    <h2 className="descB">
                    ۰۹۱۲ ۵۲۵ ۶۱۵۸
                    </h2>

                </div>
                <Navbar/>
            </div>
        );
    }
}

export default Sidebar;
