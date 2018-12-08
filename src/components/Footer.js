import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './main.css';
import { Link } from 'react-router-dom';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h3 className="title footerT">برای اطلاع از قیمت روز تماس بگیرید</h3>
                            <h3 className="footerT">

                                ۰۹۱۲ ۱۱۶ ۰۷۴۳ - ۰۹۱۲ ۵۲۵ ۶۱۵۸
                            </h3>
                        </Col>
                        <Col md="6">
                            {/*<h5 className="title">Links</h5>*/}
                            <ul>
                                <li className="list-unstyled footer">
                                    <Link className="list" to="/">خانه</Link>
                                </li>
                                <li className="list-unstyled footer">
                                    <Link className="list" to="/contact">تماس با ما</Link>
                                </li>
                                <li className="list-unstyled footer">
                                    <Link className="list" to="/didyoukno">بیشتر بدانیم</Link>
                                </li>
                                <li className="list-unstyled footer">
                                    <Link className="list" to="/about">درباره ما</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: {" "}
                        Ebrahimi Recycling
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;

