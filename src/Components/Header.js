import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends Component {

    static propTypes = {
      title: PropTypes.string,
    }

    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">{this.props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                {/* for active class in nav bar we use nav link and It's add by default active class in nav link */}
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
        )
    }
}
