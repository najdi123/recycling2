import React, {Component} from 'react';

class Equipment extends Component {
    render() {
        return (
            <div className="equip container newhome">



                <h1 className="pad">
                    ماشین آلات بازیافت، فروش و سرویس در محدوده تهران و کرج
                </h1>
                <div className="row">
                    <div className="col-xs-12 col-md-4 start-right">
                        <span dir="rtl">
                            <h2>فروش ماشین آلات</h2>
                            <p>
                                انواع ماشین آلات، برندهای مختلف، نو و دست دوم
                            </p>
                            <li>Balers</li>
                            <li>Compactors</li>
                            <li>Recycling containers</li>
                        </span>
                    </div>
                    <div className="col-xs-12 col-md-4 start-right">
                        <span dir="rtl">
                            <h2>سرویس ماشین آلات</h2>

                            <li>Scheduled maintenance</li>
                            <li>تعمیرات اضطراری</li>
                            <li>نصب ماشیت آلات</li>
                            <li>Equipment rigging and transport</li>
                        </span>
                    </div>
                    <div className="col-xs-12 col-md-4 start-right">
                        <span dir="rtl">
                            <h2>Baling Wire</h2>
                            <p>
                                Many sizes of wire in stock.
                            </p>
                            <li>14g x 14' Bale ties</li>
                            <li>12g x 16' Bale ties</li>
                            <li>12g x 22' Bale ties</li>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Equipment;