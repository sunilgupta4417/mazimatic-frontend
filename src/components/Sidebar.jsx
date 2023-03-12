import React, {Component} from 'react';
import { Link,redirect  } from 'react-router-dom';

export default class Sidebar extends Component {
    render(){
      const Logout = (e)=>{
        e.preventDefault();
        localStorage.clear();
        window.location.replace("/");
      }
        return (
          <div className="sidebar" data-color="purple" data-background-color="black">
          <div className="logo">
            <Link to="index.html" className="simple-text logo-normal">
              <img src="logo/mazimatic_logo_db.png" className="img-fluid" alt=""/>
            </Link>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active ">
                <Link className="nav-link active_btn" to="/">
                  <i className="material-icons">home</i>
                  <p>Visit Homepage</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/dashboard">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/transactions">
                  <i className="material-icons">library_books</i>
                  <p>Transactions</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/profile">
                  <i className="material-icons">bubble_chart</i>
                  <p>Profile</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/settings">
                  <i className="material-icons">build</i>
                  <p>Settings</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" onClick={Logout}>
                  <i className="material-icons">exit_to_app</i>
                  <p>Log Out</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        )
    }
}