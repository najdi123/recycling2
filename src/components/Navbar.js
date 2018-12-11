import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './navbar.css';



class Navbar extends Component {
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
                                <Link className="nav-link" to="/about">
                                    درباره ما
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/didyoukno">
                                    بیشتر بدانیم
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    تماس با ما
                                </Link>
                            </li>
                            <li className="nav-item right-padding">
                                <Link className="nav-link" to="/">
                                    خانه
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        );
    }
}

export default Navbar;
