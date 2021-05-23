import React from 'react';
import './Login.css';
import Logo from '../img/logo1.png';


class Login extends React.Component {

    home() {
        this.props.history.push('/');
    }

    constructor() {
        super();
        this.state = {
            err: ''
        };
    }
    login(e) {
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        if (username === 'admin' && password === 'admin') {
            this.props.history.push('/main');
        } else {
            this.setState({
                err: 'Invaild'
            });
        }
    }
    render() {
        let format = {
            color: "red"
        };

        return (
            <div>
                <div className="nav navbar-light bg-light cspt-responsive-header-bgcolor-white bgcolor">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark w-100">
                            <a className="navbar-brand btn-outline-light" onClick={this.home.bind(this)}><img src={Logo} alt="logo" height="80" /></a>
                            <button className="navbar-toggler bg-primary" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end " id="navbarToggleExternalContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item actiive">
                                        <a onClick={this.home.bind(this)} className="nav-link btn btn-outline-light">Home</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <span style={format}>{this.state.err !== '' ? this.state.err : ''}</span>

                <div class="global-container">
                    <div class="card login-form">
                        <div class="card-body">
                            <h3 class="card-title text-center">Login Here</h3>
                            <div class="card-text">

                                <form method="post" onSubmit={this.login.bind(this)}>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">User Name</label>
                                        <input type="text" id="username" class="form-control" placeholder="User Name" required autofocus />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>

                                        <input type="password" class="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <input type="submit" class="btn btn-primary" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;