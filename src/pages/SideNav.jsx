import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Sidenav.css';
import logo from '../img/logo1.png';
import Overview from './Overview';
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reports } from './Reports';

function SideNav() {
    const [showNav, setShowNav] = useState(true)
    return (
        <div className="con">
            <Router>
                <header>
                    <img src={logo} alt='Logo' className='logo' />
                    <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
                    
                </header>

                

                    <Sidebar show={showNav} />

                    <div className="main">
                        <Route path="/main" exact component={Overview} />
                        <Route path="/report" component={Reports} />
                    </div>
            </Router>

        </div>
    )
}

export default SideNav;