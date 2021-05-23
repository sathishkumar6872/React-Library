import React from 'react';
import AboutImg from '../img/about.jpg';

const About = () => (
    <section id="about" className="about-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="section-header">
                        <h2>Who we Area</h2>
                        <p>A little bit about our Library</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="about-img">
                        <img src={AboutImg} alt="About Image" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="item-text">
                        <h4>Library</h4>
                        <p>A library is a curated collection of sources of information and similar resources,
                        selected by experts and made accessible to a defined community for reference or borrowing.
                        It provides physical or digital access to material, and may be a physical location or a virtual space, or both.
                        A library's collection can include printed materials and other physical resources in many formats
                        such as DVDs, as well as access to information, music or other content held on bibliographic databases.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
