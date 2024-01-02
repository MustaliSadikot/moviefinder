import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const mode=props.mode
  return (
    <nav
          className={`navbar navbar-expand-lg navbar-${
            mode ? "light" : "dark"
          } bg-${mode ? "light" : "dark"}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand fs-4 fw-medium ms-1" href="#">
              Movie<i className="bi bi-search text-primary"></i>Finder
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-1 me-4 fs-5"
                    aria-current="page"
                  to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active mx-1 me-4 fs-5" to="/about">
                    About
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className={`nav-link active mx-1 me-4 fs-5 text-${
                      mode ? "dark" : "light"
                    }`}
                  >
                    Suggest Us
                  </a>
                </li> */}
                <li className="nav-item">
                  <div className="form-check form-switch my-2 me-3 ms-1 fs-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.bar}
                    />
                    <label
                      className={`form-check-label text-${mode ? "dark" : "light"}`}
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Dark Mode
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navbar