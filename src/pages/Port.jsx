import React from 'react';
import Port1 from '../img/port1.jpg';
import Port2 from '../img/port2.jpg';
import Port3 from '../img/port3.jpg';
import Port4 from '../img/port4.jpeg';
import Port5 from '../img/port5.jpg';
import Port6 from '../img/port6.jpg';

const Port = () => (
    <section id="portfolio" className="portfolio-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="section-header">
                        <h2>Famous Books</h2>
                        <p>these are some books</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="single-work">
                        <img src={Port1} alt="Book1" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-work">
                        <img src={Port2} alt="Book2" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-work">
                        <img src={Port3} alt="Book3" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-work">
                        <img src={Port4} alt="Book4" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-work">
                        <img src={Port5} alt="Book5" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-work">
                        <img src={Port6} alt="Book6" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Port;