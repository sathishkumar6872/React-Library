import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';
import { RiContactsFill } from "react-icons/ri";

const Sidebar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <Link to='/main'>
                        <span className="icon"><FiHome aria-hidden="true" /></span>
                        <span className="title">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/report'>
                        <span className="icon"><BsPersonFill aria-hidden="true" /></span>
                        <span className="title">About</span>
                    </Link>
                </li>
                <li>
                    <Link to='/main'>
                        <span className="icon"><RiContactsFill aria-hidden="true" /></span>
                        <span className="title">Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;