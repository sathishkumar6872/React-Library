import React from 'react';
import SideNav from './SideNav';
import logo from '../img/logo1.png';

class Dashboard extends React.Component {

    logout(){
        this.props.history.push('/logout');
    }
   
    render() {


        return (
            <>
            <div class="user-area dropdown float-right">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="user-avatar rounded-circle" src={logo} alt="User Avatar"/>
                    </a>

                    <div class="user-menu dropdown-menu">
                            <a class="nav-link" ><i class="fa fa-user"></i> My Profile</a>

                            <a class="nav-link outline-light" onClick={this.logout.bind(this)}><i class="fa fa-power-off"></i> Logout</a>
                        </div>
                    </div>
           
            <SideNav />
           </>
        );
    }
}



export default Dashboard;