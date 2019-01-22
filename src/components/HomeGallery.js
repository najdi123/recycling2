import React, {Component} from 'react';
import './main.css';

import pic1 from '../images/recycling cardboard.jpg';
import pic2 from '../images/sell waste books.jpg';
import pic3 from '../images/sell waste boxes.jpg';

import pic5 from '../images/waste paper recycling.jpg';



class HomeGallery extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-3 hgallery">
                        <img className="align" src={pic1} alt="خريدار ضايعات كارتن"/>
                    </div>
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic2} alt="خریدار کتاب باطله"/>
                    </div>
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic3} alt="بازیافت کارتن در تهران و کرج"/>
                    </div>
                    {/*<div className="col-sm-12 col-md-2 align">*/}
                        {/*<img src={pic4} alt=""/>*/}
                    {/*</div>*/}
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic5} alt="خريدار كاغذ باطله در تهران و کرج"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeGallery;
