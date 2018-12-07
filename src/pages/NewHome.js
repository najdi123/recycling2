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
                            <h1>0912 111 22 33</h1>
                        </div>
                    </div>

                </div>
                <Navbar/>
                <Carousel/>
                <div className="sect-2">
                    <h1 className="pad">FULL-SERVICE PAPER RECYCLING IN PITTSBURGH, PA</h1>
                    <p className="pad">Stanson Paper Processing is a locally owned full-service recycling center located in Springdale, Pennsylvania. Since 2003, we have been in the business of recycling paper, cardboard, and plastics in the Western Pennsylvania region. We offer recycling services for residential and commercial customers.</p>
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
                    <p>
                        We understand the economic returns and efficiencies desired by the customer and take pride in developing waste recovery and recycling programs that are flexible, profitable, and Green.
                    </p>
                    <p>
                        We are dedicated leaders in the industry and are committed to our partners, providing excellence in service and program management.
                    </p>

                </div>
                <div className="sect-4 row">
                    <div className="col-xs-12 col-md-6">
                        <h3 className="sect-4-title">Maximum Economic Return</h3>
                        <img className="sect-4-image"  src={pic7} alt=""/>
                        <p className="sect-4-text">We offer the highest rebates for recyclable materials, made possible by our sales and marketing team's ability to create a presence in national and international markets.

                            Our knowledge of market and economic trends is unequaled. Our goal is to maximize the economic return for the customer.
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <h3 className="sect-4-title">Unrivaled Customer Service</h3>
                        <img className="sect-4-image" src={pic6} alt=""/>
                        <p className="sect-4-text">Businesses that choose Stanson Paper Processing for their recyclable waste recovery needs will receive service that is reliable, efficient, and environmentally sound.

                            Our service is unrivaled in the industry. Our dedicated service team will ensure that your needs are taken care of quickly and professionally. Our goal is 100% customer satisfaction.
                        </p>
                    </div>
                </div>
                <div className="sect-5 row">
                    <div className="col-xs-12 col-md-5">
                        <h3 className="sect-5-title">
                            Saving Resources
                        </h3>
                        <h5 className="sect-5-title2">
                            One ton of paper made from recycled fiber saves the following resources:
                        </h5>
                        <li className="sect-5-list">
                            17 trees
                        </li>
                        <li className="sect-5-list">
                            3.3 cubic yards of landfill space
                        </li>
                        <li className="sect-5-list">
                            360 gallons of water
                        </li>
                        <li className="sect-5-list">
                            100 gallons of gasoline
                        </li>
                        <li className="sect-5-list">
                            60 pounds of air pollutants
                        </li>
                        <li className="sect-5-list">
                            10,401 kilowatts of electricity
                        </li>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <img src={pic8} alt="" className="sect-5-image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewHome;