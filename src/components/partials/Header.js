import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    const branding = this.props.branding;
    return (
      <div>
          <nav className="navbar navbar-dark bg-success navbar-expand-sm mb-3">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link  to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add_contact" className="nav-link">
                            Add Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/getReq" className="nav-link">
                            Get Request
                        </Link>
                    </li>
                </ul>
            </div>
          </nav>
      </div>
    )
  }
}

Header.defaultProps = {
    branding: "My App"
}

Header.protoTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;