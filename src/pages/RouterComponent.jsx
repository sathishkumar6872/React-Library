import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Index from './Index';
import Dashboard from './Dashboard';

class RouterComponent extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/#about" component={Index} />
                    <Route path="/login1" component={Login} />
                    <Route path="/main" component={Dashboard} />
                    <Route path="/logout" component={Login} />

                    
                </Switch>
            </BrowserRouter>

        );
    }
}

export default RouterComponent;