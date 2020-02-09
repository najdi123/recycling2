import React from "react";
// import { Col, Container, Row, Footer } from "mdbreact";
import './main.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="font-small pt-4 mt-4">
                <div className="text-center text-md-left">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h3 className="title footerT">برای اطلاع از قیمت روز تماس بگیرید</h3>
                            {/*<h3 className="footerT">*/}
                            {/*    <span>۰۹۱۲ ۱۱۶ ۰۷ ۴۳</span>*/}

                            {/*</h3>*/}
                            <h3 className="footerT">

                                ۰۹۱۲ ۵۲۵ ۶۱۵۸ - ۰۹۱۲ ۶۶۵ ۷۹۸۹
                            </h3>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            {/*<h5 className="title">Links</h5>*/}
                            <ul>
                                <li className="list-unstyled footer">
                                    <Link className="list" to="/">خانه</Link>
                                </li>
                                <li className="list-unstyled footer">
                                    <Link className="list" to="/didyoukno">بیشتر بدانیم</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: {" "}
                        Ebrahimi Recycling
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

