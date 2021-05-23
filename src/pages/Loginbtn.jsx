import React from 'react';

class Loginbtn extends React.Component {

    loginb() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <li className="nav-item">
                <button onClick={this.loginb.bind(this)} className="nav-link">Logout</button>
            </li>
        );
    }
}
export default Loginbtn;