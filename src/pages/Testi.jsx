import React from 'react';
import Test1 from '../img/test1.jpg';
import Test2 from '../img/test2.jpg';
import Test3 from '../img/test3.jpg';

const Testi = () => (
    <div className="testimonial-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="section-header">
                        <h2>Our Team</h2>
                        <p>these are some comments from our customer</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="single-testi">
                        <div className="img-area">
                            <img src={Test1} alt="Member 1" />
                        </div>
                        <h2>Member 1</h2>
                        <p>Senior Developer</p>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="single-testi">
                        <div className="img-area">
                            <img src={Test2} alt="Member 2" />
                        </div>
                        <h2>Member 2</h2>
                        <p>Senior Developer</p>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="single-testi">
                        <div className="img-area">
                            <img src={Test3} alt="Member 3" />
                        </div>
                        <h2>Member 3</h2>
                        <p>Senior Developer</p>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Testi;