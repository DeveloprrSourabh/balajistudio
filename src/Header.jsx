
import React from 'react'
import {Link } from 'react-router-dom'

const Header = () => {
  return (
<header className="header_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11 offset-lg-1">
            <div className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand" to="/home">
                <img src="images/logo.png" alt="" />
                <span>
                Owner: Mukesh &  JATIN SUTHAR                </span>
              </Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about"> About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/gallery"> Gallery </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    

  )
}

export default Header







