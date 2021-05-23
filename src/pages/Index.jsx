import Home from './Home';
import Contact from './Contact';
import Stats from './Stats';
import Testi from './Testi';
import Port from './Port';
import About from './About';
import Footer from './Footer';
import React from 'react';
import Logo from '../img/logo1.png';

class Index extends React.Component {

    loginb() {
        this.props.history.push('/login1');
    }

    render() {

        return (
            <div className="index">
                <div className="nav fixed-top navbar-light bg-light cspt-responsive-header-bgcolor-white  bgcolor">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark w-100">
                            
                            <a className="navbar-brand" href="#"><img src={Logo} alt="logo" height="80" /></a>
                            <button className="navbar-toggler bg-primary" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end " id="navbarToggleExternalContent">
                                <ul className="navbar-nav nav-group">
                                    <li className="nav-item active">
                                        <a className="nav-link btn" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn" href="#about">About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link btn" href="#portfolio">Books</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn" href="#contact">contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={this.loginb.bind(this)} className="nav-link btn btn-outline-light">Login</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <Home />

                <About />

                <Stats />

                <Port />

                <Testi />

                <Contact />

                <Footer />

            </div>
        );
    }
}

export default Index;
