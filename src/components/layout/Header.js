import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a
          style={{
            color: "Yellow",
            fontSize: "35px",
            textAlign: "center",
            alignContent: "center",
          }}
          href="/#"
          className="navbar-brand"
        >
          {title}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/"
                className="nav-link"
                style={{ color: "aqua", fontSize: "25px" }}
              >
                <i className="fas fa-eye"></i> View
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/event/add"
                className="nav-link"
                style={{ color: "aqua", fontSize: "25px" }}
                href="/#"
              >
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/about"
                className="nav-link"
                style={{ color: "aqua", fontSize: "25px" }}
                href="/#"
              >
                <i className="fas fa-question"></i>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  title: "FindMyEvents",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
