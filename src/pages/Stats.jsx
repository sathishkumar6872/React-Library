import React from 'react';

const Stats = () => (
    <div className="stats-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-4 m-100">
                    <div className="single-stats">
                        <i className="fa fa-book fa-2x" >
                            <h2>10,000+</h2>
                            <p>BOOKS</p>
                        </i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-stats">
                        <i className="fa fa-user-plus fa-2x">
                            <h2>5000+</h2>
                            <p>Subscribers</p>
                        </i>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="single-stats">
                        <i className="fa fa-trophy fa-2x">
                            <h2>100+</h2>
                            <p>awards won</p>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Stats;