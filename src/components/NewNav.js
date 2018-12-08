import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './navbar.css';



class NewNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm header sticky  mb-4">
                <div className="wrapper">






                    <button className="navbar-toggler navbar-toggler-right ml-auto" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"><strong>منو</strong></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    تماس با ما
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">
                                    سوالات شما
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/recycling-equipment">
                                    لوازم بازیافت
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recycling-services">
                                    خدمات بازیافت
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/buying-recycling-material" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    خرید/فروش بازیافت
                                </Link>
                                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/buying-recycling-material/paper">بازیافت کاغذ</Link>
                                    <Link className="dropdown-item" to="/buying-recycling-material/box">بازیافت کارتن</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/newhome">
                                    خانه جدید
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        );
    }
}

export default NewNavbar;
